# Eidolon

Visionneuse de relevés 3D : lumière rasante déplaçable, caméra, enchaînement de modèles.

Première publication : 19 mars 2026, sur benjaminefrati.com (version 1.0, visionneuse de Bernifal) · version 2.0.0, 19 octobre 2026.

Servir le dossier (`python -m http.server`) et ouvrir `eidolon/eidolon.html`. Glisser des `.glb` / `.gltf`, ou passer une liste : `?liste=chemin/liste.json` avec `{"modeles":[{"url":"…","titre":"…","description":"…"}]}`.

- lumière qui suit la caméra ou lumière mobile, vacillement
- boucle orbite ou pendule
- ← → modèle suivant / précédent, Maj + flèche : prochain modèle chargé
- préchargement des voisins, le modèle affiché reste manipulable pendant le chargement
- session `.paleo`, export PNG
- three.js et décodeur Draco inclus, aucune ressource en ligne

## Historique

Eidolon est une visionneuse de relevés photogrammétriques pour la présentation de parois et d'objets gravés, sous une lumière rasante que l'on déplace. Il est issu de la visionneuse de la grotte de Bernifal (versions 1.0 à 1.5, présentes dans l'historique git sans le contenu de la page d'origine).

Version 1.0 19/03/2026
Version 2.0.0 19/10/2026

---

Un outil [Paléophone](https://paleophone.fr). Licence GPL-3.0-or-later.
