import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Archive() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Archive</h2>
      <p style={{ color: '#999', fontSize: '14px' }}>
        {fr ? 'À venir.' : 'Coming soon.'}
      </p>
      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{fr ? '← Infos' : '← Info'}</a>
      </p>
    </Layout>
  )
}
