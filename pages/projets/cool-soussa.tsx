import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function CoolSoussa() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Cool Soussa</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>Paléophone</p>

      <p style={{ marginTop: '20px', color: '#999', fontSize: '14px' }}>
        {fr ? 'À venir.' : 'Coming soon.'}
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{fr ? '← Projets' : '← Projects'}</a>
      </p>
    </Layout>
  )
}
