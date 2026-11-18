// Guarda tudo no celular pra funcionar sem internet.
// Quando mudar algum arquivo, aumente a versão pra o app baixar a atualização.
const VERSAO = 'joguinhos-v11';
const ARQUIVOS = [
  "./",
  "arte.js",
  "biblia.js",
  "common.js",
  "dados.js",
  "fonts/fraunces.woff2",
  "fonts/inter.woff2",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "index.html",
  "jogos/conta.html",
  "jogos/eco.html",
  "jogos/fusao.html",
  "jogos/licao.html",
  "jogos/linha.html",
  "jogos/orbita.html",
  "jogos/palavra.html",
  "jogos/pulso.html",
  "jogos/quemsou.html",
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
// Páginas: tenta a internet primeiro (pra pegar a versão nova) e cai no guardado se estiver offline.
// Resto (css, js, fonte, ícones): usa o guardado e atualiza em segundo plano.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || req.destination === 'document';
  e.respondWith(caches.open(VERSAO).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; });
    if (isPage) return net.catch(() => hit || c.match('./index.html'));
    net.catch(() => {});
    return hit || net;
  }));
});
