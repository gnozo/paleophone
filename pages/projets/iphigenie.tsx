import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Iphigenie() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>Iphigénie</h2>

      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          <strong>Benjamin Efrati</strong> — 2024 · Paléophone
        </p>

        {locale === 'fr' ? (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            <em>Iphigénie</em> : chansons d'amour pour chat. Un projet de chansons pop intimistes.
          </p>
        ) : (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            <em>Iphigénie</em>: love songs for a cat. A project of intimate pop songs.
          </p>
        )}
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3793623031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=900755548/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{locale === 'fr' ? '← Retour aux projets' : '← Back to projects'}</a>
      </p>
    </Layout>
  )
}
