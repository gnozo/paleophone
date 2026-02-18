import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const featured = [
  { name: 'Benjamin Efrati', slug: 'benjamin-efrati', role: 'Composer · Filmmaker · Researcher' },
  { name: 'Bilel Alaïa', slug: 'bilel-alaia', role: 'Music Producer · Photographer · Sousse' },
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
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>{locale === 'fr' ? 'Artistes' : 'Artists'}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px', marginBottom: '60px' }}>
        {featured.map(artist => (
          <div key={artist.slug}>
            <h3 style={{ marginBottom: '4px' }}>
              <Link href={`/artistes/${artist.slug}`}>{artist.name}</Link>
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>{artist.role}</p>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '40px' }}>
        <h3 style={{ fontSize: '13px', color: '#999', fontWeight: 'normal', marginBottom: '20px' }}>
          {locale === 'fr' ? 'Archives' : 'Archive'}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 40px' }}>
          {otherArtists.map(artist => (
            <div key={artist.slug}>
              <span style={{ fontSize: '14px', color: '#666' }}>{artist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
