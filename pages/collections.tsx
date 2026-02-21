import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const collections = [
  {
    name: 'Folclorum Imaginarium',
    fr: {
      subtitle: 'Folklore imaginaire',
      desc: `Musiques électro-acoustiques puisant dans les répertoires traditionnels du monde entier — non pour les reproduire, mais pour les déplacer, les réactiver, les faire muter. Field recordings, instruments acoustiques, traitements électroniques. Une archéologie sonore tournée vers ce qui n'a pas encore eu lieu.`,
    },
    en: {
      subtitle: 'Imaginary Folklore',
      desc: `Electro-acoustic music drawing from traditional repertoires worldwide — not to reproduce them, but to displace, reactivate, and mutate them. Field recordings, acoustic instruments, electronic processing. A sonic archaeology oriented toward what has not yet happened.`,
    },
  },
  {
    name: 'Ars Moriendi',
    fr: {
      subtitle: "L'art de mourir",
      desc: `Musiques radicales, intransigeantes. Noise, punk, industriel, post-punk, expérimental abrasif. L'héritage du "& no future" comme posture esthétique, non comme nostalgie. Des œuvres qui refusent le confort d'écoute sans refuser la forme.`,
    },
    en: {
      subtitle: 'The Art of Dying',
      desc: `Radical, uncompromising music. Noise, punk, industrial, post-punk, abrasive experimental. The legacy of "& no future" as an aesthetic stance, not nostalgia. Works that refuse comfortable listening without refusing form.`,
    },
  },
  {
    name: 'Popinator Experrectus',
    fr: {
      subtitle: 'Client de taverne réveillé',
      desc: `Musiques électroniques contemporaines pour dancefloor et casques. Acid, techno, footwork, UK bass, club mutations. Mais aussi des formes plus intimes — bedroom, ambient dancefloor, électronique nocturne. Le code pop déplacé : reconnaissable, mais décalé.`,
    },
    en: {
      subtitle: 'The Awakened Tavern Guest',
      desc: `Contemporary electronic music for dancefloors and headphones. Acid, techno, footwork, UK bass, club mutations. But also more intimate forms — bedroom, ambient dancefloor, nocturnal electronics. Pop codes displaced: recognisable, but off-centre.`,
    },
  },
  {
    name: 'Symphonica Electronica',
    fr: {
      subtitle: 'Musique symphonique électronique',
      desc: `Le patrimoine musical occidental rencontré, parasité, réinterprété par les outils électroniques. Reprises radicales, collisions de registres, réorchestrations improbables. Du baroque en synthèse modulaire au classique en hardbass — l'électronique comme instrument de lecture critique du canon.`,
    },
    en: {
      subtitle: 'Electronic Symphonic Music',
      desc: `Western musical heritage encountered, hijacked, reinterpreted through electronic tools. Radical covers, register collisions, improbable reorchestrations. From baroque on modular synthesis to classical in hardbass — electronics as an instrument of critical reading of the canon.`,
    },
  },
  {
    name: 'Corpus Sonorum',
    fr: {
      subtitle: 'Matière sonore',
      desc: `Sound art et musique concrète orientés vers les matières sonores brutes : organiques, industrielles, artefactuelles, spéculatives. L'enregistrement comme geste. Le montage comme composition. Le son extrait de son contexte, transformé, laissé vieillir ou poussé à l'abstraction.`,
    },
    en: {
      subtitle: 'Sound Matter',
      desc: `Sound art and musique concrète oriented toward raw sonic materials: organic, industrial, artifactual, speculative. Recording as gesture. Editing as composition. Sound extracted from context, transformed, aged, or pushed into abstraction.`,
    },
  },
  {
    name: 'Viva Vox',
    fr: {
      subtitle: 'Voix vivante',
      desc: `La voix humaine dans tous ses états — vivante, archivée, artificielle, trouvée. Poésie sonore, spoken word, chant, performance vocale, synthèse et traitement. Archives de parole, enregistrements historiques retravaillés. La voix comme matière première et comme site de mémoire.`,
    },
    en: {
      subtitle: 'Living Voice',
      desc: `The human voice in all its states — living, archived, artificial, found. Sound poetry, spoken word, song, vocal performance, synthesis and processing. Speech archives, reworked historical recordings. The voice as raw material and as a site of memory.`,
    },
  },
]

export default function Collections() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Collections</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        {fr
          ? 'Six lignes éditoriales, indicatives et évolutives. Une même œuvre peut relever de plusieurs collections.'
          : 'Six editorial lines, indicative and evolving. A single work may belong to more than one collection.'}
      </p>

      <div style={{ marginTop: '40px' }}>
        {collections.map((col, i) => {
          const c = fr ? col.fr : col.en
          return (
            <div
              key={col.name}
              style={{
                marginBottom: '40px',
                paddingBottom: '40px',
                borderBottom: i < collections.length - 1 ? '1px solid #eee' : 'none',
              }}
            >
              <h3 style={{ margin: '0 0 3px 0', fontSize: '1em', fontWeight: '600' }}>
                {col.name}
              </h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#999', fontStyle: 'italic', letterSpacing: '0.3px' }}>
                {c.subtitle}
              </p>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.75', color: '#444' }}>
                {c.desc}
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
