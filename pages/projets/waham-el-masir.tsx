import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function WahamElMasir() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>Waham El Masir</h2>

      <p style={{ fontSize: '14px', color: '#666' }}>
        Benjamin Efrati · {fr ? 'sortie prévue décembre 2026' : 'expected December 2026'} · Paléophone
      </p>

      <p style={{ marginTop: '20px' }}>
        {fr
          ? `Waham El Masir prolonge la trajectoire sonore initiée par Cheikh Efrita. Sortie prévue en décembre 2026 dans le cadre d'un coffret commun Cheikh Efrita / Waham El Masir.`
          : `Waham El Masir extends the sonic trajectory initiated by Cheikh Efrita. Planned for release in December 2026 as part of a joint boxset Cheikh Efrita / Waham El Masir.`}
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{fr ? '← Projets' : '← Projects'}</a>
      </p>
    </Layout>
  )
}
