import { useRouter } from "next/router"

export default function Manifeste() {
  const { locale } = useRouter()

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{locale === "fr" ? "Manifeste" : "Manifesto"}</h1>

      {locale === "fr" ? (
        <>
          <p>
            Paléophone est une association et un laboratoire de publication musicale.
          </p>
          <p>
            Le label accueille des musiques situées : électroniques,
            électro-acoustiques, club-compatibles ou non, œuvres multimédia,
            poésie sonore, formes instrumentales ou à texte, sound art, archives.
          </p>
          <p>
            Les membres sont artistes. Les nouvelles publications et entrées
            se décident collectivement par vote.
          </p>
          <p>
            Deux publications par mois, d’avril à décembre.
            Un flux régulier pour construire un contexte commun.
          </p>
          <p>
            Tous les six mois, l’association édite le Bulletin Paléophone,
            un zine en série limitée conçu collectivement.
          </p>
          <p>
            Paléophone propose un cadre stable pour des œuvres singulières :
            pas un simple catalogue, mais une construction éditoriale modulaire et vivante.
          </p>
        </>
      ) : (
        <>
          <p>
            Paléophone is an association and a laboratory for music publishing.
          </p>
          <p>
            The label welcomes situated music: electronic, electro-acoustic,
            club-compatible or not, multimedia works, sound poetry,
            instrumental or text-based forms, sound art, archives.
          </p>
          <p>
            Members are artists. New publications and memberships
            are decided collectively by vote.
          </p>
          <p>
            Two releases per month, from April to December.
            A steady flow to build a shared context.
          </p>
          <p>
            Every six months, the association publishes the Bulletin Paléophone,
            a limited edition zine created collectively.
          </p>
          <p>
            Paléophone provides a stable framework for singular works:
            not just a catalogue, but a modular and living editorial structure.
          </p>
        </>
      )}
    </main>
  )
}
