import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Contact() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>{locale === 'fr' ? 'Contact' : 'Contact'}</h2>

      {locale === 'fr' ? (
        <>
          <p>
            Pour toute proposition artistique, demande de collaboration ou renseignement :
          </p>
          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
          <p>
            Pour les demandes de booking et programmation live :
          </p>
          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
          <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
            Siège social : 33 rue de Pupillin, 39600 Arbois
          </p>
        </>
      ) : (
        <>
          <p>
            For artistic proposals, collaboration requests, or general enquiries:
          </p>
          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
          <p>
            For booking and live programming requests:
          </p>
          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
          <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
            Registered address: 33 rue de Pupillin, 39600 Arbois, France
          </p>
        </>
      )}

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{locale === 'fr' ? '← Retour aux infos' : '← Back to info'}</a>
      </p>
    </Layout>
  )
}
