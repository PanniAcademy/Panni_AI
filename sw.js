// Request permission to receive notifications
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get the registration token
    return messaging.getToken();
  })
  .then((token) => {
    console.log('FCM Token:', token);
    // TODO: Send the token to your server to store it and send push notifications later.
  })
  .catch((err) => {
    console.error('Unable to get permission to notify.', err);
  });

const CACHE_NAME = "panni-ai-cache-v1";
const urlsToCache = [
    "./",
    "./index.html",
    "./manifest.json",
    "./Images/android-chrome-192x192.png",
    "./Images/android-chrome-512x512.png"

];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
