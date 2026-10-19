import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const featured = [
  { name: 'Benjamin Efrati', slug: 'benjamin-efrati', role: 'Composer · Filmmaker · Researcher' },
  { name: 'Bilel Alaïa', slug: 'bilel-alaia', role: 'Music Producer · Photographer · Sousse' },
]

const archive = [
  'Asher Mizrahi', 'Bnat Chemama', 'Cheikh El Afrit',
  'Fritna Darmon', 'Habiba Msika', 'Leila Sfez',
  'Louisa Tounsia', 'Saliha',
]

export default function Artistes() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Artistes' : 'Artists'}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '30px', marginBottom: '50px' }}>
        {featured.map(a => (
          <div key={a.slug}>
            <Link href={`/artistes/${a.slug}`}>{a.name}</Link>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#999' }}>{a.role}</p>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '30px' }}>
        <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
          {fr ? 'Archive' : 'Archive'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 40px' }}>
          {archive.map(name => (
            <span key={name} style={{ fontSize: '14px', color: '#666' }}>{name}</span>
          ))}
        </div>
      </div>
    </Layout>
  )
}
