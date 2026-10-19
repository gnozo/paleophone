import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

type Tool = {
  name: string
  href: string
  color: string
  external?: boolean
  fr: string
  en: string
}

/** Suite Paléophone : outils autonomes, pages web sans serveur. */
export const SUITE: Tool[] = [
  { name: 'LucidStrata', href: '/luciDStrata/', color: 'var(--cyan)',
    fr: 'Décorrélation des couleurs d\'une image, d\'une vidéo ou d\'une caméra, jouée dans le temps.',
    en: 'Colour decorrelation of an image, a video or a camera feed, played over time.' },
  { name: 'Eidolon', href: '/eidolon/', color: 'var(--gold)',
    fr: 'Visionneuse de relevés 3D sous lumière rasante, enchaînement de modèles.',
    en: '3D survey viewer under raking light, model sequencing.' },
  { name: 'Diaclase', href: '/diaclase/', color: 'var(--hot)',
    fr: 'Enregistrement et analyse du rythme des commandes d\'une manette de jeu.',
    en: 'Recording and rhythm analysis of gamepad inputs.' },
  { name: 'Banc cladistique', href: '/cladistique/', color: 'var(--lime)',
    fr: 'Parcimonie, consensus et bootstrap sur une matrice de caractères, dans le navigateur.',
    en: 'Parsimony, consensus and bootstrap on a character matrix, in the browser.' },
  { name: 'Knap-Knapp', href: 'http://benjaminefrati.com/knap-knapp', color: 'var(--orange)', external: true,
    fr: 'Simulateur de taille de la pierre.',
    en: 'Flint-knapping simulator.' },
]

/** Hors suite. */
export const AUTRES: Tool[] = [
  { name: 'Data Farming Simulator', href: '/datafarmingsimulator/', color: 'var(--violet)',
    fr: 'Archival intelligence.',
    en: 'Archival intelligence.' },
]

function Row({ t, fr }: { t: Tool; fr: boolean }) {
  return (
    <li style={{ display: 'flex', gap: '14px', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px dashed var(--border)' }}>
      <a href={t.href} target={t.external ? '_blank' : undefined} rel={t.external ? 'noopener' : undefined}
        style={{ fontFamily: "'Unbounded', sans-serif", fontSize: '16px', fontWeight: 600, color: t.color, borderBottom: 'none', whiteSpace: 'nowrap' }}>
        {t.name}{t.external ? ' ↗' : ''}
      </a>
      <span style={{ fontSize: '14px', color: 'var(--gray-relu)' }}>{fr ? t.fr : t.en}</span>
    </li>
  )
}

export default function Outils() {
  const { locale } = useRouter()
  const fr = locale === 'fr'
  return (
    <Layout>
      <p className="small-label" style={{ color: 'var(--violet)' }}>{fr ? 'Suite Paléophone' : 'Paléophone suite'}</p>
      <h2>{fr ? 'Outils' : 'Tools'}</h2>
      <p className="caption" style={{ maxWidth: '600px' }}>
        {fr ? 'Pages web autonomes, sans serveur ni compte. Les fichiers ne quittent pas votre machine.'
            : 'Standalone web pages, no server, no account. Files never leave your machine.'}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 40px' }}>
        {SUITE.map(t => <Row key={t.name} t={t} fr={fr} />)}
      </ul>
      <p className="small-label" style={{ color: 'var(--gray-relu)' }}>{fr ? 'Hors suite' : 'Outside the suite'}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
        {AUTRES.map(t => <Row key={t.name} t={t} fr={fr} />)}
      </ul>
      <p className="mono-dim" style={{ marginTop: '40px' }}>
        <a href="https://github.com/gnozo/paleophone" target="_blank" rel="noopener">GitHub</a> · GPL-3.0
      </p>
    </Layout>
  )
}
