"""Vérifications de l'entrée MIDI de LucidStrata (messages simulés, sans contrôleur). Lancer : python lucidstrata/tests/test_midi.py"""
import pathlib, json
from playwright.sync_api import sync_playwright
HTML = pathlib.Path(__file__).parent.parent.joinpath("lucidstrata.html").resolve().as_uri()
fails = 0
def check(name, ok, info=""):
    global fails
    print(("OK   " if ok else "FAIL ") + name + (f"  {info}" if info else "")); fails += (not ok)
with sync_playwright() as p:
    b = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"]); pg = b.new_page()
    errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto(HTML); pg.wait_for_timeout(500)
    pg.evaluate("MIDI.map={}; MIDI.learn=true")
    pg.dispatch_event('.sl input[data-k="relief"]', "pointerdown")
    check("apprentissage : curseur ciblé", pg.evaluate("MIDI.target && MIDI.target.dataset.k") == "relief")
    pg.evaluate("midiMessage({data:[0xB0,21,64]})")
    check("CC appris → curseur relief", pg.evaluate("JSON.stringify(MIDI.map)") == json.dumps({"0:21": {"k": "relief", "o": "cfg"}}, separators=(",", ":")), pg.evaluate("JSON.stringify(MIDI.map)"))
    pg.evaluate("MIDI.learn=false")
    pg.evaluate("midiMessage({data:[0xB0,21,127]})"); hi = pg.evaluate("cfg.relief")
    pg.evaluate("midiMessage({data:[0xB0,21,0]})"); lo = pg.evaluate("cfg.relief")
    mn, mx = pg.evaluate("[+document.querySelector('.sl input[data-k=relief]').min, +document.querySelector('.sl input[data-k=relief]').max]")
    check("CC 0 → minimum, 127 → maximum", abs(lo - mn) < 1e-9 and abs(hi - mx) < 1e-9, f"{lo}..{hi} pour {mn}..{mx}")
    check("valeur journalisée", pg.evaluate("JOURNAL.evenements.some(e=>e.type==='set'&&e.k==='relief')"))
    pg.evaluate("seq.steps=[snapshotStep(),snapshotStep(),snapshotStep()]; seq.idx=0; renderSteps()")
    pg.evaluate("midiMessage({data:[0x90,60,100]})")
    check("note → pas suivant", pg.evaluate("seq.idx") == 1)
    pg.evaluate("midiMessage({data:[0x90,60,0]})")
    check("note-off (vélocité 0) ignorée", pg.evaluate("seq.idx") == 1)
    pl = json.loads(pg.evaluate("paleoJSON()"))
    check("correspondances dans la session .paleo", pl["payload"].get("midi", {}).get("correspondances", {}).get("0:21", {}).get("k") == "relief")
    check("version 3.7 dans l'enveloppe", pl["tool"]["version"] == "3.7")
    check("aucune erreur JS", not errs, "; ".join(errs[:3]))
    b.close()
print("FAILS:", fails); raise SystemExit(1 if fails else 0)
