import React from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>PALÉOPHONE</h1>
        <p>Musique Stratifiée</p>
      </header>

      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/artistes">Artistes</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/infos">Infos</Link>
      </nav>

      <main>{children}</main>

      <footer>paléophone 2026</footer>
    </>
  )
}
