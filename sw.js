importScripts("/pwa-playprecache-manifest.6977128ca896d01edd813248c63480d3.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

