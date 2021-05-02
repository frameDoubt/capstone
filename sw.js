const CACHE_NAME = 'rando-selecto-cache-v3';
const urlsToCache = [
  '/',
  './manifest.json',
  './styles.css',
  './app.js',
  './index.html',
  './ui-library/vue.global.prod.js',
  // './ui-library/vue.global.js',
  './src'
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