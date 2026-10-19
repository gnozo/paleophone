import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function BenjaminEfrati() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Benjamin Efrati</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>Composer · Filmmaker · Artist · Researcher</p>

      <p style={{ marginTop: '20px' }}>
        {fr
          ? `Benjamin Efrati travaille depuis 15 ans sur l'archéologie des médias, l'archivage et la réactivation de contenus. Son approche combine recherche académique, création musicale et pratiques artistiques.`
          : `Benjamin Efrati has worked for 15 years on media archaeology, archiving, and the reactivation of content. His approach combines academic research, musical composition, and artistic practice.`}
      </p>

      <hr />

      <p style={{ fontSize: '13px', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
        {fr ? 'Récent' : 'Recent'}
      </p>
      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.9' }}>
        <strong>Iphigénie</strong> (2024) · {fr ? 'chansons d\'amour pour chat' : 'love songs for a cat'}<br />
        <strong>Cheikh Efrita</strong> (2024) · {fr ? 'musique d\'archive tunisienne paléo-futuriste' : 'paleo-futurist Tunisian archive music'}<br />
        <strong>Ughniya</strong> (2025) · {fr ? 'résidence, Institut Français de Tunisie' : 'residency, Institut Français de Tunisie'}
      </p>

      <hr />

      <p style={{ fontSize: '13px', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
        {fr ? 'En ligne' : 'Online'}
      </p>
      <p style={{ fontSize: '14px' }}>
        <a href="https://benjaminefrati.com" target="_blank" rel="noopener noreferrer">benjaminefrati.com</a>
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">{fr ? '← Artistes' : '← Artists'}</a>
      </p>
    </Layout>
  )
}
