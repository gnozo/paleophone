import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2>Bienvenue sur PALÉOPHONE</h2>
      
      <p>
        PALÉOPHONE est un label associatif dédié à l'archéologie des médias.
      </p>

      <h3>Sections principales</h3>
      <ul>
        <li><a href="/artistes">Artistes</a> - Découvrir</li>
        <li><a href="/projets">Projets</a> - Explorer</li>
        <li><a href="/infos">Infos</a> - Infos</li>
      </ul>
    </Layout>
  )
}
