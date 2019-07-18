const urlsToCache = ['/'];

self.addEventListener('install', () => {
  console.log('installing');
  event.waitUntil(
    caches.open().then(cache => cache.addAll(urlsToCache))
  );
});
