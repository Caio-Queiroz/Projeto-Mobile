var cacheName = 'FixLabv1.0';

self.addEventListener('install', event => {

    self.skipWaiting();
  
    event.waitUntil(
      caches.open(cacheName)
        .then(cache => cache.addAll([
  
          './index.html',
  
          './images/class.png'
        ]))
    );
  });

  self.addEventListener('message', function (event) {
    
    if (event.data.action === 'skipWaiting') {
     
            self.skipWaiting();
          }
  });
  

  self.addEventListener('fetch', function (event) {
    
    event.respondWith(async function () {
      
      try {
        return await fetch(event.request);
      } 
      catch (err) {
        return caches.match(event.request);
      }
    }());
  });