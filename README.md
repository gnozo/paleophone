# PALÉOPHONE

Site web du label associatif PALÉOPHONE, construit avec Next.js.

## Structure

- `pages/` - Pages du site (Next.js app router)
- `components/` - Composants React réutilisables
- `styles/` - Feuilles de style CSS
- `public/` - Fichiers statiques

## Développement

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Build & Deploy

```bash
npm run build
npm start
```

Déploiement automatique sur Vercel via GitHub.

## Esthétique — refactor avril 2026

Le site utilise désormais un thème sombre acide :

- Fond noir, typographie Unbounded / Space Mono / Instrument Serif (Google Fonts)
- Couleurs centralisées dans `styles/globals.css` (variables CSS)
- Galaxie animée en fond (`components/Galaxy.tsx`) — densité augmentée sur l'accueil
  via la prop `dense` : `<Layout dense>...</Layout>`
- Accueil en mode plein acide : titres géants, shadows colorés, manifesto typographié

### Modifier les couleurs

Toutes les couleurs du site sont dans `:root` en haut de `styles/globals.css`.
Modifier une variable affecte tout le site.

### Ajouter un outil dans la section "Outils / Médias Obsolètes"

1. Créer `pages/outils/mon-outil.tsx` (copier `lucidstrata.tsx` comme modèle)
2. Ajouter l'entrée dans `pages/outils/index.tsx` (tableau `tools`)
3. Ajouter l'entrée dans `components/Layout.tsx` (tableau `TOOLS`)
4. Si l'outil est une app statique : le poser dans `public/mon-outil/`

Le dropdown "Outils" de la nav reprendra automatiquement les entrées de `TOOLS`.
La page `/outils` liste tous les outils avec leur statut (live / soon / concept).

