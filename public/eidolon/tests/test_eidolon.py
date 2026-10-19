"""Vérifications d'Eidolon (navigateur sans tête). Lancer : python eidolon/tests/test_eidolon.py
Requiert : playwright (Chromium), numpy, pillow. Démarre son propre serveur HTTP sur la racine du dépôt."""
import io, json, pathlib, threading, functools, http.server, socketserver
import numpy as np
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
HTML_FILE = ROOT / "eidolon" / "eidolon.html"
fails = 0
def check(name, ok, info=""):
    global fails
    print(("OK   " if ok else "FAIL ") + name + (f"  {info}" if info else ""))
    if not ok: fails += 1

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(ROOT)))
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f"http://127.0.0.1:{port}/eidolon/eidolon.html"

def shot(pg):
    return np.asarray(Image.open(io.BytesIO(pg.locator("#cv").screenshot())).convert("L"), dtype=float)

src = HTML_FILE.read_text(encoding="utf-8").lower()
check("aucun nom de produit tiers", all(w not in src for w in ["rascal", "dstretch", "harman"]))
check("aucun contenu éditorial de site", all(w not in src for w in ["bernifal", "pémendrant", "benjaminefrati"]))
check("aucune ressource en ligne chargée", "https://" not in src.split("</style>")[0] and "cdn." not in src)

with sync_playwright() as p:
    b = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])
    pg = b.new_page(viewport={"width": 1200, "height": 760})
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
    # ralentir le second modèle pour observer la pastille et la non-interruption
    slow = {"on": False}
    def route(r):
        if slow["on"] and r.request.url.endswith("galet-incise.glb"):
            import time; time.sleep(2.5)
        r.continue_()
    pg.route("**/*.glb", route)

    pg.goto(URL)
    pg.wait_for_function("window.__eidolon && window.__eidolon.cur === 0", timeout=30000)
    pg.wait_for_timeout(600)
    e = pg.evaluate("({n: __eidolon.items.length, v: __eidolon.VERSION})")
    check("liste d'exemples chargée", e["n"] == 2, str(e))
    img = shot(pg)
    check("le modèle est rendu (image non uniforme)", img.std() > 8, f"écart-type {img.std():.1f}")

    # lumière rasante : l'image change
    pg.evaluate("document.querySelector('#seg-mode button[data-m=lumiere]').click()")
    pg.evaluate("__eidolon.cfg.boucle='aucune'")
    a = shot(pg)
    pg.evaluate("(()=>{const c=__eidolon.cfg; c.lx=-2.8; c.ly=0.1; c.lz=0.25;})()")
    pg.evaluate("document.querySelectorAll('input[type=range]')[3].dispatchEvent(new Event('input'))")
    pg.wait_for_timeout(300)
    c = shot(pg)
    check("déplacer la lumière modifie l'image", np.abs(a - c).mean() > 2, f"écart moyen {np.abs(a-c).mean():.1f}")

    # navigation stricte, répétition ignorée, pastille pendant le chargement
    pg.evaluate("(()=>{ for (const [u,e] of __eidolon.cache) if (u.endsWith('galet-incise.glb')) __eidolon.cache.delete(u); })()")
    slow["on"] = True
    pg.keyboard.down("ArrowRight")
    pg.wait_for_timeout(150)
    for _ in range(5):
        pg.keyboard.down("ArrowRight")   # événements répétés (touche tenue)
    pg.wait_for_timeout(150)
    st = pg.evaluate("({cur: __eidolon.cur, target: __eidolon.target, past: document.querySelector('#pastille').classList.contains('show')})")
    check("touche tenue : une seule avance", st["target"] == 1, str(st))
    check("pendant le chargement, le modèle affiché reste", st["cur"] == 0, str(st))
    check("pastille visible tant que la touche est tenue", st["past"], str(st))
    pg.keyboard.up("ArrowRight")
    check("pastille masquée au relâchement", not pg.evaluate("document.querySelector('#pastille').classList.contains('show')"))
    pg.wait_for_function("__eidolon.cur === 1", timeout=20000)
    check("bascule automatique dès que le modèle est prêt", True)
    slow["on"] = False
    pg.keyboard.press("ArrowRight")
    pg.wait_for_timeout(200)
    check("pas de dépassement en fin de liste", pg.evaluate("__eidolon.cur") == 1)
    pg.keyboard.press("Shift+ArrowLeft")
    pg.wait_for_function("__eidolon.cur === 0", timeout=10000)
    check("Maj+flèche : prochain modèle prêt", True)

    # session .paleo : aller-retour et refus d'un autre outil
    with pg.expect_download() as dl:
        pg.evaluate("__eidolon.exportPaleo()")
    path = dl.value.path()
    env = json.loads(pathlib.Path(path).read_text(encoding="utf-8"))
    check("enveloppe .paleo commune", env.get("paleo") == 1 and env.get("kind") == "eidolon/session" and env.get("id") and env["tool"]["name"] == "eidolon", env.get("kind"))
    check("nom de fichier horodaté", dl.value.suggested_filename.startswith("eidolon_") and dl.value.suggested_filename.endswith(".paleo"), dl.value.suggested_filename)
    env["payload"]["courant"] = 1
    pg.evaluate("t => __eidolon.importPaleo(t)", json.dumps(env))
    pg.wait_for_function("__eidolon.cur === 1", timeout=20000)
    check("session rouverte : modèle courant restauré", True)
    pg.evaluate("t => __eidolon.importPaleo(t)", json.dumps({"paleo": 1, "kind": "lucidstrata/session", "payload": {}}))
    check("session d'un autre outil refusée proprement", "autre outil" in pg.text_content("#status"), pg.text_content("#status"))

    check("aucune erreur JS", not errs, "; ".join(errs[:3]))
    b.close()
srv.shutdown()
print("FAILS:", fails)
raise SystemExit(1 if fails else 0)
