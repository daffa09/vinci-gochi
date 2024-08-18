var CACHE_NAME = "pwa-cache-v1";
var urlsToCache = [
  "/",
  "/fallback.json",

  "/src/index.html",
  "/src/about.html",

  // html
  "/src/characters/Pikachu/game.html",
  "/src/characters/Pikachu/eating.html",
  "/src/characters/Pikachu/medicine.html",
  "/src/characters/Pikachu/sleeping.html",
  "/src/characters/Pikachu/play.html",
  "/src/characters/Eevee/game.html",
  "/src/characters/Eevee/eating.html",
  "/src/characters/Eevee/medicine.html",
  "/src/characters/Eevee/sleeping.html",
  "/src/characters/Eevee/play.html",
  "/src/characters/Snivy/game.html",
  "/src/characters/Snivy/eating.html",
  "/src/characters/Snivy/medicine.html",
  "/src/characters/Snivy/sleeping.html",
  "/src/characters/Snivy/play.html",
  "/src/characters/Squirtle/game.html",
  "/src/characters/Squirtle/eating.html",
  "/src/characters/Squirtle/medicine.html",
  "/src/characters/Squirtle/sleeping.html",
  "/src/characters/Squirtle/play.html",

  // js
  "/src/js/main.js",
  "/src/js/script.js",
  "/src/js/clock.js",
  "/src/js/character1/eating.js",
  "/src/js/character1/game.js",
  "/src/js/character1/medicine.js",
  "/src/js/character1/sleep.js",
  "/src/js/character2/eating.js",
  "/src/js/character2/game.js",
  "/src/js/character2/medicine.js",
  "/src/js/character2/sleep.js",
  "/src/js/character3/eating.js",
  "/src/js/character3/game.js",
  "/src/js/character3/medicine.js",
  "/src/js/character3/sleep.js",
  "/src/js/character4/eating.js",
  "/src/js/character4/game.js",
  "/src/js/character4/medicine.js",
  "/src/js/character4/sleep.js",

  // img
  "/src/img/paw.ico",
  "/src/img/paw.png",
  "/src/img/rumput.png",
  "/src/img/star.png",
  // img about
  "/src/img/about/daffa.png",
  "/src/img/about/fathan.png",
  "/src/img/about/firja.png",
  "/src/img/about/valentino.png",
  // img food
  "/src/img/food_icon/cabbage.png",
  "/src/img/food_icon/carrot.png",
  "/src/img/food_icon/pizza.png",
  "/src/img/food_icon/tomato.png",
  // img ikon
  "/src/img/ikon/audio.png",
  "/src/img/ikon/bed.png",
  "/src/img/ikon/clock.png",
  "/src/img/ikon/eat.png",
  "/src/img/ikon/eat1.png",
  "/src/img/ikon/med.png",
  "/src/img/ikon/medi.png",
  "/src/img/ikon/pill.png",
  "/src/img/ikon/ply.png",
  "/src/img/ikon/sleep.png",
  // img main_bg
  "/src/img/main_bg/afternoon.jpg",
  "/src/img/main_bg/bedroom.jpg",
  "/src/img/main_bg/hospital.jpg",
  "/src/img/main_bg/morning.jpg",
  "/src/img/main_bg/night.jpg",
  "/src/img/main_bg/restaurant.jpg",
  //img character
  "/src/img/character1/*.png",
  "/src/img/character2/*.png",
  "/src/img/character3/*.png",
  "/src/img/character4/*.png",

  // resources
  "/src/resources/*.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName != CACHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// fetch
self.addEventListener("fetch", (event) => {
  var request = event.request;
  var url = new URL(request.url);

  // pisahkan request API dan Internal
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return response || fetch(request);
      })
    );
  } else {
    event.respondWith(
      caches.open("pwa-cache-v1").then(function (cache) {
        return fetch(request)
          .then(function (liveResponse) {
            cache.put(request, liveResponse.clone());
            return liveResponse;
          })
          .catch(function () {
            return caches.match(request).then(function (response) {
              if (response) return response;
              return caches.match("/fallback.json");
            });
          });
      })
    );
  }
});
