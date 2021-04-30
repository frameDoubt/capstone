const CACHE_NAME = 'rando-selecto-cache-v1';
const urlsToCache = [
  '/',
  'styles.css',
  'app.js',
  'index.html',
  '/src',
  'manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if(response) {
          return response;
        }
        return fetch(event.request);
      })
  )
});