importScripts("/pwa-play/precache-manifest.346e27ffe8d1a43193086e16eca040e6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

