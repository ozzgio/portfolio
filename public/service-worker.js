// Empty service worker to prevent 404 errors
// This is a minimal service worker that does nothing
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});
