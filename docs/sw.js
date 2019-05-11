importScripts("precache-manifest.5afac6ab96dd71e2b49bfe50eacb39c4.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

