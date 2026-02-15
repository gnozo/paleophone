import Layout from '../components/Layout'

const featured = [
  { name: 'Benjamin Efrati', slug: 'benjamin-efrati' },
  { name: 'Bilel Alaïa', slug: 'bilel-alaia' },
]

const otherArtists = [
  { name: 'Asher Mizrahi', slug: 'asher-mizrahi' },
  { name: 'Bnat Chemama', slug: 'bnat-chemama' },
  { name: 'Cheikh El Afrit', slug: 'cheikh-el-afrit' },
  { name: 'Fritna Darmon', slug: 'fritna-darmon' },
  { name: 'Habiba Msika', slug: 'habiba-msika' },
  { name: 'Leila Sfez', slug: 'leila-sfez' },
  { name: 'Louisa Tounsia', slug: 'louisa-tounsia' },
  { name: 'Saliha', slug: 'saliha' },
]

export default function Artistes() {
  return (
    <Layout>
      <h2>Artistes</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px', marginBottom: '60px' }}>
        {featured.map(artist => (
          <div key={artist.slug}>
            <h3 style={{ marginBottom: '8px' }}>
              <a href={`/artistes/${artist.slug}`}>{artist.name}</a>
            </h3>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '40px' }}>
        <h3 style={{ fontSize: '13px', color: '#999', fontWeight: 'normal', marginBottom: '20px' }}>Autres</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 40px' }}>
          {otherArtists.map(artist => (
            <div key={artist.slug}>
              <a href={`/artistes/${artist.slug}`} style={{ fontSize: '14px' }}>{artist.name}</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
