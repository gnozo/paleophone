import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Tool = {
  slug: string
  name: string
  color: string
  fr: { tagline: string; desc: string }
  en: { tagline: string; desc: string }
  status?: 'live' | 'soon' | 'concept'
}

const tools: Tool[] = [
  {
    slug: 'lucidstrata',
    name: 'LucidStrata',
    color: 'var(--cyan)',
    status: 'live',
    fr: {
      tagline: 'Shader d\'archéologie visuelle',
      desc: `Outil de traitement d'images inspiré de DStretch. Révèle les strates chromatiques d'une photographie en redistribuant l'espace de couleur. Utilisé pour la direction artistique de l'album Wahem El Masir.`,
    },
    en: {
      tagline: 'Visual archaeology shader',
      desc: `Image processing tool inspired by DStretch. Reveals chromatic strata in a photograph by redistributing colour space. Used for the art direction of the Wahem El Masir album.`,
    },
  },
  // Futurs outils — emplacements réservés.
  // Pour ajouter : décommenter le bloc, créer pages/outils/[slug].tsx,
  // et ajouter l'entrée dans components/Layout.tsx (dropdown nav).
  /*
  {
    slug: 'autre-outil',
    name: 'Autre Outil',
    color: 'var(--hot)',
    status: 'soon',
    fr: { tagline: '...', desc: '...' },
    en: { tagline: '...', desc: '...' },
  },
  */
]

export default function Outils() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <div style={{ marginBottom: '40px' }}>
        <p className="small-label" style={{ color: 'var(--violet)' }}>
          {fr ? 'Médias Obsolètes' : 'Obsolete Media'}
        </p>
        <h2>{fr ? 'Outils' : 'Tools'}</h2>
        <p className="caption" style={{ maxWidth: '600px' }}>
          {fr
            ? `Outils développés par et pour Paléophone — archéologie des médias, shaders, protocoles d'écoute, formats oubliés ou jamais advenus.`
            : `Tools developed by and for Paléophone — media archaeology, shaders, listening protocols, forgotten or never-happened formats.`}
        </p>
      </div>

      <div style={{ display: 'grid', gap: '40px' }}>
        {tools.map(tool => {
          const t = fr ? tool.fr : tool.en
          return (
            <Link
              key={tool.slug}
              href={`/outils/${tool.slug}`}
              style={{
                display: 'block',
                padding: '28px',
                border: '1px solid var(--border)',
                background: 'rgba(10, 10, 10, 0.4)',
                backdropFilter: 'blur(4px)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              className="tool-card"
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                <h3 style={{
                  margin: 0,
                  fontSize: '26px',
                  fontWeight: 700,
                  color: tool.color,
                  letterSpacing: '-0.01em',
                }}>
                  {tool.name}
                </h3>
                {tool.status === 'live' && (
                  <span className="mono-dim" style={{ color: 'var(--lime)' }}>
                    ● {fr ? 'EN LIGNE' : 'LIVE'}
                  </span>
                )}
                {tool.status === 'soon' && (
                  <span className="mono-dim" style={{ color: 'var(--orange)' }}>
                    ● {fr ? 'BIENTÔT' : 'SOON'}
                  </span>
                )}
                {tool.status === 'concept' && (
                  <span className="mono-dim" style={{ color: 'var(--gray-relu)' }}>
                    ● {fr ? 'CONCEPT' : 'CONCEPT'}
                  </span>
                )}
              </div>

              <p style={{
                margin: '6px 0 14px 0',
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'var(--gray-relu)',
              }}>
                {t.tagline}
              </p>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
                {t.desc}
              </p>
            </Link>
          )
        })}
      </div>

      <style jsx>{`
        :global(.tool-card:hover) {
          border-color: var(--cyan) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </Layout>
  )
}
