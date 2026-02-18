import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function CoolSoussa() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>Cool Soussa</h2>

      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          Paléophone
        </p>

        {locale === 'fr' ? (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            Un projet Paléophone. Informations à venir.
          </p>
        ) : (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            A Paléophone project. More information coming soon.
          </p>
        )}
      </div>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{locale === 'fr' ? '← Retour aux projets' : '← Back to projects'}</a>
      </p>
    </Layout>
  )
}
