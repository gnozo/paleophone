import React, { useMemo } from 'react'

type GalaxyProps = {
  dense?: boolean
}

const COLORS = [
  '#ff00ff', // magenta
  '#00ffcc', // cyan
  '#ffd700', // gold
  '#ff1493', // hot pink
  '#bfff00', // lime
  '#ff6600', // orange
  '#9d00ff', // violet
  '#00a8ff', // electric blue
  '#ffffff', // white
  '#ffffff', // (doublé pour plus de blanc)
]

/**
 * Galaxy — fond animé de pixels colorés qui pulsent.
 * - `dense` : active le mode dense (accueil) avec plus d'étoiles
 *   et une animation teinte additionnelle.
 *
 * Les positions et tailles sont calculées une seule fois par montage
 * (useMemo) pour éviter tout re-render. Utilise une seed déterministe
 * pour un rendu cohérent entre SSR et client (évite les warnings
 * d'hydratation Next.js).
 */
export default function Galaxy({ dense = false }: GalaxyProps) {
  const count = dense ? 220 : 110

  const stars = useMemo(() => {
    // Seed simple et déterministe — pas de Math.random() pour rester SSR-safe
    const seeded = (i: number, salt: number) => {
      const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453
      return x - Math.floor(x)
    }

    return Array.from({ length: count }).map((_, i) => {
      const left   = seeded(i, 1) * 100       // 0–100 vw
      const top    = seeded(i, 2) * 100       // 0–100 vh
      const size   = 0.6 + seeded(i, 3) * 2.2 // 0.6–2.8 px
      const color  = COLORS[Math.floor(seeded(i, 4) * COLORS.length)]
      const dur    = 4 + seeded(i, 5) * 10    // 4–14 s
      const delay  = -seeded(i, 6) * 14       // décalages pour éviter synchronisation
      const glow   = size * 2.2

      return { left, top, size, color, dur, delay, glow, id: i }
    })
  }, [count])

  return (
    <div
      className={`galaxy${dense ? ' galaxy-dense' : ''}`}
      aria-hidden="true"
    >
      {stars.map(s => (
        <span
          key={s.id}
          className="galaxy-star"
          style={{
            left:            `${s.left}vw`,
            top:             `${s.top}vh`,
            width:           `${s.size}px`,
            height:          `${s.size}px`,
            background:      s.color,
            boxShadow:       `0 0 ${s.glow}px ${s.color}`,
            animationDuration: dense ? `${s.dur}s, ${s.dur * 2}s` : `${s.dur}s`,
            animationDelay:    dense ? `${s.delay}s, ${s.delay}s` : `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
