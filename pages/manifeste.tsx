import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Manifeste() {
  const { locale } = useRouter()

  return (
    <Layout>
      {locale === 'fr' ? (
        <>
          <h2>Manifeste</h2>

          <p>
            Paléophone est une association et un laboratoire de publication musicale.
          </p>
          <p>
            Le label accueille des musiques situées — électroniques, électro-acoustiques,
            club-compatibles ou non, multimédia, poésie sonore, sound art, formes instrumentales
            ou à texte, archives. Chaque publication s'inscrit dans un contexte :
            esthétique, historique, ou géographique.
          </p>
          <p>
            Paléophone est une association dont les membres sont artistes.
            Les nouvelles publications et les nouvelles entrées au catalogue
            se décident collectivement par vote.
          </p>
          <p>
            Deux publications par mois, d'avril à décembre.
            Un flux régulier pour construire un contexte commun.
          </p>
          <p>
            Tous les six mois, l'association édite le <em>Bulletin Paléophone</em> :
            un zine en série limitée, élaboré collectivement autour des nouvelles parutions.
          </p>
          <p>
            Paléophone propose un cadre stable pour des œuvres singulières :
            pas un simple catalogue, mais une construction éditoriale modulaire et vivante.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Comité d'honneur</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Charles Cros (1842–1888) · Mario Amehou (1986–2024) ·
            Daphne Oram (1925–2003) · Georges Perec (1936–1982) ·
            Ursula K. Le Guin (1929–2018)
          </p>
        </>
      ) : (
        <>
          <h2>Manifesto</h2>

          <p>
            Paléophone is an association and a laboratory for music publishing.
          </p>
          <p>
            The label welcomes situated music — electronic, electro-acoustic,
            club-compatible or not, multimedia, sound poetry, sound art,
            instrumental or text-based forms, archives. Each publication is
            grounded in a context: aesthetic, historical, or geographic.
          </p>
          <p>
            Paléophone is an association whose members are artists.
            New publications and catalogue entries are decided collectively by vote.
          </p>
          <p>
            Two releases per month, from April to December.
            A steady flow to build a shared context.
          </p>
          <p>
            Every six months, the association publishes the <em>Bulletin Paléophone</em>:
            a limited-edition zine, collectively built around new releases.
          </p>
          <p>
            Paléophone provides a stable framework for singular works:
            not just a catalogue, but a modular and living editorial structure.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Honorary Committee</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Charles Cros (1842–1888) · Mario Amehou (1986–2024) ·
            Daphne Oram (1925–2003) · Georges Perec (1936–1982) ·
            Ursula K. Le Guin (1929–2018)
          </p>
        </>
      )}
    </Layout>
  )
}
