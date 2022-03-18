var CACHE_NAME = 'covid19-pwa'
var urlsToCache =[
  '/'
];


/* Instalar um serviço Worker */
self.addEventListener('install',event =>{

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cacje){
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


/* Cache e solicitação de retorno */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

/* Atualizando um serviço Worker */

self.addEventListener('activate', event =>{
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cachesName => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1){
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
         
