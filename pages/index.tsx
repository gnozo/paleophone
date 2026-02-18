import { useRouter } from "next/router"

export default function Home() {
  const { locale } = useRouter()

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", lineHeight: "1.6" }}>
      <h1>Paléophone</h1>
      <h2>
        {locale === "fr"
          ? "Laboratoire de musiques situées."
          : "Laboratory for situated music."}
      </h2>

      {locale === "fr" ? (
        <>
          <p>
            Paléophone est une association et un laboratoire éditorial dédié à la publication musicale.
            Le label publie des musiques électroniques, club-compatibles ou non,
            des formes instrumentales ou à texte, ainsi que des œuvres multimédia
            ancrées dans des contextes esthétiques, historiques ou géographiques précis.
          </p>
          <p>
            Deux publications par mois, d’avril à décembre, structurent un flux régulier
            pensé comme un cadre commun de circulation, d’expérimentation et de coopération entre artistes.
          </p>
          <p>
            Suivre Paléophone :
            {" "}
            <a href="https://paleophonerecords.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a>
            {" · "}
            <a href="https://www.subvertrecords.com" target="_blank" rel="noopener noreferrer">Subvert</a>
            {" · "}
            <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">Instagram</a>
            {" · "}
            <a href="https://soundcloud.com/paleophonerecords" target="_blank" rel="noopener noreferrer">SoundCloud</a>
          </p>
        </>
      ) : (
        <>
          <p>
            Paléophone is an association and an editorial laboratory dedicated to music publishing.
            The label releases electronic music, club-compatible or not,
            instrumental or text-based forms, as well as multimedia works
            rooted in specific aesthetic, historical or geographical contexts.
          </p>
          <p>
            Two releases per month, from April to December, shape a steady flow
            conceived as a shared framework for circulation, experimentation,
            and cooperation between artists.
          </p>
          <p>
            Follow Paléophone:
            {" "}
            <a href="https://paleophonerecords.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a>
            {" · "}
            <a href="https://www.subvertrecords.com" target="_blank" rel="noopener noreferrer">Subvert</a>
            {" · "}
            <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">Instagram</a>
            {" · "}
            <a href="https://soundcloud.com/paleophonerecords" target="_blank" rel="noopener noreferrer">SoundCloud</a>
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
