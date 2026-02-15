import Layout from '../../components/Layout'

export default function Association() {
  return (
    <Layout>
      <h2>Association</h2>
      
      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          Label associatif médiarchéologique · Fondé en 2026 à Arbois, Jura
        </p>

        <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
          PALÉOPHONE est un label associatif, coopératif et médiarchéologique. Au croisement de la création sonore, de l'archéologie des médias et de la recherche spéculative, le projet réactive des temporalités oubliées, valorise des œuvres et artistes invisibilisés, et expérimente tous les supports de diffusion — des plus obsolètes aux plus hypothétiques.
        </p>

        <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
          Inspiré par l'invention fantôme de Charles Cros et par la mémoire du poète Mario Amehou, PALÉOPHONE fonctionne comme une communauté artistique solidaire et pérenne, où les membres partagent ressources, techniques et devenir collectif.
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Principes</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Musique Stratifiée', 'Archives Vivantes', 'Transmission Réversible', 'Indépendance Radicale', 'Autosuffisance Technique'].map(principle => (
            <span key={principle} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
              {principle}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Collections Thématiques</h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          Folclorum Imaginarium · Ars Moriendi · Corpus Sonorum · Viva Vox
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Formats</h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          Singles · Pièces uniques · Collections ouvertes · Auto-édition · Production complète
        </p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '13px', color: '#999' }}>
        PALÉOPHONE vise progressivement l'autosuffisance technique et l'indépendance artistique radicale, tout en expérimentant l'ensemble des stratégies de diffusion — des plateformes collaboratives aux services de streaming majeurs.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">← Retour aux infos</a>
      </p>
    </Layout>
  )
}
