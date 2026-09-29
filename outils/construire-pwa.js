// Construit la version installable (PWA) de Mission BEPC dans le dossier parent :
//   index.html, sw.js, manifest.webmanifest, icones/
// Usage : node outils/construire-pwa.js   (depuis Documents/mission-bepc)
// Prérequis : mission-bepc.html à jour (produit par construire-bepc.js) et outils/polices.css
const fs = require("fs"), path = require("path");
const racine = path.join(__dirname, "..");
const corps = fs.readFileSync(path.join(racine, "mission-bepc.html"), "utf8");
const polices = fs.readFileSync(path.join(__dirname, "polices.css"), "utf8");
const version = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "");

// Les polices sont intégrées (pas d'accès à Google Fonts hors ligne)
const corpsHorsLigne = corps.replace(/@import url\("https:\/\/fonts\.googleapis\.com[^"]*"\);/, polices);
if (corpsHorsLigne === corps) throw new Error("La ligne @import des polices est introuvable.");

const index = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#E0701F">
<meta name="description" content="Mission BEPC : réviser toutes les matières de 3e, avec exercices corrigés, sujets type BEPC et oral d'anglais.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icones/icone-192.png">
<link rel="apple-touch-icon" href="icones/icone-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Mission BEPC">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${corpsHorsLigne}
</body>
</html>
`;
fs.writeFileSync(path.join(racine, "index.html"), index);

const manifest = {
  name: "Mission BEPC", short_name: "Mission BEPC", description: "Réviser le BEPC : toutes les matières de 3e, exercices corrigés, sujets type BEPC.",
  lang: "fr", start_url: "./", scope: "./", display: "standalone", orientation: "portrait",
  background_color: "#F3F6FA", theme_color: "#E0701F",
  icons: [
    { src: "icones/icone-192.png", sizes: "192x192", type: "image/png" },
    { src: "icones/icone-512.png", sizes: "512x512", type: "image/png" },
    { src: "icones/icone-masquable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
  ]
};
fs.writeFileSync(path.join(racine, "manifest.webmanifest"), JSON.stringify(manifest, null, 2));

const fichiers = ["./", "index.html", "manifest.webmanifest", "icones/icone-192.png", "icones/icone-512.png", "icones/icone-masquable-512.png", "icones/icone-180.png"];
const sw = `// Mission BEPC : fonctionne hors ligne. Réseau d'abord (pour recevoir les mises à jour), sinon le cache.
const CACHE = "mission-bepc-${version}";
const FICHIERS = ${JSON.stringify(fichiers)};
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(l => Promise.all(l.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
});
`;
fs.writeFileSync(path.join(racine, "sw.js"), sw);
console.log("PWA construite, version", version, "·", Math.round(index.length / 1024), "Ko");
