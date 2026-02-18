import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale, pathname } = useRouter()

  const navItems = locale === 'fr'
    ? [
        { href: '/', label: 'Accueil' },
        { href: '/manifeste', label: 'Manifeste' },
        { href: '/collections', label: 'Collections' },
        { href: '/artistes', label: 'Artistes' },
        { href: '/projets', label: 'Projets' },
        { href: '/publier', label: 'Publier' },
        { href: '/infos', label: 'Infos' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/manifeste', label: 'Manifesto' },
        { href: '/collections', label: 'Collections' },
        { href: '/artistes', label: 'Artists' },
        { href: '/projets', label: 'Projects' },
        { href: '/publier', label: 'Publish' },
        { href: '/infos', label: 'Info' },
      ]

  return (
    <>
      <header>
        <Link href="/" style={{ textDecoration: 'none', border: 'none' }}>
          <h1>PALÉOPHONE</h1>
        </Link>
        <p>
          {locale === 'fr'
            ? 'Musique Stratifiée'
            : 'Stratified Music'}
        </p>
      </header>

      <nav>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              fontWeight: pathname === item.href ? '600' : 'normal',
              color: pathname === item.href ? '#111' : undefined,
            }}
          >
            {item.label}
          </Link>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#aaa', display: 'inline-block', paddingLeft: '20px' }}>
          <Link href={pathname} locale={locale === 'fr' ? 'en' : 'fr'} style={{ border: 'none', color: '#aaa' }}>
            {locale === 'fr' ? 'EN' : 'FR'}
          </Link>
        </span>
      </nav>

      <main>{children}</main>

      <footer>
        paléophone 2026 ·{' '}
        <a href="mailto:paleophonerecords@gmail.com" style={{ color: '#999', fontSize: '11px' }}>
          paleophonerecords@gmail.com
        </a>
      </footer>
    </>
  )
}
