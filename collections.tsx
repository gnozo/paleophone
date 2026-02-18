import { useRouter } from "next/router"

export default function Collections() {
  const { locale } = useRouter()

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{locale === "fr" ? "Collections éditoriales" : "Editorial Collections"}</h1>

      <ul>
        <li><strong>Folclorum Imaginarium</strong> – {locale === "fr" ? "Folklore imaginaire électro-acoustique." : "Electro-acoustic imaginary folklore."}</li>
        <li><strong>Ars Moriendi</strong> – {locale === "fr" ? "Expérimental, punk, noise." : "Experimental, punk, noise."}</li>
        <li><strong>Popinator Experrectus</strong> – {locale === "fr" ? "Musique électronique contemporaine." : "Contemporary electronic music."}</li>
        <li><strong>Symphonica Electronica</strong> – {locale === "fr" ? "Réactivation du patrimoine occidental." : "Reactivation of Western heritage."}</li>
        <li><strong>Corpus Sonorum</strong> – {locale === "fr" ? "Sound art orienté matière sonore." : "Material-oriented sound art."}</li>
        <li><strong>Viva Vox</strong> – {locale === "fr" ? "Créations autour de la voix humaine." : "Voice-centered works."}</li>
      </ul>
    </main>
  )
}
