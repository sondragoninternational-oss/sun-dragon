const cacheName = "sun-dragon-v2";

const assetsToCache = [
  "/sun-dragon/",
  "/sun-dragon/index.html",
  "/sun-dragon/pages/page-01/index.html",
  "/sun-dragon/assets/backgrounds/bg1.jpg",
  "/sun-dragon/assets/images/sample.jpg",
  "/sun-dragon/assets/videos/sample.mp4",
  "/sun-dragon/assets/qr/sample.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
