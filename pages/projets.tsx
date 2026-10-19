import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const projects = [
  { name: 'Cheikh Efrita', slug: 'cheikh-efrita', fr: 'Benjamin Efrati · 2024 · Label Monograph', en: 'Benjamin Efrati · 2024 · Label Monograph' },
  { name: 'Iphigénie', slug: 'iphigenie', fr: 'Benjamin Efrati · 2024 · Paléophone', en: 'Benjamin Efrati · 2024 · Paléophone' },
  { name: 'Waham El Masir', slug: 'waham-el-masir', fr: 'Benjamin Efrati · sortie prévue décembre 2026', en: 'Benjamin Efrati · expected December 2026' },
  { name: 'Cool Soussa', slug: 'cool-soussa', fr: 'Paléophone', en: 'Paléophone' },
]

export default function Projets() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Projets' : 'Projects'}</h2>
      <div style={{ marginTop: '30px', display: 'grid', gap: '24px' }}>
        {projects.map(p => (
          <div key={p.slug}>
            <Link href={`/projets/${p.slug}`}>{p.name}</Link>
            <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#999' }}>{fr ? p.fr : p.en}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
