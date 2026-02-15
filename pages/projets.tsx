import Layout from '../components/Layout'

const projects = [
  { name: 'Cheikh Efrita', slug: 'cheikh-efrita' },
  { name: 'Cool Soussa', slug: 'cool-soussa' },
  { name: 'Iphigenie', slug: 'iphigenie' },
  { name: 'Waham El Masir', slug: 'waham-el-masir' },
]

export default function Projets() {
  return (
    <Layout>
      <h2>Projets</h2>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {projects.map(project => (
          <div key={project.slug}>
            <a href={`/projets/${project.slug}`}>{project.name}</a>
          </div>
        ))}
      </div>
    </Layout>
  )
}
