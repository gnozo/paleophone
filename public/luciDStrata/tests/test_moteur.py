import json, base64, io, sys
import numpy as np
from PIL import Image
from playwright.sync_api import sync_playwright

import pathlib
HTML = pathlib.Path(__file__).parent.parent.joinpath("lucidstrata.html").resolve().as_uri()  # lancer depuis n'importe où (requiert playwright, numpy, pillow)

# ---------- image test : gradient + bruit corrélé ----------
rng = np.random.default_rng(3)
W, H = 320, 200
yy, xx = np.mgrid[0:H, 0:W]
base = np.stack([120 + 60 * xx / W, 100 + 40 * yy / H, 90 + 30 * np.sin(xx / 20)], -1)
noise = rng.multivariate_normal([0, 0, 0], np.array([[1, .9, .8], [.9, 1, .85], [.8, .85, 1]]) * 200, (H, W))
img = np.clip(base + noise, 0, 255).astype(np.uint8)
buf = io.BytesIO(); Image.fromarray(img).save(buf, "PNG")
data_url = "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()

# ---------- référence numpy ----------
def s2l(c): return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
def l2s(c): c = np.maximum(c, 0); return np.where(c <= 0.0031308, 12.92 * c, 1.055 * c ** (1 / 2.4) - 0.055)
M_XYZ = np.array([[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.0721750], [0.0193339, 0.1191920, 0.9503041]])
M_XYZi = np.linalg.inv(M_XYZ); WP = np.array([0.95047, 1.0, 1.08883])
def flab(t): return np.where(t > 216 / 24389, np.cbrt(t), (841 / 108) * t + 4 / 29)
def finv(t): return np.where(t > 6 / 29, t ** 3, 3 * (6 / 29) ** 2 * (t - 4 / 29))
def rgb2lab(l):
    X = (l @ M_XYZ.T) / WP; fx, fy, fz = flab(X[..., 0]), flab(X[..., 1]), flab(X[..., 2])
    return np.stack([(116 * fy - 16) / 100, 500 * (fx - fy) / 255 + .5, 200 * (fy - fz) / 255 + .5], -1)
def lab2rgb(n):
    L = n[..., 0] * 100; a = (n[..., 1] - .5) * 255; b = (n[..., 2] - .5) * 255
    fy = (L + 16) / 116; fx = fy + a / 500; fz = fy - b / 200
    return np.stack([finv(fx), finv(fy), finv(fz)], -1) * WP @ M_XYZi.T
SP = {"rgb": np.eye(3), "yuv": np.array([[.299, .587, .114], [-.14713, -.28886, .436], [.615, -.51499, -.10001]]),
      "ycbcr": np.array([[.299, .587, .114], [-.168736, -.331264, .5], [.5, -.418688, -.081312]]),
      "yiq": np.array([[.299, .587, .114], [.595716, -.274453, -.321263], [.211456, -.522591, .311135]]), "lab": None}

def reference(x, st):
    space, lin = st["espace"], st["lineaire"]; L = lin or space == "lab"
    xl = s2l(x) if L else x
    c = rgb2lab(xl) if space == "lab" else xl @ SP[space].T
    Wm, E, R = np.array(st["W"]).reshape(3, 3), np.array(st["E"]).reshape(3, 3), np.array(st["R"]).reshape(3, 3)
    z = (c - st["mu"]) @ Wm.T
    z2 = (z @ R.T) * st["amplitude"]
    cc = np.array(st["muo"]) + z2 @ E.T
    y = lab2rgb(cc) if space == "lab" else cc @ np.linalg.inv(SP[space]).T
    y = np.clip(y, 0, 1)
    return l2s(y) if L else y

fails = 0
def check(name, cond, detail=""):
    global fails
    print(("OK   " if cond else "FAIL ") + name + ("  " + detail if detail else ""))
    if not cond: fails += 1

