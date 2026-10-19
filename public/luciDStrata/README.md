# LucidStrata

Décorrélation des couleurs d'une image, d'une vidéo, d'une caméra ou d'une fenêtre, jouée dans le temps.

Première publication : 24 mars 2026, sur paleophone.fr (version 1.0) · version 3.7.0, 19 octobre 2026.

Ouvrir `lucidstrata.html` dans un navigateur. Caméra et capture d'écran demandent `http://localhost` (`python -m http.server`).

- espaces RGB, YUV, YCbCr, YIQ, CIELAB, inverses exacts
- relief (nivelé → photo), par fondu ou géodésique ; rotation, amplitude, recentrage
- séquenceur par états, limiteur de flashs actif par défaut
- entrée MIDI : apprentissage des contrôleurs, une note = pas suivant
- fenêtre détachée, plein écran, export PNG et WebM
- session `.paleo`, journal rejouable, dossier de session `.zip`

## Historique

LucidStrata est un outil de décorrélation des couleurs pour faire ressortir les variations les plus faibles d'une image, puis faire tourner ces couleurs dans le temps. Le moteur de la version 3.7 suit les équations publiées de l'étirement par décorrélation (R. E. Alley, NASA/JPL, 1996).

Version 1.0 24/03/2026
Version 3.7.0 19/10/2026

---

Un outil [Paléophone](https://paleophone.fr). Licence GPL-3.0-or-later.
