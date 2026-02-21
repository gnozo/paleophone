import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function BilelAlaia() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Bilel Alaïa</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>Music Producer · Photographe · Light Designer · Sousse, Tunisia</p>

      <p style={{ marginTop: '20px' }}>
        {fr
          ? `Bilel Alaïa est music producer explorant la photographie analogique expérimentale et le design lumière. Son travail fusionne création sonore, chimie photographique créative et design lumière dans des expériences immersives.`
          : `Bilel Alaïa is a music producer exploring experimental analogue photography and light design. His work fuses sound creation, creative photographic chemistry, and light design in immersive experiences.`}
      </p>

      <hr />

      <p style={{ fontSize: '13px', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
        {fr ? 'En ligne' : 'Online'}
      </p>
      <p style={{ fontSize: '14px' }}>
        <a href="https://www.lomography.com/homes/bilelalaia" target="_blank" rel="noopener noreferrer">Lomography</a>
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">{fr ? '← Artistes' : '← Artists'}</a>
      </p>
    </Layout>
  )
}
