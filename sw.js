// O portal antigo foi desativado. Este service worker só se remove
// dos navegadores que tinham o portal instalado como aplicativo.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    self.registration.unregister()
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (clientes) { clientes.forEach(function (c) { c.navigate(c.url); }); })
  );
});
