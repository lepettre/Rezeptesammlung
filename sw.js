/* Rezeptesammlung – Offline-Cache. Bei Änderungen an index.html VERSION erhöhen. */
const VERSION = 'v41';
const SHELL = 'rk-shell-' + VERSION;
const OCR = 'rk-ocr-v4';
const SHELL_FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'fonts/ArchivoBlack-Regular.woff2', 'fonts/Archivo-var.woff2', 'fonts/SpaceMono-Regular.woff2', 'fonts/SpaceMono-Bold.woff2',
  'fonts/Geist.woff2', 'fonts/Inter.woff2', 'fonts/Fraunces.woff2', 'fonts/DMSerif.woff2', 'fonts/DMSans.woff2', 'fonts/SpaceGrotesk.woff2',
  'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-32.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== OCR).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // Texterkennung: beim ersten Gebrauch laden, danach dauerhaft offline
  if (url.pathname.includes('/ocr/')) {
    e.respondWith(caches.open(OCR).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) c.put(req, res.clone());
      return res;
    }));
    return;
  }
  // App-Seite: erst Netz (für Updates), sonst Cache
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(SHELL).then(c => c.put('index.html', copy)); return res; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
