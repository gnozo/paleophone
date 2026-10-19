import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Publier() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Publier sur Paléophone' : 'Publish on Paléophone'}</h2>

      {fr ? (
        <>
          <p>
            Publier sur Paléophone, c'est rejoindre l'association en tant que membre.
            Les membres sont artistes. Ils participent aux décisions collectives sur les nouvelles
            publications et les nouvelles entrées au catalogue.
          </p>
          <p>
            Le label accueille des morceaux isolés, des remixes, des albums, des compilations
            et des œuvres hybrides. Un album peut être diffusé progressivement dans le flux
            bimensuel ou présenté comme une sortie à part entière.
          </p>
          <p>
            Les artistes proposent leurs propres visuels. Si nécessaire, le label peut
            accompagner la direction graphique.
          </p>
          <p>
            Chaque sortie bénéficie d'une distribution sur toutes les plateformes numériques,
            d'une mise en contexte éditoriale et d'une communication via les réseaux sociaux du label.
          </p>
          <hr />
          <p>
            <strong>Vous avez peut-être un morceau qui trouverait ici un contexte plus juste.</strong>
          </p>
          <p style={{ fontSize: '14px' }}>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
        </>
      ) : (
        <>
          <p>
            Publishing on Paléophone means joining the association as a member.
            Members are artists. They take part in collective decisions on new
            releases and new catalogue entries.
          </p>
          <p>
            The label welcomes standalone tracks, remixes, albums, compilations
            and hybrid works. An album may be released progressively within the
            bi-monthly flow or presented as a standalone release.
          </p>
          <p>
            Artists submit their own visuals. If needed, the label can support
            the graphic direction.
          </p>
          <p>
            Each release receives distribution across all digital platforms,
            editorial contextualisation, and communication via the label's social media.
          </p>
          <hr />
          <p>
            <strong>You might have a track that belongs here.</strong>
          </p>
          <p style={{ fontSize: '14px' }}>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
        </>
      )}
    </Layout>
  )
}
