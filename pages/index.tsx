import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2>Bienvenue sur PALÉOPHONE</h2>
      
      <p>
        PALÉOPHONE est un label associatif dédié à l'exploration, la documentation et la promotion 
        des musiques avant-gardes, électroniques et expérimentales.
      </p>

      <h3>Sections principales</h3>
      <ul>
        <li><a href="/artistes">Artistes</a> - Découvrez les créateurs du réseau</li>
        <li><a href="/projets">Projets</a> - Explorez nos initiatives</li>
        <li><a href="/infos">Infos</a> - Ressources et documentation</li>
      </ul>
    </Layout>
  )
}
