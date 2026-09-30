// Mission BEPC : fonctionne hors ligne. Réseau d'abord (pour recevoir les mises à jour), sinon le cache.
const CACHE = "mission-bepc-202609301620";
const FICHIERS = ["./","index.html","manifest.webmanifest","icones/icone-192.png","icones/icone-512.png","icones/icone-masquable-512.png","icones/icone-180.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(l => Promise.all(l.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
});
