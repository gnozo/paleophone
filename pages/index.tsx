export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", lineHeight: "1.6" }}>
      
      {/* MENU */}
      <nav style={{ marginBottom: "2rem", display: "flex", gap: "1.5rem" }}>
        <a href="/">Home</a>
        <a href="/manifeste">Manifeste</a>
        <a href="/publier">Publier / Join</a>
        <a href="/collections">Collections</a>
      </nav>

      <h1>Paléophone</h1>
      <h2>Laboratoire de musiques situées · Laboratory for situated music</h2>

      <p>
        Paléophone est une association et un laboratoire éditorial dédié à la publication musicale. 
        Le label publie des musiques électroniques, club-compatibles ou non, instrumentales ou à texte, 
        ainsi que des œuvres multimédia ancrées dans des contextes esthétiques, historiques ou géographiques précis.
      </p>

      <p>
        Paléophone is an association and an editorial laboratory dedicated to music publishing. 
        The label releases electronic music, club-compatible or not, instrumental or text-based, 
        as well as multimedia works rooted in specific aesthetic, historical or geographical contexts.
      </p>

      <p>
        Deux publications par mois, d’avril à décembre, structurent un flux régulier pensé comme un cadre commun 
        de circulation, d’expérimentation et de coopération entre artistes.
      </p>

      <p>
        Two releases per month, from April to December, shape a steady flow conceived as a shared framework 
        for circulation, experimentation and cooperation between artists.
      </p>

      <p style={{ marginTop: "1.5rem" }}>
        Bandcamp ·{" "}
        <a href="https://paleophonerecords.bandcamp.com" target="_blank" rel="noopener noreferrer">paleophonerecords.bandcamp.com</a>
        <br />
        Subvert ·{" "}
        <a href="https://alpha.subvert.fm/@paleophone" target="_blank" rel="noopener noreferrer">subvert.fm</a>
        <br />
        Instagram ·{" "}
        <a href="https://www.instagram.com/paleophonerecords/" target="_blank" rel="noopener noreferrer">@paleophonerecords</a>
        <br />
        SoundCloud ·{" "}
        <a href="https://soundcloud.com/paleophonerecords" target="_blank" rel="noopener noreferrer">soundcloud.com/paleophonerecords</a>
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Sorties récentes · Recent releases</h3>

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
