/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0e8a3ac4fb6a15709eeee7aaaddb9c80"
  },
  {
    "url": "assets/css/1.styles.0d67415d.css",
    "revision": "58457c1d584549f78cbbfa094a2acfe8"
  },
  {
    "url": "assets/css/2.styles.974e38af.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/3.styles.c393900d.css",
    "revision": "c133a8e2b12a9d346b42b7a97fb77a22"
  },
  {
    "url": "assets/css/4.styles.61d937fa.css",
    "revision": "6f7bca7bbf737e36a1b2c63ba7f231ee"
  },
  {
    "url": "assets/css/5.styles.9425d363.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.f9387aa6.css",
    "revision": "f2effa2ba1a43c40c3679a6c4ea544bd"
  },
  {
    "url": "assets/img/clearIcon.211959db.png",
    "revision": "211959dbdd157231f9938a83e1f068bf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0d67415d.js",
    "revision": "0b52449d2ff348a978c4af6ed704a65a"
  },
  {
    "url": "assets/js/2.974e38af.js",
    "revision": "3eaf48da6bd721d7df46a62102437190"
  },
  {
    "url": "assets/js/3.c393900d.js",
    "revision": "254a78a0c514adefb92ea7a47b113b8d"
  },
  {
    "url": "assets/js/4.61d937fa.js",
    "revision": "ea4692439f2880248813ca5979196490"
  },
  {
    "url": "assets/js/5.9425d363.js",
    "revision": "89695f9ed6b568ef2e9fd7824de334bd"
  },
  {
    "url": "assets/js/6.65c5f335.js",
    "revision": "5f57dacd54af1141f1f35b4607b4dd4e"
  },
  {
    "url": "assets/js/7.22b07b06.js",
    "revision": "1c27e9a2f5252c9e75fa797a1e3f83c7"
  },
  {
    "url": "assets/js/8.c9341b79.js",
    "revision": "86bf596cbde5c30024a4f9d2de86d51a"
  },
  {
    "url": "assets/js/9.99cf73ac.js",
    "revision": "0505777430f0be9ceeb305f0a52b9bde"
  },
  {
    "url": "assets/js/app.f9387aa6.js",
    "revision": "348c11a780a73b00855215be7c2bfd2f"
  },
  {
    "url": "docs/getting-started/installation.html",
    "revision": "cf296afd762b04694f6acf207824c6d0"
  },
  {
    "url": "docs/index.html",
    "revision": "40f6b5613b84d58d6256367e842980a2"
  },
  {
    "url": "docs/layouts/absolute-layout.html",
    "revision": "fc8ac4d3023cd191f3ef23b6a9c8d34c"
  },
  {
    "url": "images/logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "images/nuweb.png",
    "revision": "e08542212a367c50a9913e9b240002ef"
  },
  {
    "url": "index.html",
    "revision": "35f2e9644d58d360a7716a4c415d89f3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
