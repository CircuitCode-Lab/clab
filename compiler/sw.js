// Compiler telah berpindah ke https://circuitcode-lab.github.io/compiler/
// Service worker ini membuang cache lama dan menyahdaftar dirinya.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('clab-compiler')) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({type: 'window'})) c.navigate(c.url);
  })());
});
