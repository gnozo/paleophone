import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout dense>
      {/* ========== TITRE HERO PLEIN ACIDE ========== */}
      <div className="hero">
        <h1 className="hero-title">
          <span className="hero-line-1">PALÉO</span>
          <span className="hero-line-2">PHONE</span>
        </h1>

        <p className="hero-tagline">
          <em>{fr ? 'Musique Stratifiée' : 'Stratified Music'}</em>
        </p>

        <div className="hero-divider" />
      </div>

      {/* ========== INTRO ========== */}
      {fr ? (
        <>
          <p>
            <strong>Paléophone</strong> est un label coopératif et indépendant.
            Les membres sont artistes : ils publient leurs morceaux et albums
            sur le label, et participent collectivement aux décisions éditoriales.
          </p>
          <p>
            Le catalogue couvre un large spectre — musiques électroniques, club,
            noise, chanson, poésie sonore, sound art, archives — organisé en six
            collections thématiques.
          </p>
          <p>
            Deux sorties par mois, d'avril à décembre.
          </p>
          <p className="mono-dim" style={{ marginTop: '28px' }}>
            <Link href="/manifeste">Avertissement</Link>{' · '}
            <Link href="/collections">Collections</Link>{' · '}
            <Link href="/publier">Publier sur Paléophone</Link>
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Paléophone</strong> is an independent cooperative label.
            Members are artists: they release their tracks and albums on the
            label, and take part collectively in editorial decisions.
          </p>
          <p>
            The catalogue spans a wide range — electronic music, club, noise,
            song, sound poetry, sound art, archives — organised into six
            thematic collections.
          </p>
          <p>
            Two releases per month, from April to December.
          </p>
          <p className="mono-dim" style={{ marginTop: '28px' }}>
            <Link href="/manifeste">Disclaimer</Link>{' · '}
            <Link href="/collections">Collections</Link>{' · '}
            <Link href="/publier">Publish on Paléophone</Link>
          </p>
        </>
      )}

      <hr />

      {/* ========== MANIFESTO ACIDE ========== */}
      <div className="manifesto">
        <span className="manifesto-m1">
          {fr ? 'TU VAS ENTENDRE' : 'YOU WILL HEAR'}
        </span>
        <span className="manifesto-m2">
          {fr ? 'CE QUE LE TEMPS' : 'WHAT TIME'}
        </span>
        <span className="manifesto-m3">
          {fr ? "A VOULU TAIRE." : 'HAS TRIED TO SILENCE.'}
        </span>
      </div>

      <hr />

      {/* ========== RECENT RELEASES ========== */}
      <h3 className="small-label" style={{ color: 'var(--hot)', marginBottom: '20px' }}>
        {fr ? 'Sorties récentes' : 'Recent releases'}
      </h3>

      <div className="bandcamp-wrap"
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3793623031/size=large/bgcol=000000/linkcol=00ffcc/tracklist=false/artwork=small/track=900755548/transparent=true/" seamless></iframe>`,
        }}
      />
      <div className="bandcamp-wrap" style={{ marginTop: '1rem' }}
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2867025982/size=large/bgcol=000000/linkcol=00ffcc/tracklist=false/artwork=small/track=3532240103/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '2rem' }} className="mono-dim">
        <a href="https://paleophone.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a>
        {' · '}
        <a href="https://alpha.subvert.fm/@paleophone" target="_blank" rel="noopener noreferrer">Subvert</a>
        {' · '}
        <a href="https://soundcloud.com/paleophone-records" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        {' · '}
        <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>

      {/* ========== PALETTE DE COULEURS (signature visuelle) ========== */}
      <div className="palette-strip">
        <span style={{ background: 'var(--gold)' }} />
        <span style={{ background: 'var(--orange)' }} />
        <span style={{ background: 'var(--hot)' }} />
        <span style={{ background: 'var(--magenta)' }} />
        <span style={{ background: 'var(--violet)' }} />
        <span style={{ background: 'var(--electric)' }} />
        <span style={{ background: 'var(--cyan)' }} />
        <span style={{ background: 'var(--lime)' }} />
      </div>

      {/* ========== STYLES LOCAUX À LA PAGE ========== */}
      <style jsx>{`
        .hero {
          margin-top: 20px;
          margin-bottom: 50px;
        }

        .hero-title {
          font-family: 'Unbounded', sans-serif;
          font-weight: 900;
          font-size: clamp(64px, 13vw, 160px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .hero-line-1, .hero-line-2 {
          display: block;
        }
        .hero-line-1 {
          color: var(--gold);
          text-shadow: 4px -4px 0 var(--hot);
        }
        .hero-line-2 {
          color: var(--cyan);
          text-shadow: 4px 4px 0 var(--magenta);
        }

        .hero-tagline {
          margin-top: 28px;
          font-family: 'Instrument Serif', serif;
          font-size: 22px;
          color: var(--gray-relu);
        }
        .hero-tagline em {
          font-style: italic;
        }

        .hero-divider {
          margin-top: 32px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--hot), transparent 80%);
        }

        .manifesto {
          margin: 40px 0;
          font-family: 'Unbounded', sans-serif;
          font-weight: 900;
          font-size: clamp(26px, 5vw, 54px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .manifesto span {
          display: block;
        }
        .manifesto-m1 {
          color: var(--lime);
          text-shadow: 2px 2px 0 var(--magenta);
        }
        .manifesto-m2 {
          color: var(--cyan);
          text-shadow: 2px 2px 0 var(--orange);
        }
        .manifesto-m3 {
          color: var(--hot);
          text-shadow: 2px 2px 0 var(--cyan);
        }

        .bandcamp-wrap {
          /* les iframes sont globalement filtrées par globals.css */
        }

        .palette-strip {
          display: flex;
          gap: 4px;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }
        .palette-strip span {
          width: 28px;
          height: 28px;
          display: block;
          transition: transform 0.2s;
        }
        .palette-strip span:hover {
          transform: scale(1.25);
        }
      `}</style>
    </Layout>
  )
}
