import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2>PALÉOPHONE</h2>
      
      <p>
        Plateforme de musiques expérimentales.
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/artistes">Artistes</a> · 
        <a href="/projets" style={{ marginLeft: '15px' }}>Projets</a> · 
        <a href="/infos" style={{ marginLeft: '15px' }}>Infos</a>
      </p>
    </Layout>
  )
}
