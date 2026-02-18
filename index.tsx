import { useRouter } from "next/router"

export default function Home() {
  const { locale } = useRouter()

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Paléophone</h1>
      <h2>
        {locale === "fr"
          ? "Laboratoire de musiques situées."
          : "Laboratory for situated music."}
      </h2>

      {locale === "fr" ? (
        <>
          <p>
            Paléophone est une association et un label indépendant.
            Nous publions des musiques électroniques, club-compatibles ou non,
            des formes hybrides, instrumentales ou à texte, ainsi que des œuvres
            ancrées dans des contextes précis.
          </p>
          <p>
            Deux publications par mois, d’avril à décembre.
            Un flux régulier pour construire un contexte commun.
          </p>
        </>
      ) : (
        <>
          <p>
            Paléophone is an independent association and record label.
            We publish electronic music, club-compatible or not, hybrid forms,
            instrumental or text-based works, as well as context-driven pieces.
          </p>
          <p>
            Two releases per month, from April to December.
            A steady flow to build a shared context.
          </p>
        </>
      )}

      <hr style={{ margin: "2rem 0" }} />

      <h3>{locale === "fr" ? "Sorties récentes" : "Recent releases"}</h3>

      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3793623031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=900755548/transparent=true/" seamless></iframe>`,
        }}
      />

      <div
        style={{ marginTop: "1rem" }}
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2867025982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3532240103/transparent=true/" seamless></iframe>`,
        }}
      />
    </main>
  )
}
