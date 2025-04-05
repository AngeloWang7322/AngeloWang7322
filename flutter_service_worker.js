'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e07910a06a086c83ba41827aa00b26ed",
".git/config": "36b1293d111c3b14d218196cbe579cfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "afa8c3fa7a07511e7f5906f6ba796582",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cad5c655e5acc6eebac0b6ef84d6659f",
".git/logs/refs/heads/gh-pages": "c56fa27d1c80f63e6ad0a52faeb77f28",
".git/logs/refs/heads/master": "5e6d76b9f53596de6d409fdf9a852de7",
".git/logs/refs/remotes/origin/gh-pages": "1de4ba0a6c681fda06a3e198969b1d92",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/3f8cf1c744379eaeea27016b9896c557be7187": "0bc7f5cc8724d5c2b12baa45503d5105",
".git/objects/09/01a0120051dac6d34171cccd2d8c8f6ea5f9bc": "956811e536c47bf39030c0601d6abe0c",
".git/objects/0a/8a27502e0448ad3130922980178a5d8594ec79": "b4ee83936c375b03e3f0084585702732",
".git/objects/0e/ea7c5b33c9c31c4de913c0bba59d2c36a52ca7": "7fc085078d7cdde50c4872313d8e2ce1",
".git/objects/1a/0e1d137747c2a0c10d0b35e1a7a3db38cb35aa": "3d37174a8ad7ebeaae7fb21fea2315ce",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/34/f378dd7c9b10a96ddf3e30386db10fe372e0fb": "f4c10510905cf02a7b731f77422b74a2",
".git/objects/38/cbfcd57779f40874e9919ab4acc5ac6e141807": "98653c0a66f3f0424d72a4bbfb56f1fc",
".git/objects/3a/3172769ecbafcebb0d70dc44717387a00b40fe": "a5ed8dc65b3f6b4ac8aa7d1d651bd8ee",
".git/objects/41/921d5514a8de27caf98e7e62a8cf32677826ac": "fe20cf759842a2c9c4ac0c53bacbbc1b",
".git/objects/44/aac3561a5ccd30419932f60fb080df087e5207": "1a3bd936a806d979ebcd17e7664665cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f5889eb32b0f698f2041a2e74ec7d33e55abea": "80b34e2d7ffd335cfa84e019e02dbca7",
".git/objects/4e/5ee44d6054faecd4b10c537f30627d949cb22c": "9007c2144f03e67113c801990755e888",
".git/objects/53/d160d27bf5cd6a35e766a4347703fd24541bb9": "736dced72b78126c8fbc238e7a7a82c0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/b0d8eb4d7b25202bdaddee29786a7496fd50b3": "c63598af10d7652276f78975aea1d2de",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6c/f78b98f868981e139ca2b3f295f13d7d26937e": "9cc9bd1a9e8e59c50967e21980526b02",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7a/91cd8873401f91649f0430f988464edfb53d9f": "40ee048fe92a5867c6280efeb64a94d4",
".git/objects/7e/cfc53a3acdc93b4a0275038ffc98774f6f284e": "6690d2fa3eaacdd78cbc9eacf22caab6",
".git/objects/84/c86158999eb2a68f35bf08ea24c9034d843058": "41ab865c0584d4a0e392d90c209b9563",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/00480997be883322b2258594d7cf2cebe31df9": "f7d40419326c38cefd9e60bc47dcbf93",
".git/objects/8a/84f9929621e382a6468abb18bb94c09a362464": "d3d2fe5578044f3c744794afce0afebc",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/f0c292a119c4c164a0b9b4f211394a3b9f321b": "b46f2decfef26d79c656d4c9b896602e",
".git/objects/a2/33ed62014fb8d39de65b465614710d53dc6b17": "fb98695deb2e6ec14f2464a861d5f1b7",
".git/objects/a7/d74569fd36809293d74eb8067d32f256e130b5": "ce3c3e99b5846b04051410d0f1969b39",
".git/objects/ad/c37635fcb84dee59b48cd947f4a1b47ffac5a2": "9b689e0c7eb88351db0434ec77210801",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/0a937997813f4d24c64d4c15698d88cc580b0d": "f1ae74cc3f93fe0eb0d82501c4a3b71d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/5eea842de31f82a061301c55de6ba6616bc218": "7418e87e9431df39a5c68b753d2f4012",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/41b6e14e138fcf386d9b2af267d936f2790adb": "c007f0683946b5b0b38e635d3851bb3b",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/74a3c798663d01b7b7fa6a469f869a2f7b8fe9": "88a9576601169102b043c3ceaac4f62b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/89ded94da6b2216dfb55d555b0c099d9bef429": "d47a083428bc4970711dbe20a637012b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/45ed7d47fe32570c9501b9930fd2bae337cfcf": "ad9faf9592994812cc6561c8d607f19a",
".git/objects/fe/bc17b7f0e887f4fe66956168ecab54f93ed691": "a245e68780cd63062b582a6b20994ae1",
".git/refs/heads/gh-pages": "78ebfc8e9373004a19b519ab9735839f",
".git/refs/heads/master": "78ebfc8e9373004a19b519ab9735839f",
".git/refs/remotes/origin/gh-pages": "78ebfc8e9373004a19b519ab9735839f",
"assets/AssetManifest.bin": "ed500a20f67372dc53bf6dcfaf7107a3",
"assets/AssetManifest.bin.json": "b76f6d001adfbf61a37c60ac11a27380",
"assets/AssetManifest.json": "0426ed7725cb39dc8215aba9aef6a016",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "31368718080ab192e827a3795a7e1f64",
"assets/images/AbrusteFeierFlyer.png": "994e6f0461a4f8f789cdba8a596d522b",
"assets/images/aErenFight1.png": "6c817cbbf709737d750d6547030674db",
"assets/images/aErenFight2.png": "91b45f73d9a0a515172cf73f90d6ce0d",
"assets/images/aErenTitan1.png": "e202dbbeb83a8e57ee33e7cd0a6142c7",
"assets/images/aErenTitan2.png": "192f3cac6714bc21a454820e2646ff67",
"assets/images/aScreenshotLedgIt.png": "4926fce056d4f4b1f4ef5d5ce4e85363",
"assets/images/aScreenshotLedgIt1.png": "9b9c84ff708df4aae10a702dc1471147",
"assets/images/aSmurfCat1.png": "298175379b4b1f8e1603863365d859f1",
"assets/images/aSmurfCat2.png": "d05e05e80e061951803ee1999dc6d692",
"assets/images/broschure.png": "fbc96f28f189f697ceedb464812b6959",
"assets/images/certificate.png": "6bf73fa97714080beb54d3bd9397ce4f",
"assets/images/foto.jpg": "e702c168f18b49ce35ee58356fbfafb4",
"assets/NOTICES": "36954844d1016eb0b82a274130a3d582",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a3e8f68f5eeec7aefba9bfedb0594e5e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c91bf9d3c454b38d0d29aed26bca4455",
"icons/flavicon-192.png": "4fcb7124c28ec349df90a88228f8bc4f",
"icons/flavicon-512.png": "4748cb44b0c77fde88d8f64ac7bbfc31",
"index.html": "73f36bd61deb8c1409ad8d94559ded96",
"/": "73f36bd61deb8c1409ad8d94559ded96",
"main.dart.js": "c1a024348a819732fffa1c06cbd3abe5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
