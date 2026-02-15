import Layout from '../../components/Layout'

export default function CheikhEfrita() {
  return (
    <Layout>
      <h2>Cheikh Efrita</h2>
      
      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          <strong>Benjamin Efrati</strong> — 2024 · Label Monograph
        </p>
        
        <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
          <em>Cheikh Efrita</em> projette la pop tunisienne des années 1920 à travers le prisme des musiques électroniques contemporaines. 
          Un dialogue expressif entre tradition et avant-garde, où les rythmes classiques se fragmentent en textures breakcore et IDM.
        </p>
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
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Crédits</h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          Compositeur: Benjamin Efrati<br />
          Label: Monograph<br />
          Année: 2024
        </p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '13px', color: '#999' }}>
        <em>Cheikh Efrita</em> est un projet Paléophone.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">← Retour aux projets</a>
      </p>
    </Layout>
  )
}
