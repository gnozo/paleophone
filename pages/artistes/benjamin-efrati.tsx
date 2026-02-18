import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function BenjaminEfrati() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>Benjamin Efrati</h2>

      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          Composer · Filmmaker · Artist · Researcher
        </p>

        {locale === 'fr' ? (
          <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
            Benjamin Efrati travaille depuis 15 ans sur l'archéologie des médias, l'archivage
            et la réactivation de contenus. Son approche combine recherche académique,
            création musicale et pratiques artistiques.
          </p>
        ) : (
          <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '15px' }}>
            Benjamin Efrati has worked for 15 years on media archaeology, archiving,
            and the reactivation of content. His approach combines academic research,
            musical composition, and artistic practice.
          </p>
        )}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {locale === 'fr' ? 'Recherches' : 'Research'}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Archéologie des Médias', 'Archivage & Réactivation', 'Post-Dada', 'Surréalisme Roumain', 'Sommeil Paradoxal', 'Jeux Vidéo', 'Préhistoire'].map(r => (
            <span key={r} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>{r}</span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {locale === 'fr' ? 'Pratiques' : 'Practices'}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Film & Animation', 'Composition Musicale', 'Performance', 'Arts Visuels', 'Recherche Académique'].map(p => (
            <span key={p} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>{p}</span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {locale === 'fr' ? 'Récent' : 'Recent'}
        </h3>
        <p style={{ fontSize: '14px', margin: '0 0 10px 0', color: '#666' }}>
          <strong>Iphigénie</strong> (2024) · {locale === 'fr' ? 'chansons d\'amour pour chat' : 'love songs for a cat'}<br />
          <strong>Cheikh Efrita</strong> (2024) · {locale === 'fr' ? 'musique d\'archive tunisienne paléo-futuriste' : 'paleo-futurist Tunisian archive music'}<br />
          <strong>Ughniya</strong> (2025) · {locale === 'fr' ? 'résidence de création, Institut Français de Tunisie' : 'residency, Institut Français de Tunisie'}
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {locale === 'fr' ? 'En ligne' : 'Online'}
        </h3>
        <p style={{ fontSize: '14px', margin: '0', color: '#666' }}>
          <a href="https://benjaminefrati.com" target="_blank" rel="noopener noreferrer">benjaminefrati.com</a>
        </p>
      </div>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">{locale === 'fr' ? '← Retour aux artistes' : '← Back to artists'}</a>
      </p>
    </Layout>
  )
}
