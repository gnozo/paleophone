import Layout from '../../components/Layout'

export default function BilelAlaia() {
  return (
    <Layout>
      <h2>Bilel Alaïa</h2>
      
      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          <strong>Music Producer</strong> · Photographe · Light Designer · Sousse, Tunisia
        </p>

        <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
          Bilel Alaïa est music producer explorant la photographie analogique expérimentale et le design lumière. 
          Son travail fusionne création sonore, chimie photographique créative et design lumière dans des expériences immersives.
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Disciplines</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Music Production', 'Photographie Analogique', 'Expérimental', 'Films Périmés', 'Light Design'].map(discipline => (
            <span key={discipline} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
              {discipline}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>En ligne</h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          <a href="https://www.lomography.com/homes/bilelalaia" target="_blank" rel="noopener noreferrer">Lomography</a>
        </p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '13px', color: '#999' }}>
        Bilel Alaïa collabore avec PALÉOPHONE pour explorer les croisements entre production musicale, photographie expérimentale et design lumière.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">← Retour aux artistes</a>
      </p>
    </Layout>
  )
}
