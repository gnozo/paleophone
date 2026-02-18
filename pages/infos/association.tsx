import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Association() {
  const { locale } = useRouter()

  return (
    <Layout>
      {locale === 'fr' ? (
        <>
          <h2>L'association</h2>

          <p style={{ fontSize: '14px', color: '#666' }}>
            Association loi 1901 · Fondée le 26 janvier 2026 à Arbois, Jura
          </p>

          <p style={{ marginTop: '20px' }}>
            Paléophone est une association dont les membres sont artistes.
            Son fonctionnement est coopératif : les équipements et ressources
            appartiennent collectivement aux membres.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Bureau</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            Présidente : Carin Klonowski<br />
            Trésorier : Vadim Pigounides<br />
            Secrétaire : Yann van der Cruyssen<br />
            Membre fondateur : Benjamin Efrati
          </p>

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '30px' }}>Comité d'honneur</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            Charles Cros (1842–1888) — poète et inventeur du paléophone<br />
            Mario Amehou (1986–2024) — poète afrofuturiste béninois<br />
            Daphne Oram (1925–2003) — compositrice, pionnière de la musique électronique<br />
            Georges Perec (1936–1982) — écrivain, OuLiPo<br />
            Ursula K. Le Guin (1929–2018) — écrivaine, SF et anthropologie spéculative
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Répartition des revenus</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            Streaming gratuit : 100% artistes<br />
            Streaming payant / supports physiques : 60% artistes · 20% label · 20% distributeur<br />
            Merchandising : 50% bénéfice net artistes
          </p>
        </>
      ) : (
        <>
          <h2>The Association</h2>

          <p style={{ fontSize: '14px', color: '#666' }}>
            Non-profit association (loi 1901) · Founded January 26, 2026, Arbois, Jura, France
          </p>

          <p style={{ marginTop: '20px' }}>
            Paléophone is an association whose members are artists.
            It operates cooperatively: equipment and resources are collectively owned by members.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Board</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            President: Carin Klonowski<br />
            Treasurer: Vadim Pigounides<br />
            Secretary: Yann van der Cruyssen<br />
            Founding member: Benjamin Efrati
          </p>

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '30px' }}>Honorary Committee</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            Charles Cros (1842–1888) — poet and inventor of the paléophone<br />
            Mario Amehou (1986–2024) — Beninese afrofuturist poet<br />
            Daphne Oram (1925–2003) — composer, pioneer of electronic music<br />
            Georges Perec (1936–1982) — writer, OuLiPo<br />
            Ursula K. Le Guin (1929–2018) — writer, SF and speculative anthropology
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Revenue Distribution</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            Free streaming: 100% artists<br />
            Paid streaming / physical formats: 60% artists · 20% label · 20% distributor<br />
            Merchandising: 50% net profit to artists
          </p>
        </>
      )}

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{locale === 'fr' ? '← Retour aux infos' : '← Back to info'}</a>
      </p>
    </Layout>
  )
}
