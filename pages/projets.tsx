import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const projects = [
  { name: 'Wahem El Masir', slug: 'waham-el-masir', color: 'var(--gold)', fr: 'Benjamin Efrati · mai → décembre 2026', en: 'Benjamin Efrati · May → December 2026' },
  { name: 'Cheikh Efrita', slug: 'cheikh-efrita', color: 'var(--hot)', fr: 'Benjamin Efrati · 2024 · Label Monograph', en: 'Benjamin Efrati · 2024 · Label Monograph' },
  { name: 'Iphigénie', slug: 'iphigenie', color: 'var(--lime)', fr: 'Benjamin Efrati · 2024 · Paléophone', en: 'Benjamin Efrati · 2024 · Paléophone' },
  { name: 'Cool Soussa', slug: 'cool-soussa', color: 'var(--cyan)', fr: 'Paléophone', en: 'Paléophone' },
]

export default function Projets() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Projets' : 'Projects'}</h2>

      <div style={{ marginTop: '36px', display: 'grid', gap: '28px' }}>
        {projects.map(p => (
          <div key={p.slug} style={{
            paddingBottom: '24px',
            borderBottom: '1px dashed var(--border)',
          }}>
            <Link href={`/projets/${p.slug}`} style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: '22px',
              fontWeight: 700,
              color: p.color,
              letterSpacing: '-0.01em',
              borderBottom: 'none',
            }}>
              {p.name}
            </Link>
            <p className="mono-dim" style={{ margin: '6px 0 0 0' }}>
              {fr ? p.fr : p.en}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
