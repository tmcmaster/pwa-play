importScripts("/pwa-play/precache-manifest.4815aa3f58c665f4209fcb025f3eecfb.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

