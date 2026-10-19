import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Manifeste() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Avertissement' : 'Disclaimer'}</h2>

      {fr ? (
        <>
          <p>
            Paléophone est une association loi 1901 et un laboratoire de publication musicale.
          </p>
          <p>
            Le label accueille des musiques situées — électroniques, électro-acoustiques,
            club ou non, multimédia, poésie sonore, sound art, formes instrumentales ou à texte, archives.
            Chaque publication s'inscrit dans un contexte : esthétique, historique ou géographique.
          </p>
          <p>
            Les membres sont artistes. Les nouvelles publications et les nouvelles entrées
            se décident collectivement par vote.
          </p>
          <p>
            Deux sorties par mois, d'avril à décembre.
            Un rythme régulier pour construire un catalogue commun.
          </p>
          <p>
            Tous les six mois, l'association édite le <em>Bulletin Paléophone</em> :
            un zine en série limitée, conçu collectivement autour des nouvelles parutions.
          </p>
          <p>
            Paléophone n'est pas un distributeur ni un agrégateur.
            C'est un espace éditorial coopératif, modulaire et vivant.
          </p>
          <hr />
          <p style={{ fontSize: '13px', color: '#999', lineHeight: '1.9' }}>
            Comité d'honneur ·{' '}
            Charles Cros (1842–1888) · Mario Amehou (1986–2024) ·
            Daphne Oram (1925–2003) · Georges Perec (1936–1982) ·
            Ursula K. Le Guin (1929–2018)
          </p>
        </>
      ) : (
        <>
          <p>
            Paléophone is a registered non-profit association and a laboratory for music publishing.
          </p>
          <p>
            The label welcomes situated music — electronic, electro-acoustic,
            club or otherwise, multimedia, sound poetry, sound art, instrumental or text-based forms, archives.
            Each release is grounded in a context: aesthetic, historical, or geographic.
          </p>
          <p>
            Members are artists. New releases and new memberships
            are decided collectively by vote.
          </p>
          <p>
            Two releases per month, from April to December.
            A steady rhythm to build a shared catalogue.
          </p>
          <p>
            Every six months, the association publishes the <em>Bulletin Paléophone</em>:
            a limited-edition zine, collectively built around new releases.
          </p>
          <p>
            Paléophone is not a distributor or an aggregator.
            It is a cooperative, modular, and living editorial space.
          </p>
          <hr />
          <p style={{ fontSize: '13px', color: '#999', lineHeight: '1.9' }}>
            Honorary committee ·{' '}
            Charles Cros (1842–1888) · Mario Amehou (1986–2024) ·
            Daphne Oram (1925–2003) · Georges Perec (1936–1982) ·
            Ursula K. Le Guin (1929–2018)
          </p>
        </>
      )}
    </Layout>
  )
}