with sync_playwright() as p:
    br = p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"])
    pg = br.new_page(viewport={"width": 1200, "height": 800})
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    pg.on("console", lambda m: errors.append(m.text) if m.type == "error" and "Failed to load resource" not in m.text else None)
    pg.goto(HTML); pg.wait_for_timeout(500)
    check("page sans erreur JS (shader compilé)", not errors, "; ".join(errors)[:300])

    # inverses JS exacts pour chaque espace
    rt = pg.evaluate("""()=>{const out={};for(const k in LS.SPACES){const p=[0.78,0.35,0.16];
      let c,b;if(k==='lab'){c=LS.toSpace(p,k,false);const l=[0,1,2].map(i=>p[i]<=0.04045?p[i]/12.92:Math.pow((p[i]+0.055)/1.055,2.4));
        // round trip via lab2rgb n'est pas exposé : on vérifie via toSpace(lin) et l'inverse numpy côté python
        out[k]=c;}else{c=LS.toSpace(p,k,false);const Mi=LS.SPACES[k].Mi;b=[0,1,2].map(i=>Mi[i*3]*c[0]+Mi[i*3+1]*c[1]+Mi[i*3+2]*c[2]);out[k]=b;}}return out}""")
    for k, v in rt.items():
        if k == "lab":
            back = l2s(lab2rgb(np.array(v)))
            check(f"aller-retour {k}", np.allclose(back, [0.78, 0.35, 0.16], atol=1e-6), str(np.round(back, 6)))
        else:
            check(f"aller-retour {k}", np.allclose(v, [0.78, 0.35, 0.16], atol=1e-9), str(np.round(v, 9)))

    # Jacobi
    ev = pg.evaluate("""()=>{const S=[4,1,0.5, 1,3,0.2, 0.5,0.2,2];const {vals,V}=LS.eigSym3(S);return {vals,V}}""")
    S = np.array([[4, 1, .5], [1, 3, .2], [.5, .2, 2]]); Vj = np.array(ev["V"]).reshape(3, 3)
    recon = Vj @ np.diag(ev["vals"]) @ Vj.T
    check("eigSym3 : V Λ Vᵀ = S", np.allclose(recon, S, atol=1e-10), f"max err {np.abs(recon-S).max():.1e}")

    # charge l'image
    pg.evaluate("""(u)=>new Promise(res=>{const im=new Image();im.onload=()=>{LS.loadImageElement(im,'test');res(1)};im.src=u})""", data_url)
    pg.wait_for_timeout(300)
    x = img.astype(np.float64) / 255.0

    configs = [
        dict(espace="rgb", lineaire=False, relief=0, amplitude=0.2, recentrage=1, correlation=False, reliefMode="fondu"),      # nivelé
        dict(espace="rgb", lineaire=True, relief=1, amplitude=1, recentrage=0, correlation=False),         # photo
        dict(espace="rgb", lineaire=True, relief=0.3, amplitude=0.8, recentrage=0, correlation=False),
        dict(espace="yuv", lineaire=False, relief=0, amplitude=0.2, recentrage=1, correlation=True),
        dict(espace="ycbcr", lineaire=True, relief=0.5, amplitude=0.4, recentrage=0.5, correlation=False),
        dict(espace="yiq", lineaire=False, relief=0, amplitude=0.25, recentrage=1, correlation=False),
        dict(espace="lab", lineaire=False, relief=0, amplitude=0.15, recentrage=1, correlation=False),
        dict(espace="lab", lineaire=False, relief=0.7, amplitude=1.2, recentrage=0, correlation=True),
        dict(espace="rgb", lineaire=True, relief=0.5, amplitude=1, recentrage=0, correlation=False, reliefMode="geodesique"),
        dict(espace="yuv", lineaire=False, relief=0.3, amplitude=0.6, recentrage=0.5, correlation=True, reliefMode="geodesique"),
    ]
    for i, c in enumerate(configs):
        st = pg.evaluate("""(c)=>{Object.assign(LS.cfg,c);LS.recomputeStats();LS.renderNow();
            const R=LS.rotAA([0.2,0.5,0.84],0.9);LS.setR(R);
            const l=LS.state().live;const px=LS.readPixels();
            return {espace:l.espace,lineaire:l.lineaire,mu:l.mu,W:l.W,Winv:l.Winv,E:l.E,R:l.R,muo:l.muo,amplitude:l.amplitude,relief:l.relief,
                    w:px.w,h:px.h,data:Array.from(px.data)}}""", c)
        gpu = np.array(st["data"], dtype=np.uint8).reshape(st["h"], st["w"], 4)[::-1, :, :3].astype(np.float64) / 255
        ref = reference(x, st)
        err = np.abs(gpu - ref); mx, mean = err.max() * 255, err.mean() * 255
        check(f"cfg {i} {c['espace']}{' lin' if c['lineaire'] else ''} v={c['relief']} p={c['amplitude']} : GPU = référence", mx <= 2.5 and mean < 0.3,
              f"max {mx:.2f}/255, moyenne {mean:.3f}/255")
        if i == 1:
            pg.evaluate("()=>{LS.setR([1,0,0,0,1,0,0,0,1])}")
            px = pg.evaluate("()=>{const p=LS.readPixels();return Array.from(p.data)}")
            gpu1 = np.array(px, dtype=np.uint8).reshape(H, W, 4)[::-1, :, :3] / 255
            check("   photo (relief 1, amplitude 1, R=I) : sortie = image d'origine", np.abs(gpu1 - x).max() * 255 <= 1.5, f"max {np.abs(gpu1-x).max()*255:.2f}/255")
        if i == 0:
            # équivalence nivelé : T = Vᵀ S V appliqué en 0..1 avec σ=0.2, moyenne → 0.5
            cov = np.array(pg.evaluate("()=>LS.state().statsCov")).reshape(3, 3); mu = np.array(st["mu"])
            l, Uv = np.linalg.eigh(cov); T = Uv @ np.diag(0.2 / np.sqrt(l)) @ Uv.T
            ds = np.clip((x - mu) @ T.T + 0.5, 0, 1)
            Wm = np.array(st["W"]).reshape(3, 3)
            check("   nivelé = amplitude·W (relief 0, R=I) à 1e-9", np.allclose(T, 0.2 * Wm, atol=1e-9))
            # la sortie GPU ici inclut la rotation R ; on compare la version sans rotation
            pg.evaluate("()=>{LS.setR([1,0,0,0,1,0,0,0,1])}")
            px = pg.evaluate("()=>{const p=LS.readPixels();return Array.from(p.data)}")
            gpu0 = np.array(px, dtype=np.uint8).reshape(H, W, 4)[::-1, :, :3] / 255
            check("   sortie GPU (R=I) = étirement par décorrélation (Alley 1996)", np.abs(gpu0 - ds).max() * 255 <= 2.5, f"max {np.abs(gpu0-ds).max()*255:.2f}/255")

    # forme géodésique : E = Σ^((v+1)/2) Wᵀ ; extrémités ; rapport d'écarts-types (λmax/λmin)^(v/2)
    g = pg.evaluate("""()=>{Object.assign(LS.cfg,{espace:'rgb',lineaire:true,correlation:false,amplitude:1,recentrage:0});LS.recomputeStats();
        const out={};for(const v of [0,0.25,0.5,0.75,1]){Object.assign(LS.cfg,{relief:v,reliefMode:'geodesique'});LS.renderNow();out['g'+v]=LS.live.E.slice();
          Object.assign(LS.cfg,{reliefMode:'fondu'});LS.renderNow();out['r'+v]=LS.live.E.slice()}
        out.W=LS.live.W.slice();out.Winv=LS.live.Winv.slice();out.vals=LS.live.covEig.vals;out.cov=LS.state().statsCov;return out}""")
    Wm = np.array(g["W"]).reshape(3, 3); Wi = np.array(g["Winv"]).reshape(3, 3); cov = np.array(g["cov"]).reshape(3, 3)
    check("relief géodésique 0 = relief par fondu 0 (= I)", np.allclose(np.array(g["g0"]).reshape(3, 3), np.eye(3), atol=1e-7) and np.allclose(np.array(g["r0"]).reshape(3, 3), np.eye(3), atol=1e-12))
    check("relief géodésique 1 = relief par fondu 1 (= W⁻¹)", np.allclose(np.array(g["g1"]).reshape(3, 3), Wi, atol=1e-7) and np.allclose(np.array(g["r1"]).reshape(3, 3), Wi, atol=1e-12))
    lam = np.linalg.eigvalsh(cov); ratio_full = np.sqrt(lam.max() / lam.min())
    ok = True; detail = []
    for v in [0.25, 0.5, 0.75]:
        E = np.array(g["g" + str(v)]).reshape(3, 3); M = E @ Wm            # covariance de sortie = M Σ Mᵀ
        lo = np.linalg.eigvalsh(M @ cov @ M.T); r = np.sqrt(lo.max() / lo.min()); exp = ratio_full ** v
        ok &= abs(r / exp - 1) < 1e-6; detail.append(f"v={v}: {r:.3f} vs {exp:.3f}")
        Er = np.array(g["r" + str(v)]).reshape(3, 3); Mr = Er @ Wm; lr = np.linalg.eigvalsh(Mr @ cov @ Mr.T)
        detail.append(f"(fondu {np.sqrt(lr.max()/lr.min()):.3f})")
    check("géodésique : rapport σmax/σmin = (λmax/λmin)^(v/2)", ok, "  ".join(detail))

    # statistiques JS vs numpy (sur l'image réduite — tolérance large)
    stj = pg.evaluate("()=>{Object.assign(LS.cfg,{espace:'rgb',lineaire:false});LS.recomputeStats();return LS.state()}")
    mu_np = x.reshape(-1, 3).mean(0); cov_np = np.cov(x.reshape(-1, 3).T)
    check("statistiques JS ≈ numpy", np.allclose(stj["statsMu"], mu_np, atol=0.01) and np.allclose(np.array(stj["statsCov"]).reshape(3, 3), cov_np, rtol=0.15, atol=2e-4),
          f"mu js {np.round(stj['statsMu'],4)} np {np.round(mu_np,4)}; cov js diag {np.round(np.diag(np.array(stj['statsCov']).reshape(3,3)),5)} np {np.round(np.diag(cov_np),5)}")

    # limiteur : slerpR n'avance jamais de plus que maxAng
    sl = pg.evaluate("""()=>{const Rt=LS.rotAA([0,0,1],2.6);let R=[1,0,0,0,1,0,0,0,1];const angs=[];for(let i=0;i<40;i++){const Rn=LS.slerpR(R,Rt,0.1);angs.push(LS.axisAngle(Rn).ang-LS.axisAngle(R).ang);R=Rn}return {angs,final:LS.axisAngle(R).ang}}""")
    check("limiteur : pas ≤ maxAng et convergence", max(sl["angs"]) <= 0.1 + 1e-9 and abs(sl["final"] - 2.6) < 1e-6, f"max pas {max(sl['angs']):.4f}, final {sl['final']:.4f}")
    aa = pg.evaluate("()=>{const R=LS.rotAA([0.6,0,0.8],Math.PI-1e-3);const a=LS.axisAngle(R);return a}")
    check("axisAngle près de π", abs(aa["ang"] - (np.pi - 1e-3)) < 1e-6 and np.allclose(np.abs(aa["axis"]), [0.6, 0, 0.8], atol=1e-3), str(aa))

    pg.screenshot(path="/tmp/claude-0/-home-claude/a5d66537-c7a3-5ad5-b680-9da348e51635/scratchpad/ls3_shot.png")
    check("aucune erreur JS après les tests", not errors, "; ".join(errors)[:300])
    br.close()
print("FAILS:", fails)
sys.exit(1 if fails else 0)
