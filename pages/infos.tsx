import Layout from '../components/Layout'

const infos = [
  { name: 'À propos', slug: 'apropos' },
  { name: 'Contact', slug: 'contact' },
  { name: 'Association', slug: 'association' },
  { name: 'Archive', slug: 'archive' },
]

export default function Infos() {
  return (
    <Layout>
      <h2>Ressources & Infos</h2>
      
      <p>
        Retrouvez ici les informations essentielles, ressources et documentations relatives à PALÉOPHONE.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {infos.map(info => (
          <div key={info.slug} style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>
              <a href={`/infos/${info.slug}`}>{info.name}</a>
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  )
}
