import Layout from '../../components/Layout'

export default function BenjaminEfrati() {
  return (
    <Layout>
      <h2>Benjamin Efrati</h2>
      
      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          Composer · Filmmaker · Artist · Researcher
        </p>

        <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
          Benjamin Efrati travaille depuis 15 ans sur l'archéologie des médias, l'archivage et la réactivation de contenus. 
          Son approche combine recherche académique, création musicale et pratiques artistiques.
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Recherches</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Archéologie des Médias', 'Archivage & Réactivation', 'Post-Dada', 'Surréalisme Roumain', 'Sommeil Paradoxal', 'Jeux Vidéo', 'Préhistoire'].map(research => (
            <span key={research} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
              {research}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Pratiques</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Film & Animation', 'Composition Musicale', 'Performance', 'Arts Visuels', 'Recherche Académique'].map(practice => (
            <span key={practice} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
              {practice}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Récent</h3>
        <p style={{ fontSize: '14px', margin: '0 0 10px 0', color: '#666' }}>
          <strong>Iphigénie</strong> (2024) · chansons d'amour pour chat<br />
          <strong>Cheikh Efrita</strong> (2024) · musique d'archive tunisienne paléo-futuriste<br />
          <strong>Ughniya</strong> (2025) · résidence de création, Institut Français de Tunisie
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>En ligne</h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          <a href="https://benjaminefrati.com" target="_blank" rel="noopener noreferrer">benjaminefrati.com</a>
        </p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '13px', color: '#999' }}>
        Benjamin Efrati collabore avec PALÉOPHONE pour explorer les croisements entre archéologie des médias, création musicale et recherche académique.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">← Retour aux artistes</a>
      </p>
    </Layout>
  )
}
