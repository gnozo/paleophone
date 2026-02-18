import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const collections = [
  {
    name: 'Folclorum Imaginarium',
    fr: {
      subtitle: 'Folklore imaginaire',
      desc: 'Musiques électro-acoustiques d'inspiration folklorique, mobilisant des répertoires traditionnels pour en extraire une modernité spéculative. Réappropriations critiques de formes orales, rituelles ou populaires.',
    },
    en: {
      subtitle: 'Imaginary Folklore',
      desc: 'Electro-acoustic music drawing from folk traditions — extracting speculative modernity from traditional repertoires. Critical re-appropriations of oral, ritual, or popular forms.',
    },
  },
  {
    name: 'Ars Moriendi',
    fr: {
      subtitle: 'L'art de mourir',
      desc: 'Musiques électro-acoustiques versatiles à l'esprit punk, noise, expérimental. Esthétiques de la fin, du non-futur futuriste. Œuvres radicales, intransigeantes, situées hors du consensus.',
    },
    en: {
      subtitle: 'The Art of Dying',
      desc: 'Versatile electro-acoustic music in a punk, noise, experimental spirit. Aesthetics of endings, futurist no-futures. Radical, uncompromising works situated outside consensus.',
    },
  },
  {
    name: 'Popinator Experrectus',
    fr: {
      subtitle: 'Client de taverne réveillé',
      desc: 'Musiques électroniques contemporaines festives ou intimistes, déplaçant les codes pop sans les abandonner. Pour les clubs comme pour les casques, le dancefloor comme espace de réflexion.',
    },
    en: {
      subtitle: 'The Awakened Tavern Guest',
      desc: 'Contemporary electronic music — festive or intimate — displacing pop codes without abandoning them. For clubs and headphones alike; the dancefloor as a space for reflection.',
    },
  },
  {
    name: 'Symphonica Electronica',
    fr: {
      subtitle: 'Musique symphonique électronique',
      desc: 'Réactualisation du patrimoine musical et du capital culturel occidental par l'électronique. Parasitage, détournement, hybridation : Bach en hardbass, Beethoven en grime, ou toute autre collision productive.',
    },
    en: {
      subtitle: 'Electronic Symphonic Music',
      desc: 'Reactivation of Western musical heritage through electronics. Parasitism, détournement, hybridization: Bach in hardbass, Beethoven in grime, or any other productive collision.',
    },
  },
  {
    name: 'Corpus Sonorum',
    fr: {
      subtitle: 'Matière sonore',
      desc: 'Sound art orienté vers les matières sonores organiques, industrielles, artefactuelles ou spéculatives. L'œuvre comme corps, le son comme matière première que l'on extrait, transforme, laisse vieillir.',
    },
    en: {
      subtitle: 'Sound Matter',
      desc: 'Sound art oriented toward organic, industrial, artifactual, or speculative sonic materials. The work as body; sound as raw matter to extract, transform, and let age.',
    },
  },
  {
    name: 'Viva Vox',
    fr: {
      subtitle: 'Voix vivante',
      desc: 'Productions sonores ou musicales centrées sur la voix humaine : vivante, archivée, artificielle, trouvée. Archives de parole, poésie, chant, performance vocale, synthèse. La voix comme site de mémoire.',
    },
    en: {
      subtitle: 'Living Voice',
      desc: 'Sound or musical works centered on the human voice: living, archived, artificial, found. Speech archives, poetry, song, vocal performance, synthesis. The voice as a site of memory.',
    },
  },
]

export default function Collections() {
  const { locale } = useRouter()

  return (
    <Layout>
      {locale === 'fr' ? (
        <>
          <h2>Collections éditoriales</h2>
          <p>
            Les publications de Paléophone s'organisent en six collections. Chaque collection définit
            un cadre esthétique et une posture éditoriale. Elles sont indicatives, non limitatives, évolutives.
          </p>
        </>
      ) : (
        <>
          <h2>Editorial Collections</h2>
          <p>
            Paléophone's publications are organized into six collections. Each defines
            an aesthetic framework and editorial stance. They are indicative, non-exhaustive, and evolving.
          </p>
        </>
      )}

      <div style={{ marginTop: '40px' }}>
        {collections.map((col, i) => {
          const content = locale === 'fr' ? col.fr : col.en
          return (
            <div
              key={col.name}
              style={{
                marginBottom: '40px',
                paddingBottom: '40px',
                borderBottom: i < collections.length - 1 ? '1px solid #eee' : 'none',
              }}
            >
              <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1em', fontWeight: '500' }}>
                {col.name}
              </h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
                {content.subtitle}
              </p>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: '#444' }}>
                {content.desc}
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
