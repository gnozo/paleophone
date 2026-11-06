import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

export type Medium = 'visuel' | 'sonore' | 'ludique' | 'scientifique'

export type Tool = {
  name: string
  href: string
  color: string
  external?: boolean
  /** première publication, AAAA-MM */
  date: string
  mediums: Medium[]
  fr: string
  en: string
  avenir?: boolean
}

const MEDIUMS: { key: Medium; fr: string; en: string }[] = [
  { key: 'visuel', fr: 'visuel', en: 'visual' },
  { key: 'sonore', fr: 'sonore', en: 'sound' },
  { key: 'ludique', fr: 'ludique', en: 'play' },
  { key: 'scientifique', fr: 'scientifique', en: 'science' },
]

/** Suite Paléophone : pages web autonomes, sans serveur. */
export const SUITE: Tool[] = [
  { name: 'LucidStrata', href: '/luciDStrata/', color: 'var(--cyan)', date: '2026-03', mediums: ['visuel', 'scientifique'],
    fr: 'Décorrélation des couleurs d\'une image, d\'une vidéo ou d\'une caméra, jouée dans le temps.',
    en: 'Colour decorrelation of an image, a video or a camera feed, played over time.' },
  { name: 'Eidolon', href: '/eidolon/', color: 'var(--gold)', date: '2026-03', mediums: ['visuel', 'scientifique'],
    fr: 'Visionneuse de relevés 3D sous lumière rasante, enchaînement de modèles.',
    en: '3D survey viewer under raking light, model sequencing.' },
  { name: 'Diaclase', href: '/diaclase/', color: 'var(--hot)', date: '2026-03', mediums: ['ludique', 'scientifique'],
    fr: 'Enregistrement et analyse du rythme des commandes d\'une manette de jeu.',
    en: 'Recording and rhythm analysis of gamepad inputs.' },
  { name: 'BRANCHE', href: '/branche/', color: 'var(--lime)', date: '2026-10', mediums: ['scientifique'],
    fr: 'Parcimonie, consensus et bootstrap sur une matrice de caractères, dans le navigateur.',
    en: 'Parsimony, consensus and bootstrap on a character matrix, in the browser.' },
  { name: 'Knap-Knapp', href: 'http://benjaminefrati.com/knap-knapp', color: 'var(--orange)', external: true, date: '2026-09', mediums: ['ludique', 'sonore', 'scientifique'],
    fr: 'Simulateur de taille de la pierre.',
    en: 'Flint-knapping simulator.' },
  { name: 'Paléo-Astro-Phone', href: '/outils/', color: 'var(--gold)', date: '2026-11', mediums: ['visuel', 'scientifique'], avenir: true,
    fr: 'Le ciel d\'une grotte à une date donnée, depuis le sol, avec ses noms d\'étoiles selon les cultures.',
    en: 'The sky above a cave at a given date, seen from the ground, with star names across cultures.' },
]

/** Hors suite. */
export const AUTRES: Tool[] = [
  { name: 'Data Farming Simulator', href: '/datafarmingsimulator/', color: 'var(--violet)', date: '2026-07', mediums: ['ludique'],
    fr: 'Archival intelligence.',
    en: 'Archival intelligence.' },
  { name: 'Archéophone', href: '/archeophone/', color: 'var(--cyan)', date: '2026-11', mediums: ['sonore', 'visuel'],
    fr: 'Instrument à dessiner : un geste sur une cible devient une boucle ; chaque son est un taxon dont on suit la lignée.',
    en: 'A drawing instrument: a gesture on a target becomes a loop; every sound is a taxon whose lineage you follow.' },
]

