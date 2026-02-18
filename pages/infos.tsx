import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Infos() {
  const { locale } = useRouter()

  const infos = locale === 'fr'
    ? [
        { name: 'À propos', slug: 'apropos' },
        { name: 'Association', slug: 'association' },
        { name: 'Archive', slug: 'archive' },
        { name: 'Contact', slug: 'contact' },
      ]
    : [
        { name: 'About', slug: 'apropos' },
        { name: 'The Association', slug: 'association' },
        { name: 'Archive', slug: 'archive' },
        { name: 'Contact', slug: 'contact' },
      ]

  return (
    <Layout>
      <h2>{locale === 'fr' ? 'Infos' : 'Info'}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px' }}>
        {infos.map(info => (
          <div key={info.slug}>
            <Link href={`/infos/${info.slug}`}>{info.name}</Link>
          </div>
        ))}
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {locale === 'fr' ? 'En ligne' : 'Online'}
      </h3>
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.9' }}>
        <a href="https://paleophone.fr" target="_blank" rel="noopener noreferrer">paleophone.fr</a><br />
        <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a><br />
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">SoundCloud</a><br />
        <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
      </p>
    </Layout>
  )
}
