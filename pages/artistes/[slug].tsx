import Layout from '../../components/Layout'

const artistData: { [key: string]: string } = {
  'asher-mizrahi': 'Asher Mizrahi',
  'bnat-chemama': 'Bnat Chemama',
  'cheikh-el-afrit': 'Cheikh El Afrit',
  'fritna-darmon': 'Fritna Darmon',
  'habiba-msika': 'Habiba Msika',
  'leila-sfez': 'Leila Sfez',
  'louisa-tounsia': 'Louisa Tounsia',
  'saliha': 'Saliha',
}

export default function Artist({ name }: { name: string }) {
  return (
    <Layout>
      <h2>{name}</h2>
      
      <p>
        <strong>{name}</strong> est un·e artiste explorant les champs de la musique expérimentale et de la création sonore contemporaine.
      </p>

      <p>
        PALÉOPHONE soutient et documente le travail de créateurs et créatrices engagés dans des démarches innovantes et critiques.
      </p>

      <h3>Collaborations</h3>

      <p>
        {name} fait partie du réseau croissant d'artistes actifs au sein de la plateforme.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '40px 0' }} />

      <p style={{ fontSize: '13px', color: '#999' }}>
        Pour en savoir plus sur ce projet ou proposer une collaboration, consultez nos ressources.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">← Retour aux artistes</a>
      </p>
    </Layout>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const name = artistData[params.slug] || 'Artiste'
  return {
    props: { name },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(artistData).map(slug => ({
    params: { slug },
  }))
  return { paths, fallback: 'blocking' }
}
