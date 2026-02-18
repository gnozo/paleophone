import { useRouter } from "next/router"

export default function Publier() {
  const { locale } = useRouter()

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>
        {locale === "fr"
          ? "Publier sur Paléophone & rejoindre l’association"
          : "Publish on Paléophone & become a member"}
      </h1>

      {locale === "fr" ? (
        <>
          <p>
            Publier sur Paléophone, c’est intégrer l’association.
          </p>
          <p>
            Les membres sont artistes. Les publications sont discutées
            et votées collectivement.
          </p>
          <p>
            Tracks isolés, remixes, albums, compilations, collections
            éditoriales ou œuvres hybrides sont les bienvenus.
          </p>
          <p>
            Un album peut être diffusé progressivement dans le flux
            bimensuel ou présenté comme une sortie spécifique.
          </p>
          <p><strong>C’est un contexte.</strong></p>
          <p><strong>Peut-être avez-vous une pièce qui trouverait ici une continuité plus juste.</strong></p>
          <p>📩 paleophonerecords@gmail.com</p>
        </>
      ) : (
        <>
          <p>
            Publishing on Paléophone means joining the association.
          </p>
          <p>
            Members are artists. Publications are collectively discussed
            and voted on.
          </p>
          <p>
            Standalone tracks, remixes, albums, compilations,
            editorial collections and hybrid works are welcome.
          </p>
          <p>
            An album may be released progressively within the bi-monthly flow
            or presented as a dedicated release.
          </p>
          <p><strong>It is a context.</strong></p>
          <p><strong>You might have a piece that belongs here.</strong></p>
          <p>📩 paleophonerecords@gmail.com</p>
        </>
      )}
    </main>
  )
}
