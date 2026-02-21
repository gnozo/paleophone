import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Infos() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  const items = [
    { slug: 'apropos', fr: 'À propos', en: 'About' },
    { slug: 'association', fr: 'Association', en: 'Association' },
    { slug: 'contact', fr: 'Contact', en: 'Contact' },
    { slug: 'archive', fr: 'Archive', en: 'Archive' },
  ]

  return (
    <Layout>
      <h2>Infos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '20px' }}>
        {items.map(item => (
          <div key={item.slug}>
            <Link href={`/infos/${item.slug}`}>{fr ? item.fr : item.en}</Link>
          </div>
        ))}
      </div>
      <hr />
      <p style={{ fontSize: '13px', color: '#999', lineHeight: '2.1' }}>
        <a href="https://paleophone.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a>
        {' · '}
        <a href="https://alpha.subvert.fm/@paleophone" target="_blank" rel="noopener noreferrer">Subvert</a>
        {' · '}
        <a href="https://soundcloud.com/paleophone-records" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        {' · '}
        <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <br />
        <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
      </p>
    </Layout>
  )
}
