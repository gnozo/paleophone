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
      
      <p>
        Explorez les initiatives et collaborations menées par PALÉOPHONE. 
        Chaque projet incarne notre engagement envers l'expérimentation sonore et la création artistique.
      </p>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {projects.map(project => (
          <div key={project.slug} style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>
              <a href={`/projets/${project.slug}`}>{project.name}</a>
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
              Projet et initiative PALÉOPHONE
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
