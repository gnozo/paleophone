import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Publier() {
  const { locale } = useRouter()

  return (
    <Layout>
      {locale === 'fr' ? (
        <>
          <h2>Publier sur Paléophone & rejoindre l'association</h2>

          <p>
            Publier sur Paléophone, c'est intégrer l'association.
          </p>
          <p>
            Les membres sont artistes. Les publications sont proposées, discutées
            et votées collectivement — par absence d'opposition dans un délai de 14 jours,
            ou par vote explicite selon les cas.
          </p>

          <p>Nous accueillons :</p>
          <ul>
            <li>Tracks isolés, singles</li>
            <li>Remixes</li>
            <li>Albums et formats longs</li>
            <li>Compilations</li>
            <li>Collections éditoriales</li>
            <li>Œuvres hybrides, multimédia, poésie sonore</li>
          </ul>

          <p>
            Un album peut être diffusé progressivement dans le flux bimensuel
            ou présenté comme une sortie éditoriale à part entière.
          </p>
          <p>
            Les artistes peuvent proposer leurs propres visuels.
            Le label peut accompagner la direction graphique si nécessaire.
          </p>
          <p>
            Chaque sortie bénéficie d'une publication sur toutes plateformes,
            d'une mise en contexte éditoriale, et d'une communication via réseaux sociaux.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <p>
            <strong>Peut-être avez-vous une pièce qui trouverait ici une continuité plus juste.</strong>
          </p>
          <p>
            Paléophone n'est pas un espace de dépôt. C'est un contexte.
            Rejoindre l'association, c'est participer à la construction d'un catalogue commun —
            sans obligation particulière outre la publication.
          </p>

          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
        </>
      ) : (
        <>
          <h2>Publish on Paléophone & become a member</h2>

          <p>
            Publishing on Paléophone means joining the association.
          </p>
          <p>
            Members are artists. Publications are proposed, discussed,
            and voted on collectively — by absence of opposition within 14 days,
            or by explicit vote when required.
          </p>

          <p>We welcome:</p>
          <ul>
            <li>Standalone tracks, singles</li>
            <li>Remixes</li>
            <li>Albums and long-form works</li>
            <li>Compilations</li>
            <li>Editorial collections</li>
            <li>Hybrid works, multimedia, sound poetry</li>
          </ul>

          <p>
            An album may be released progressively within the bi-monthly flow
            or presented as a dedicated editorial release.
          </p>
          <p>
            Artists may submit their own visuals.
            The label can support graphic direction when needed.
          </p>
          <p>
            Each release benefits from distribution across all platforms,
            editorial contextualisation, and social media communication.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <p>
            <strong>You might have a piece that belongs here.</strong>
          </p>
          <p>
            Paléophone is not a depository. It is a context.
            Joining the association means contributing to a shared catalogue —
            with no specific obligation beyond publication.
          </p>

          <p>
            <a href="mailto:paleophonerecords@gmail.com">paleophonerecords@gmail.com</a>
          </p>
        </>
      )}
    </Layout>
  )
}
