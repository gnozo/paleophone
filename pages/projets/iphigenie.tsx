import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Iphigenie() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Iphigénie</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>Benjamin Efrati · 2024 · Paléophone</p>

      <p style={{ marginTop: '20px' }}>
        {fr ? 'Chansons d\'amour pour chat.' : 'Love songs for a cat.'}
      </p>

      <div style={{ marginTop: '24px' }}
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3793623031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=900755548/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{fr ? '← Projets' : '← Projects'}</a>
      </p>
    </Layout>
  )
}
