// Cache static assets
var staticCacheName = 'pet-caring-game-static-v1';
var assetsToCache = ['/', '/index.html', '/style.css', '/manifest.webmanifest', '/script.js', '/README.md'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(assetsToCache);
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});