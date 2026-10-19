from PIL import Image
import io, base64, numpy as np, json, zipfile, hashlib
from playwright.sync_api import sync_playwright
exec(open(__import__('pathlib').Path(__file__).with_name('test_moteur.py')).read().split('# ---------- référence numpy')[0].split('from playwright.sync_api import sync_playwright')[1])
fails=0
def check(n,c,d=""):
    global fails; print(("OK   " if c else "FAIL ")+n+("  "+d if d else "")); fails+= (not c)
# trois images différentes
imgs={}
for i,col in enumerate([(200,60,40),(40,160,90),(60,80,200)]):
    g=(np.indices((120,160)).sum(0)%60*2).astype(np.float64)
    arr=np.zeros((120,160,3),np.uint8)
    for ch in range(3): arr[...,ch]=np.clip(col[ch]*0.5+g+np.random.default_rng(i).normal(0,8,(120,160)),0,255)
    b=io.BytesIO();Image.fromarray(arr).save(b,"PNG");imgs[f"img{i}.png"]=b.getvalue()
with sync_playwright() as p:
    br=p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
    pg=br.new_page(viewport={"width":1280,"height":820});errs=[];pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto(HTML);pg.wait_for_timeout(300)
    # dépôt de 3 images → dossier
    pg.set_input_files("#fin",[{"name":n,"mimeType":"image/png","buffer":d} for n,d in imgs.items()])
    pg.wait_for_timeout(600)
    st=pg.evaluate("()=>({n:LS.dossier.items.length,idx:LS.dossier.idx,badge:document.getElementById('badge').textContent,playing:document.getElementById('b-play').textContent})")
    check("dossier de 3 images chargé, lecture lancée",st["n"]==3 and st["idx"]==0 and "img0" in st["badge"] and st["playing"]=="pause",str(st))
    # variations : zoom et bougé dans la plage
    pg.evaluate("()=>{LS.cfg.variations=1;LS.newVariation()}")
    v=pg.evaluate("()=>LS.varyNow")
    m=(v["zoom"]-1)/(2*v["zoom"])
    check("variations : zoom ≤ 1,10 et bougé dans la marge",1<=v["zoom"]<=1.10 and all(abs(x)<=m+1e-9 for x in v["pan0"]+v["pan1"]) and abs(v["az"])<=20 and abs(v["el"])<=12,str({k:(round(x,3) if isinstance(x,float) else x) for k,x in v.items()}))
    # cadrage visible dans le rendu : avec zoom, le pixel central change peu, les bords changent
    pg.evaluate("()=>{Object.assign(LS.cfg,{relief:1,amplitude:1,recentrage:0,tours:0,variations:0});LS.newVariation();LS.renderNow()}")
    a=pg.evaluate("()=>Array.from(LS.readPixels().data.slice(0,4*160))")  # première ligne (bas)
    pg.evaluate("()=>{LS.cfg.variations=1;LS.newVariation();LS.renderNow()}")
    b=pg.evaluate("()=>Array.from(LS.readPixels().data.slice(0,4*160))")
    check("le cadrage (zoom/bougé) modifie l'image rendue",a!=b)
    # suivante / aléatoire / durée
    pg.evaluate("()=>LS.dossierNext(1)");pg.wait_for_timeout(300)
    check("image suivante",pg.evaluate("()=>LS.dossier.idx")==1)
    pg.evaluate("()=>{LS.dossier.ordre='aleatoire';LS.dossier.dureeCycles=1;Object.assign(LS.cfg,{bpm:300,tempsParCycle:1})}")  # cycle 0,2 s
    pg.wait_for_timeout(1500)
    check("avance automatique en ordre aléatoire (passages ≥ 3)",pg.evaluate("()=>LS.dossier.passages")>=3,str(pg.evaluate("()=>LS.dossier.passages")))
    # journal : des événements existent, un curseur coalescé
    pg.evaluate("()=>{for(let i=0;i<5;i++)LS.journal('set',{k:'relief',v:i/10})}")
    ev=pg.evaluate("()=>LS.JOURNAL.evenements")
    types=[e["type"] for e in ev]
    check("journal : dossier, sources, lecture, réglages enregistrés","dossier" in types and "source" in types and "lecture" in types and sum(1 for e in ev if e["type"]=="set" and e["k"]=="relief")==1,str(types[:8]))
    # rejeu : relief revient à cfg0 puis suit le journal
    pg.evaluate("()=>{LS.cfg.relief=0.9;LS.replayStart(false)}")
    r0=pg.evaluate("()=>LS.cfg.relief")
    for _ in range(60):
        pg.wait_for_timeout(250)
        if pg.evaluate("()=>LS.replay===null"): break
    check("rejeu : retour à l'état initial, relecture au rythme du journal, arrêt en fin",r0==0.0 and pg.evaluate("()=>LS.cfg.relief")==0.4 and pg.evaluate("()=>LS.replay===null"),f"{r0} → {pg.evaluate('()=>LS.cfg.relief')}")
    # .paleo : contient dossier + journal
    o=json.loads(pg.evaluate("()=>LS.paleoJSON()"))
    check(".paleo : dossier et journal présents",o["payload"]["dossier"]["noms"]==list(imgs) and len(o["payload"]["journal"]["evenements"])>5)
    # zip : via download
    with pg.expect_download(timeout=15000) as dl:
        pg.evaluate("()=>LS.exportDossierSession()")
    path=dl.value.path();z=zipfile.ZipFile(path);names=z.namelist()
    ok=z.testzip() is None
    srcs=[n for n in names if "/sources/" in n]
    same=all(z.read([n for n in names if n.endswith("/sources/"+k)][0])==v for k,v in imgs.items())
    check("zip valide (CRC), 3 sources intactes, session.paleo, LISEZMOI",ok and len(srcs)==3 and same and any(n.endswith("session.paleo") for n in names) and any(n.endswith("LISEZMOI.txt") for n in names),str(names))
    sp=json.loads(z.read([n for n in names if n.endswith("session.paleo")][0]).decode())
    check("session.paleo du zip = même id de session",sp["id"]==o["id"])
    # migration d'un ancien .paleo (v3.5)
    old={"paleo":1,"kind":"lucidstrata/session","id":"abc","tool":{"name":"lucidstrata","version":"3.5"},"created":"x","payload":{"cfg":{"space":"lab","lin":True,"varv":0.5,"vmode":"rascal","push":0.7,"mix":0.2,"rate":2,"mode":"pp","split":True,"splitPos":0.3,"statsMode":"track"},"limiter":{"on":False,"minT":0.5},"sequencer":{"order":"rnd","steps":[{"cycles":2,"p":{"space":"yuv","varv":1,"vmode":"geo","push":1,"mix":0,"mode":"sin"}}]}}}
    pg.evaluate("(o)=>LS.loadSession(o)",old)
    c=pg.evaluate("()=>({cfg:LS.cfg,lim:LS.lim,ordre:LS.seq.ordre,step:LS.seq.steps[0]})")
    check("migration v3.5 → lexique",c["cfg"]["espace"]=="lab" and c["cfg"]["lineaire"] and c["cfg"]["relief"]==0.5 and c["cfg"]["reliefMode"]=="fondu" and c["cfg"]["amplitude"]==0.7 and c["cfg"]["recentrage"]==0.2 and c["cfg"]["tours"]==2 and c["cfg"]["mouvement"]=="allerRetour" and c["cfg"]["comparaison"] and c["cfg"]["comparaisonPos"]==0.3 and c["cfg"]["stats"]=="suivies" and c["lim"]["actif"]==False and c["lim"]["dureeMin"]==0.5 and c["ordre"]=="aleatoire" and c["step"]["p"]["reliefMode"]=="geodesique" and c["step"]["p"]["mouvement"]=="sinus",json.dumps(c)[:300])
    html=pg.content()
    check("aucune mention de produit tiers dans la page",all(w not in html.lower() for w in ["rascal","dstretch","harman"]))
    pg.evaluate("()=>{document.querySelectorAll('details').forEach((d,i)=>d.open=(i>=4))}")
    pg.wait_for_timeout(200);pg.screenshot(path="ls36_ui.png")
    check("aucune erreur JS",not errs,"; ".join(errs)[:300])
    br.close()
print("FAILS:",fails)
