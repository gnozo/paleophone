import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function CheikhEfrita() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>Cheikh Efrita</h2>

      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          <strong>Benjamin Efrati</strong> — 2024 · Label Monograph
        </p>

        {locale === 'fr' ? (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            <em>Cheikh Efrita</em> projette la pop tunisienne des années 1920 à travers le prisme
            des musiques électroniques contemporaines. Un dialogue expressif entre tradition et
            avant-garde, où les rythmes classiques se fragmentent en textures breakcore et IDM.
          </p>
        ) : (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            <em>Cheikh Efrita</em> projects 1920s Tunisian pop through the lens of contemporary
            electronic music. An expressive dialogue between tradition and avant-garde, where
            classical rhythms fragment into breakcore and IDM textures.
          </p>
        )}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Genres</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Tunisian 1920s Pop', 'Footwork', 'Acid House', 'Psytrance', 'UK Garage', 'Bass Music', 'IDM', 'Breakcore'].map(genre => (
            <span key={genre} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {locale === 'fr' ? 'Crédits' : 'Credits'}
        </h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          {locale === 'fr' ? 'Compositeur' : 'Composer'}: Benjamin Efrati<br />
          Label: Monograph<br />
          {locale === 'fr' ? 'Année' : 'Year'}: 2024
        </p>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2867025982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3532240103/transparent=true/" seamless></iframe>`,
        }}
      />

      <p style={{ marginTop: '30px', fontSize: '13px', color: '#999' }}>
        {locale === 'fr'
          ? 'Cheikh Efrita est référencé dans le catalogue Paléophone. Un coffret commun Cheikh Efrita / Waham El Masir est prévu pour décembre 2026.'
          : 'Cheikh Efrita is referenced in the Paléophone catalogue. A joint boxset Cheikh Efrita / Waham El Masir is planned for December 2026.'}
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{locale === 'fr' ? '← Retour aux projets' : '← Back to projects'}</a>
      </p>
    </Layout>
  )
}
