import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Association() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'Association' : 'Association'}</h2>

      <p style={{ fontSize: '13px', color: '#999' }}>
        {fr ? 'Association loi 1901 · Fondée le 26 janvier 2026 · Arbois, Jura' : 'Non-profit association · Founded January 26, 2026 · Arbois, Jura, France'}
      </p>

      <hr />

      <p style={{ fontSize: '13px', color: '#999', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{fr ? 'Bureau' : 'Board'}</p>
      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.9' }}>
        {fr ? 'Présidente' : 'President'} : Carin Klonowski<br />
        {fr ? 'Trésorier' : 'Treasurer'} : Vadim Pigounides<br />
        {fr ? 'Secrétaire' : 'Secretary'} : Yann van der Cruyssen<br />
        {fr ? 'Membre fondateur' : 'Founding member'} : Benjamin Efrati
      </p>

      <hr />

      <p style={{ fontSize: '13px', color: '#999', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{fr ? 'Comité d\'honneur' : 'Honorary Committee'}</p>
      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.9' }}>
        Charles Cros (1842–1888)<br />
        Mario Amehou (1986–2024)<br />
        Daphne Oram (1925–2003)<br />
        Georges Perec (1936–1982)<br />
        Ursula K. Le Guin (1929–2018)
      </p>

      <hr />
    </Layout>
  )
}