function Row({ t, fr }: { t: Tool; fr: boolean }) {
  return (
    <li style={{ padding: '12px 0', borderBottom: '1px dashed var(--border)' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', flexWrap: 'wrap' }}>
        <a href={t.href} target={t.external ? '_blank' : undefined} rel={t.external ? 'noopener' : undefined}
          style={{ fontFamily: "'Unbounded', sans-serif", fontSize: '16px', fontWeight: 600, color: t.color, borderBottom: 'none', whiteSpace: 'nowrap' }}>
          {t.name}{t.external ? ' ↗' : ''}
        </a>
        <span className="mono-dim" style={{ fontSize: '11px' }}>
          {t.date}{t.avenir ? (fr ? ' · à paraître' : ' · forthcoming') : ''} · {t.mediums.map(m => MEDIUMS.find(x => x.key === m)![fr ? 'fr' : 'en']).join(' · ')}
        </span>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--gray-relu)', margin: '4px 0 0' }}>{fr ? t.fr : t.en}</p>
    </li>
  )
}

function Column({ title, tools, fr }: { title: string; tools: Tool[]; fr: boolean }) {
  return (
    <div style={{ flex: '1 1 280px', minWidth: 0 }}>
      <p className="small-label" style={{ color: 'var(--violet)', marginBottom: '4px' }}>{title}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tools.length ? tools.map(t => <Row key={t.name} t={t} fr={fr} />)
          : <li className="mono-dim" style={{ padding: '12px 0' }}>{fr ? 'rien avec ces filtres' : 'nothing with these filters'}</li>}
      </ul>
    </div>
  )
}

export default function Outils() {
  const { locale } = useRouter()
  const fr = locale === 'fr'
  const [medium, setMedium] = useState<Medium | null>(null)
  const [order, setOrder] = useState<'date' | 'nom'>('date')
  const [avenir, setAvenir] = useState(true)

  const filtre = (list: Tool[]) => {
    const out = list.filter(t => (!medium || t.mediums.includes(medium)) && (avenir || !t.avenir))
    return out.sort((a, b) => order === 'date' ? b.date.localeCompare(a.date) : a.name.localeCompare(b.name))
  }
  const suite = useMemo(() => filtre(SUITE), [medium, order, avenir])
  const autres = useMemo(() => filtre(AUTRES), [medium, order, avenir])

  const chip = (active: boolean, label: string, onClick: () => void) => (
    <button key={label} onClick={onClick} style={{
      font: "11px 'Space Mono', monospace", letterSpacing: '.06em', padding: '5px 10px', cursor: 'pointer',
      border: '1px solid var(--border)', background: active ? 'var(--white)' : 'transparent', color: active ? 'var(--bg)' : 'var(--gray-relu)',
    }}>{label}</button>
  )

  return (
    <Layout>
      <h2>Instruments</h2>
      <p className="caption" style={{ maxWidth: '600px' }}>
        {fr ? 'Pages web autonomes, sans serveur ni compte. Les fichiers ne quittent pas votre machine.'
            : 'Standalone web pages, no server, no account. Files never leave your machine.'}
      </p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '18px 0 28px', alignItems: 'center' }}>
        {chip(medium === null, fr ? 'tout' : 'all', () => setMedium(null))}
        {MEDIUMS.map(m => chip(medium === m.key, fr ? m.fr : m.en, () => setMedium(medium === m.key ? null : m.key)))}
        <span style={{ width: '12px' }} />
        {chip(order === 'date', fr ? 'par date' : 'by date', () => setOrder('date'))}
        {chip(order === 'nom', fr ? 'par nom' : 'by name', () => setOrder('nom'))}
        <span style={{ width: '12px' }} />
        {chip(avenir, fr ? 'à paraître' : 'forthcoming', () => setAvenir(!avenir))}
      </div>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Column title={fr ? 'Suite Paléophone' : 'Paléophone suite'} tools={suite} fr={fr} />
        <Column title={fr ? 'Hors suite' : 'Outside the suite'} tools={autres} fr={fr} />
      </div>
      <p className="mono-dim" style={{ marginTop: '40px' }}>
        <a href="https://github.com/gnozo/paleophone" target="_blank" rel="noopener">GitHub</a> · GPL-3.0
      </p>
    </Layout>
  )
}
