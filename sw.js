const CACHE_NAME = 'app-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Network-first approach (live data dashboards ke liye best)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});