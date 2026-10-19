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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '30px',
        marginTop: '30px',
        marginBottom: '50px',
      }}>
        {featured.map(a => (
          <div key={a.slug}>
            <Link href={`/artistes/${a.slug}`} style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--cyan)',
              borderBottom: 'none',
            }}>
              {a.name}
            </Link>
            <p className="mono-dim" style={{ margin: '4px 0 0 0' }}>{a.role}</p>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '32px' }}>
        <p className="small-label" style={{ color: 'var(--hot)' }}>
          {fr ? 'Archive' : 'Archive'}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px 32px',
          marginTop: '16px',
        }}>
          {archive.map(name => (
            <span key={name} style={{
              fontSize: '14px',
              color: 'var(--gray-relu)',
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  )
}
