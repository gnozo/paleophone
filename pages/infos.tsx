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
      <h2>Infos</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px' }}>
        {infos.map(info => (
          <div key={info.slug}>
            <a href={`/infos/${info.slug}`}>{info.name}</a>
          </div>
        ))}
      </div>
    </Layout>
  )
}
