import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const projects = [
  {
    name: 'Cheikh Efrita',
    slug: 'cheikh-efrita',
    fr: 'Benjamin Efrati — 2024 · Label Monograph',
    en: 'Benjamin Efrati — 2024 · Label Monograph',
  },
  {
    name: 'Iphigénie',
    slug: 'iphigenie',
    fr: 'Benjamin Efrati — 2024 · Paléophone',
    en: 'Benjamin Efrati — 2024 · Paléophone',
  },
  {
    name: 'Waham El Masir',
    slug: 'waham-el-masir',
    fr: 'Benjamin Efrati — sortie prévue décembre 2026',
    en: 'Benjamin Efrati — expected December 2026',
  },
  {
    name: 'Cool Soussa',
    slug: 'cool-soussa',
    fr: 'Paléophone',
    en: 'Paléophone',
  },
]

export default function Projets() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>{locale === 'fr' ? 'Projets' : 'Projects'}</h2>

      <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
        {projects.map(project => (
          <div key={project.slug}>
            <Link href={`/projets/${project.slug}`}>{project.name}</Link>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#999' }}>
              {locale === 'fr' ? project.fr : project.en}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
