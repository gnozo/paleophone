import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function APropos() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <h2>{fr ? 'À propos' : 'About'}</h2>

      {fr ? (
        <>
          <p>
            Paléophone est un label coopératif et associatif fondé en 2026 à Arbois, dans le Jura.
            Au croisement de la création musicale, de l'archéologie des médias et de la recherche
            spéculative, le projet valorise des œuvres et des artistes qui cherchent un contexte
            éditorial précis — pas seulement une distribution.
          </p>
          <p>
            Inspiré par l'invention fantôme de Charles Cros et par la mémoire du poète Mario Amehou,
            Paléophone fonctionne comme une communauté solidaire : les membres partagent ressources,
            décisions et devenir collectif.
          </p>
          <div style={{ marginTop: '30px' }}>
            <p style={{ fontSize: '13px', color: '#999', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Principes</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Musique Stratifiée', 'Archives Vivantes', 'Transmission Réversible', 'Indépendance Radicale', 'Coopération'].map(p => (
                <span key={p} style={{ fontSize: '13px', padding: '4px 10px', backgroundColor: '#f5f5f5', border: '1px solid #eee', borderRadius: '20px' }}>{p}</span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <p>
            Paléophone is a cooperative, non-profit label founded in 2026 in Arbois, Jura, France.
            At the intersection of music creation, media archaeology, and speculative research,
            the project supports works and artists looking for a specific editorial context —
            not just distribution.
          </p>
          <p>
            Inspired by the phantom invention of Charles Cros and the memory of poet Mario Amehou,
            Paléophone operates as a solidary community: members share resources,
            decisions, and a collective future.
          </p>
          <div style={{ marginTop: '30px' }}>
            <p style={{ fontSize: '13px', color: '#999', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Principles</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Stratified Music', 'Living Archives', 'Reversible Transmission', 'Radical Independence', 'Cooperation'].map(p => (
                <span key={p} style={{ fontSize: '13px', padding: '4px 10px', backgroundColor: '#f5f5f5', border: '1px solid #eee', borderRadius: '20px' }}>{p}</span>
              ))}
            </div>
          </div>
        </>
      )}

      <p style={{ marginTop: '30px' }}>
        <a href="/infos">{fr ? '← Infos' : '← Info'}</a>
      </p>
    </Layout>
  )
}
