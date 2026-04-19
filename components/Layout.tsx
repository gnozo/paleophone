import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Galaxy from './Galaxy'

type LayoutProps = {
  children: React.ReactNode
  /** Densité galaxie augmentée pour l'accueil */
  dense?: boolean
}

/**
 * Liste des outils affichés dans le dropdown nav.
 * Pour ajouter un outil :
 *   1. Créer pages/outils/[slug].tsx
 *   2. Ajouter une entrée ici
 *   3. Ajouter une entrée dans pages/outils/index.tsx (tableau `tools`)
 */
const TOOLS = [
  { slug: 'lucidstrata', label: 'LucidStrata' },
  // { slug: 'autre-outil', label: 'Autre Outil' },
]

export default function Layout({ children, dense = false }: LayoutProps) {
  const { locale, pathname } = useRouter()
  const fr = locale === 'fr'

  // Dropdown state — utile pour le comportement tap sur mobile
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef<HTMLSpanElement>(null)

  // Ferme le dropdown au clic extérieur
  useEffect(() => {
    if (!dropOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [dropOpen])

  // Ferme le dropdown lors d'une navigation
  useEffect(() => {
    setDropOpen(false)
  }, [pathname])

  return (
    <>
      <Galaxy dense={dense} />

      <header>
        <p>{fr ? 'Musique Stratifiée' : 'Stratified Music'}</p>
      </header>

      <nav>
        <Link href="/">Paléophone</Link>
        <Link href="/manifeste">{fr ? 'Avertissement' : 'Disclaimer'}</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/artistes">Artistes</Link>
        <Link href="/projets">Projets</Link>

        <span
          ref={dropRef}
          className="nav-dropdown"
          onMouseEnter={() => setDropOpen(true)}
          onMouseLeave={() => setDropOpen(false)}
        >
          <Link
            href="/outils"
            className="nav-dropdown-trigger"
            onClick={(e) => {
              // Sur mobile (pas de hover), premier tap = ouvre le menu, second tap = navigue
              // On détecte via matchMedia que le device ne supporte pas hover
              if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
                if (!dropOpen) {
                  e.preventDefault()
                  setDropOpen(true)
                }
              }
            }}
          >
            {fr ? 'Outils' : 'Tools'} <span className="nav-dropdown-arrow">▾</span>
          </Link>

          <span className={`nav-dropdown-menu${dropOpen ? ' open' : ''}`}>
            <Link href="/outils" className="nav-dropdown-item nav-dropdown-index">
              {fr ? 'Tous les outils' : 'All tools'}
            </Link>
            {TOOLS.map(t => (
              <Link
                key={t.slug}
                href={`/outils/${t.slug}`}
                className="nav-dropdown-item"
              >
                {t.label}
              </Link>
            ))}
          </span>
        </span>

        <Link href="/infos">Infos</Link>

        <span className="locale-switch">
          <Link href={pathname} locale={fr ? 'en' : 'fr'}>
            {fr ? 'EN' : 'FR'}
          </Link>
        </span>
      </nav>

      <main>{children}</main>

      <footer>
        PALÉOPHONE 2026 ·{' '}
        <a href="mailto:paleophonerecords@gmail.com">
          paleophonerecords@gmail.com
        </a>
      </footer>

      <style jsx global>{`
        /* Dropdown "Outils" */
        .nav-dropdown {
          position: relative;
          margin-right: 20px;
          display: inline-block;
        }

        .nav-dropdown-trigger {
          /* hérite des styles de nav a */
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .nav-dropdown-arrow {
          font-size: 9px;
          transition: transform 0.2s;
          opacity: 0.6;
        }

        .nav-dropdown:hover .nav-dropdown-arrow,
        .nav-dropdown:focus-within .nav-dropdown-arrow {
          transform: translateY(1px);
          opacity: 1;
        }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: -14px;
          min-width: 200px;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4px);
          transition: opacity 0.15s, transform 0.15s, visibility 0.15s;
          z-index: 50;
          /* Pont invisible pour éviter que le menu se ferme au survol de l'espace */
        }
        .nav-dropdown-menu::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 0;
          right: 0;
          height: 6px;
          /* pont de survol invisible */
        }

        .nav-dropdown-menu.open,
        .nav-dropdown:hover .nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav-dropdown-item {
          display: block;
          padding: 8px 16px;
          margin: 0 !important;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-relu) !important;
          border-bottom: none !important;
          transition: background 0.15s, color 0.15s;
        }
        .nav-dropdown-item:hover {
          background: rgba(0, 255, 204, 0.08);
          color: var(--cyan) !important;
        }
        .nav-dropdown-index {
          font-family: 'Instrument Serif', serif !important;
          font-style: italic;
          font-size: 12px !important;
          text-transform: none !important;
          letter-spacing: 0 !important;
          color: var(--violet) !important;
          border-bottom: 1px dashed var(--border) !important;
          padding-bottom: 10px !important;
          margin-bottom: 4px !important;
        }
        .nav-dropdown-index:hover {
          color: var(--hot) !important;
        }

        /* Mobile : dropdown s'ouvre "inline" plutôt qu'en absolute */
        @media (max-width: 640px) {
          .nav-dropdown-menu {
            position: static;
            min-width: 0;
            background: transparent;
            border: none;
            padding: 4px 0 4px 16px;
            display: none;
          }
          .nav-dropdown-menu.open {
            display: flex;
          }
          /* Sur mobile on désactive l'ouverture au hover */
          .nav-dropdown:hover .nav-dropdown-menu:not(.open) {
            opacity: 0;
            visibility: hidden;
          }
          .nav-dropdown-item {
            padding: 4px 8px;
          }
        }
      `}</style>
    </>
  )
}
