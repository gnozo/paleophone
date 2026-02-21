import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h1>Paléophone</h1>

      {fr ? (
        <>
          <p>
            Paléophone est un label coopératif et indépendant. Les membres sont artistes :
            ils publient leurs morceaux et albums sur le label, et participent collectivement
            aux décisions éditoriales.
          </p>
          <p>
            Le catalogue couvre un large spectre — musiques électroniques, club, noise, 
            chanson, poésie sonore, sound art, archives — organisé en six collections thématiques.
          </p>
          <p>
            Deux sorties par mois, d'avril à décembre.
          </p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            <Link href="/manifeste">Avertissement</Link> ·{' '}
            <Link href="/collections">Collections</Link> ·{' '}
            <Link href="/publier">Publier sur Paléophone</Link>
          </p>
        </>
      ) : (
        <>
          <p>
            Paléophone is an independent cooperative label. Members are artists:
            they release their tracks and albums on the label, and take part collectively
            in editorial decisions.
          </p>
          <p>
            The catalogue spans a wide range — electronic music, club, noise,
            song, sound poetry, sound art, archives — organised into six thematic collections.
          </p>
          <p>
            Two releases per month, from April to December.
          </p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            <Link href="/manifeste">Disclaimer</Link> ·{' '}
            <Link href="/collections">Collections</Link> ·{' '}
            <Link href="/publier">Publish on Paléophone</Link>
          </p>
        </>
      )}

      <hr />

      <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
        {fr ? 'Sorties récentes' : 'Recent releases'}
      </h3>

      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3793623031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=900755548/transparent=true/" seamless></iframe>`,
        }}
      />
      <div
        style={{ marginTop: '1rem' }}
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2867025982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3532240103/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '2rem', fontSize: '13px', color: '#999', lineHeight: '2' }}>
        <a href="https://paleophone.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a>
        {' · '}
        <a href="https://alpha.subvert.fm/@paleophone" target="_blank" rel="noopener noreferrer">Subvert</a>
        {' · '}
        <a href="https://soundcloud.com/paleophonerecords" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        {' · '}
        <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </Layout>
  )
}
