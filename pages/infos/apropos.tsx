import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function APropos() {
  const { locale } = useRouter()

  return (
    <Layout>
      {locale === 'fr' ? (
        <>
          <h2>À propos</h2>

          <p>
            Paléophone est un label associatif, coopératif et médiarchéologique.
            Au croisement de la création sonore, de l'archéologie des médias et de la recherche
            spéculative, le projet réactive des temporalités oubliées, valorise des œuvres
            et des artistes invisibilisés, et expérimente l'ensemble des supports de diffusion —
            des plus obsolètes aux plus hypothétiques.
          </p>
          <p>
            Inspiré par l'invention fantôme de Charles Cros et par la mémoire du poète Mario Amehou,
            Paléophone fonctionne comme une communauté artistique solidaire : les membres partagent
            ressources, méthodes et devenir collectif.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Principes fondateurs</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            {['Musique Stratifiée', 'Archives Vivantes', 'Transmission Réversible', 'Indépendance Radicale', 'Autosuffisance Technique'].map(p => (
              <span key={p} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
                {p}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Fondé en</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            2026 · Arbois, Jura, France
          </p>
        </>
      ) : (
        <>
          <h2>About</h2>

          <p>
            Paléophone is an associative, cooperative, and media-archaeological label.
            At the crossroads of sound creation, media archaeology, and speculative research,
            the project reactivates forgotten temporalities, values invisible works and artists,
            and experiments with every diffusion medium — from the most obsolete to the most hypothetical.
          </p>
          <p>
            Inspired by the phantom invention of Charles Cros and the memory of poet Mario Amehou,
            Paléophone functions as a solidary artistic community: members share resources,
            methods, and collective futures.
          </p>

          <hr style={{ margin: '2rem 0' }} />

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Founding Principles</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            {['Stratified Music', 'Living Archives', 'Reversible Transmission', 'Radical Independence', 'Technical Self-Sufficiency'].map(p => (
              <span key={p} style={{ fontSize: '13px', padding: '5px 12px', backgroundColor: '#f5f5f5', borderRadius: '20px', border: '1px solid #eee' }}>
                {p}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Founded</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            2026 · Arbois, Jura, France
          </p>
        </>
      )}

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{locale === 'fr' ? '← Retour aux infos' : '← Back to info'}</a>
      </p>
    </Layout>
  )
}
