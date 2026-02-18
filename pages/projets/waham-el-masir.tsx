import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function WahamElMasir() {
  const { locale } = useRouter()

  return (
    <Layout>
      <h2>Waham El Masir</h2>

      <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 20px 0' }}>
          <strong>Benjamin Efrati</strong> — 2025 · Paléophone
        </p>

        {locale === 'fr' ? (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            Waham El Masir prolonge et développe la trajectoire sonore initiée par Cheikh Efrita.
            Un projet Paléophone, prévu pour une sortie en décembre 2026 dans le cadre d'un
            coffret commun <em>Cheikh Efrita / Waham El Masir</em>.
          </p>
        ) : (
          <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
            Waham El Masir extends and develops the sonic trajectory initiated by Cheikh Efrita.
            A Paléophone project, slated for release in December 2026 as part of a
            joint boxset <em>Cheikh Efrita / Waham El Masir</em>.
          </p>
        )}
      </div>

      <p style={{ fontSize: '14px', color: '#999' }}>
        {locale === 'fr' ? 'Sortie prévue : décembre 2026' : 'Expected release: December 2026'}
      </p>

      <p style={{ marginTop: '30px' }}>
        <a href="/projets">{locale === 'fr' ? '← Retour aux projets' : '← Back to projects'}</a>
      </p>
    </Layout>
  )
}
