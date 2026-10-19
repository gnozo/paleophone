import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Contact() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Contact</h2>

      <p>
        {fr
          ? 'Pour toute proposition artistique, collaboration ou demande de booking :'
          : 'For artistic proposals, collaborations, or booking requests:'}
      </p>
      <p>
        <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{fr ? '← Infos' : '← Info'}</a>
      </p>
    </Layout>
  )
}
