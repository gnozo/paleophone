"""Vérifications de Diaclase (navigateur sans tête). Lancer : python diaclase/tests/test_diaclase.py
Requiert : playwright (Chromium). Diaclase s'ouvre aussi directement depuis le disque (file://)."""
import pathlib, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
HTML_FILE = ROOT / "diaclase" / "diaclase.html"
fails = 0
def check(name, ok, info=""):
    global fails
    print(("OK   " if ok else "FAIL ") + name + (f"  {info}" if info else ""))
    if not ok: fails += 1

src = HTML_FILE.read_text(encoding="utf-8")
# signatures fonctionnelles de la version d'analyse 1.9.8 (récupérée et vérifiée en mars 2026)
for sig in ["countdown-overlay", "detectRegime", "TRICLOT_SEUILS", "mapping_profile", "sbar-lx", "mk-add", "refreshRadarsIfSession"]:
    check(f"signature présente : {sig}", sig in src)
check("aucun script chargé en ligne", not re.search(r'<script[^>]+src=["\']https?:', src))
check("palette ambre retirée", "#ffb000" not in src.lower() and "255,176,0" not in src)
check("aucune police à chasse fixe de l'ancien thème", "Courier" not in src)
check("aucun nom de produit tiers", all(w not in src.lower() for w in ["rascal", "dstretch"]))

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1280, "height": 800})
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
    pg.goto(HTML_FILE.as_uri())
    pg.wait_for_timeout(1200)
    check("Chart.js embarqué disponible", pg.evaluate("typeof Chart") == "function")
    tabs = pg.eval_on_selector_all(".tabs button", "bs => bs.map(b => b.textContent.trim())")
    check("onglets présents", len(tabs) >= 4, str(tabs))
    for i in range(len(tabs)):
        pg.click(f".tabs button >> nth={i}")
        pg.wait_for_timeout(200)
    check("logo de la coquille (Baskerville)", "Baskerville" in pg.evaluate("getComputedStyle(document.querySelector('.logo')).fontFamily"))
    check("fond noir", pg.evaluate("getComputedStyle(document.body).backgroundColor") == "rgb(0, 0, 0)")
    filled = pg.evaluate("[...document.querySelectorAll('input[type=range]')].every(i => i.style.getPropertyValue('--p') !== '')")
    check("curseurs : remplissage à gauche du pointeur", filled)
    check("aucune erreur JS", not errs, "; ".join(errs[:3]))
    b.close()
print("FAILS:", fails)
raise SystemExit(1 if fails else 0)
