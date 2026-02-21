import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale, pathname } = useRouter()
  const fr = locale === 'fr'

  return (
    <>
      <header>
        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
          {fr ? 'Musique Stratifiée' : 'Stratified Music'}
        </p>
      </header>

      <nav>
        <Link href="/">Paléophone</Link>
        <Link href="/manifeste">{fr ? 'Avertissement' : 'Disclaimer'}</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/artistes">Artistes</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/publier">{fr ? 'Publier' : 'Publish'}</Link>
        <Link href="/infos">Infos</Link>
        <span className="locale-switch">
          <Link href={pathname} locale={fr ? 'en' : 'fr'}>
            {fr ? 'EN' : 'FR'}
          </Link>
        </span>
      </nav>

      <main>{children}</main>

      <footer>
        paléophone 2026 ·{' '}
        <a href="mailto:paleophonerecords@gmail.com">
          paleophonerecords@gmail.com
        </a>
      </footer>
    </>
  )
}
