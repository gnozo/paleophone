import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function CheikhEfrita() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Cheikh Efrita</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>Benjamin Efrati · 2024 · Label Monograph</p>

      <p style={{ marginTop: '20px' }}>
        {fr
          ? `Cheikh Efrita projette la pop tunisienne des années 1920 à travers le prisme des musiques électroniques contemporaines. Un dialogue entre tradition et avant-garde, où les rythmes classiques se fragmentent en textures breakcore et IDM.`
          : `Cheikh Efrita projects 1920s Tunisian pop through the lens of contemporary electronic music. A dialogue between tradition and avant-garde, where classical rhythms fragment into breakcore and IDM textures.`}
      </p>

      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {['Tunisian 1920s Pop', 'Footwork', 'Acid House', 'Psytrance', 'UK Garage', 'Bass Music', 'IDM', 'Breakcore'].map(g => (
          <span key={g} style={{ fontSize: '12px', padding: '3px 10px', backgroundColor: '#f5f5f5', border: '1px solid #eee', borderRadius: '20px' }}>{g}</span>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2867025982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3532240103/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '20px', fontSize: '13px', color: '#999' }}>
        {fr
          ? 'Cheikh Efrita est référencé dans le catalogue Paléophone. Coffret Cheikh Efrita / Waham El Masir prévu pour décembre 2026.'
          : 'Cheikh Efrita is referenced in the Paléophone catalogue. Boxset Cheikh Efrita / Waham El Masir planned for December 2026.'}
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{fr ? '← Projets' : '← Projects'}</a>
      </p>
    </Layout>
  )
}
