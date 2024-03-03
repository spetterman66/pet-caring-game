// Cache static assets
const staticCacheName = 'pet-caring-game-static-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.webmanifest',
    '/script.js',
    '/README.md'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => cache.addAll(assetsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});