const staticCacheName = 'cache-data-v1';
const filesToCache = ['/manifest.json', '/app/script.js','/app/index.css'];

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(resp => {
      if(resp) {
        console.log(`[FROM CACHE]: ${event.request.url}`);
        return resp;
      }

      console.log(`[Network Request] ${event.request.url}`);
      return fetch(event.request).then(resp =>
        caches.open(staticCacheName)
        .then(cache => {
          cache.put(event.request.url, resp.clone());
          return resp;
        })
      )
        .catch(err => {
          console.log(err)
        })
    })
  );
});

self.addEventListener('install', (event) => {
  console.log('installing');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => cache.addAll(filesToCache))
  );
});
