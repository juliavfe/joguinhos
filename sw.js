// Guarda tudo no celular pra funcionar sem internet.
// Quando mudar algum arquivo, aumente a versão pra o app baixar a atualização.
const VERSAO = 'joguinhos-v1';
const ARQUIVOS = [
  "./",
  "common.js",
  "dados.js",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "index.html",
  "jogos/conta.html",
  "jogos/eco.html",
  "jogos/fusao.html",
  "jogos/linha.html",
  "jogos/orbita.html",
  "jogos/palavra.html",
  "jogos/pulso.html",
  "jogos/quiz.html",
  "jogos/torre.html",
  "manifest.json",
  "style.css",
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Usa o que está guardado; se tiver internet, atualiza em segundo plano.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(VERSAO).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok && new URL(e.request.url).origin === location.origin) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
