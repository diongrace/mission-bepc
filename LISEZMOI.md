# Mission BEPC

Application de révision du BEPC (classe de 3e, Côte d'Ivoire) : toutes les matières du programme officiel, exemples corrigés pas à pas, exercices avec corrections détaillées, sujets type BEPC notés sur 20, oral d'anglais et grands thèmes d'actualité 2026. Fonctionne hors ligne une fois installée.

Site : https://diongrace.github.io/mission-bepc/

## Mettre à jour
1. Modifier les sources dans `outils/` (contenus `bepc-*.js`, écrans `bepc-corps.html`).
2. Dans `outils/`, `node construire-bepc.js` produit `mission-bepc.html` (le copier à la racine).
3. À la racine, `node outils/construire-pwa.js` produit `index.html`, `sw.js` et `manifest.webmanifest`.
4. `git commit` puis `git push` : GitHub Pages publie en une minute.
