'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e07910a06a086c83ba41827aa00b26ed",
".git/config": "36b1293d111c3b14d218196cbe579cfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "512a64f1a80884127d5fd5e89f14d3db",
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
".git/index": "bc3eb4b58f1648fc8fd0c8f0d0c25488",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84533e5d4d6f61c3e63ae185f0bee194",
".git/logs/refs/heads/gh-pages": "ffd0f08cd6f117f5dd4fa6a0f8d92e88",
".git/logs/refs/heads/main": "1589c5fa084bea228e67c24b065ad4e9",
".git/logs/refs/remotes/origin/gh-pages": "61d8bf977271585bdb6ac5a5a41aad5c",
".git/logs/refs/remotes/origin/main": "46bb812b5640ca85fcf9d714313f69eb",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/3f8cf1c744379eaeea27016b9896c557be7187": "0bc7f5cc8724d5c2b12baa45503d5105",
".git/objects/08/fc8f20ca6d3b34b0316a8ed11558ab29b42c4f": "eefdcc71ff097c66e496f46201807619",
".git/objects/09/01a0120051dac6d34171cccd2d8c8f6ea5f9bc": "956811e536c47bf39030c0601d6abe0c",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0d/2bc1c0cd1043776cec1507c0ed557ae5fdb6a6": "6bce5c0818854e2e8b276029fb333735",
".git/objects/10/7499e079f6790394821c8dea6ada21d9adec7b": "0bfde735c67a0d1e8b7bb9fbcaa454ee",
".git/objects/1b/22f858f8246a0613d1e0de7b8740f39fe0f867": "ab0ca41fe15b1048eb8b9702a81ef058",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/ad7a0aaaddc5ad9732c52faff77d1d911ae96f": "210c4fac18f8d3958497241f46171cbb",
".git/objects/2d/df244a34cc31541f581221841beed0ea8426b4": "49a01fcc3edf683f4bacaefbb490b971",
".git/objects/34/f378dd7c9b10a96ddf3e30386db10fe372e0fb": "f4c10510905cf02a7b731f77422b74a2",
".git/objects/36/57b5cb9735c6388e556b8c19375d7900acc7f5": "8bf8b4cf0907043c8743f0b81a17fa60",
".git/objects/38/33f8fa5b674d8e062a44ca2d61c4bbf02fa5bd": "2790feed8c23a61e45eb75d553a9d57d",
".git/objects/3d/2a77cfc07b7ee22ccb1ab0d8fee20b73bac820": "55b32ac2d778cf54a55b30ad473a5ff8",
".git/objects/3d/a6fe93dc0f3ce462788da647964ca50339988d": "ae4c3d732849c991d47eaecae8acc352",
".git/objects/44/aac3561a5ccd30419932f60fb080df087e5207": "1a3bd936a806d979ebcd17e7664665cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f5864558717532c310101850fc1eaf3dea65c4": "681c5dc80508331b40e1d14390e98c19",
".git/objects/4e/5ee44d6054faecd4b10c537f30627d949cb22c": "9007c2144f03e67113c801990755e888",
".git/objects/51/1fb5f03e8a6d91c920cb636fbcfd82b82a636d": "b6b18db17f1af9b3b5c93f26a086cba4",
".git/objects/52/84606ea2a39451674987363ba70622a2f7c5ee": "f39fef9056408035f3de63e22af036f5",
".git/objects/53/d160d27bf5cd6a35e766a4347703fd24541bb9": "736dced72b78126c8fbc238e7a7a82c0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/1d789e2617452e2f1724abf5dee00d85d52de9": "651c8da6bf41f053e03176a8aeea4ca5",
".git/objects/5d/a327c4aec19489068ab6a38f7130948b1cc729": "a1c4153cee1c54178ec9047720dae956",
".git/objects/5d/fb1695a3fb3790bcd29e263445fb6772fd0b17": "2b165b7d51d83daecb65ebdac6f3b280",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/439c45ec9ac422f770844f32793332bcb138bf": "3a2725946e3f8a0211a36452fc3f0e45",
".git/objects/67/165e1d7d0af946f4a25b7b49d75763125b6e32": "672485f2a012461a5098f17ca86b8d6d",
".git/objects/6c/f78b98f868981e139ca2b3f295f13d7d26937e": "9cc9bd1a9e8e59c50967e21980526b02",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/7cb987ce07942617eedfd2f312520840e7222f": "2d15da0633750726b3fdd9ce63c6c9ba",
".git/objects/72/b6b7e8b892b9a478429a0f25e6ccfaa726bdc0": "5f510e0a044c80d154cc4585cb225f1d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/92d11d0874bcb9d0e41c20deeb9f3f06e153da": "000d28c0a988c1ebc3708f27d7adceba",
".git/objects/7e/3240b622bdc8e484bf794bdba1d3c2b1e5b265": "bfbe3ec088654f39d6e79952ce6c6426",
".git/objects/7e/cfc53a3acdc93b4a0275038ffc98774f6f284e": "6690d2fa3eaacdd78cbc9eacf22caab6",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/84/c86158999eb2a68f35bf08ea24c9034d843058": "41ab865c0584d4a0e392d90c209b9563",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/d8a79e5d60bdb4b800fa7422dd28e3875a2ef0": "ae3cb36800da2fadc7be3ed6285a3cb8",
".git/objects/95/739cfe937d8e4a12c245e9db2742a5f4c5c91a": "ba95efd13abeed74cc8fcbf3da523dfb",
".git/objects/96/e3b0f7fa56de215202d3d7502484357aeb7c4e": "46923f1db4e1ae042b60d3fece12b138",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/0af244af5e76c26a0d24f0eabc661acda8b344": "fa51497883219f174027219974512469",
".git/objects/a7/d74569fd36809293d74eb8067d32f256e130b5": "ce3c3e99b5846b04051410d0f1969b39",
".git/objects/ad/05e1451e8ac0215146bbf6b7a3be58836f0873": "a7e9197947f4ab182cfe9edaded1c564",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/c5b172ac517906dfb1a1b75a6b1bf3bb438264": "576164ba2d9bcd86ccddbcbfbbd77682",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/01001b2cb280a53bedfbe7daea7f72b975f206": "370bc75b62f208060740e9b1966149be",
".git/objects/c1/1fadad4610801c48aec485b9f9ea9113422d61": "0339d8f1107ed5c470a6f02fa42e4063",
".git/objects/c1/fd38d6611a299788730a6a7815a3950e8ec75b": "1a63c02458f39dae0cb7b80c346f6927",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/5eea842de31f82a061301c55de6ba6616bc218": "7418e87e9431df39a5c68b753d2f4012",
".git/objects/c8/bf6a16b0f90e6e71d0f438ab4ff695fe41ec01": "2b11cba78a5e5231af8c104cea93a67f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/41b6e14e138fcf386d9b2af267d936f2790adb": "c007f0683946b5b0b38e635d3851bb3b",
".git/objects/e2/f434a7ed22806990e6b0dc271921e1601b7177": "e84ba89a3338efbae2bea358ae467e73",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/4c5c9f13b0cf486b27a59634b83e854c7d6340": "0b0af0d970ed4fdbef55b0e86c3d113d",
".git/objects/ed/fffb6351a567f6e15fbc5d3bb67dc8a62fcc54": "faa166a458ab175ebd428320d904d0b3",
".git/objects/ee/74a3c798663d01b7b7fa6a469f869a2f7b8fe9": "88a9576601169102b043c3ceaac4f62b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/25acc3c385ab116175180ae32a436c1ea9b9ec": "b8caf8e3913a0c19f6c1652d4a4e03af",
".git/objects/fb/89ded94da6b2216dfb55d555b0c099d9bef429": "d47a083428bc4970711dbe20a637012b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/bc17b7f0e887f4fe66956168ecab54f93ed691": "a245e68780cd63062b582a6b20994ae1",
".git/objects/pack/pack-2227b11bf6d0de05d138bbf87bce01bebbd4cffa.idx": "e09de842c548215f0028597a5acef71c",
".git/objects/pack/pack-2227b11bf6d0de05d138bbf87bce01bebbd4cffa.pack": "c1110dbc5cf07a96ed7ef8033ca44787",
".git/objects/pack/pack-2227b11bf6d0de05d138bbf87bce01bebbd4cffa.rev": "106c719151380c599f43faed6f90a0c7",
".git/ORIG_HEAD": "798a38dd91da32c6bd5300a2ced2c72d",
".git/refs/heads/gh-pages": "2925ef9993ea4143161a0bb9647ffe57",
".git/refs/heads/main": "447ff2a5ea63c733dfde2d520150cd8e",
".git/refs/remotes/origin/gh-pages": "2925ef9993ea4143161a0bb9647ffe57",
".git/refs/remotes/origin/main": "447ff2a5ea63c733dfde2d520150cd8e",
"assets/AssetManifest.bin": "573db5867963079020174c63d8f15821",
"assets/AssetManifest.bin.json": "d02597c02333b809e77e06b22d671bb5",
"assets/AssetManifest.json": "52b85c100d3076694e9e1882c9cc0a56",
"assets/assets/AbrusteFeierFlyer.png": "994e6f0461a4f8f789cdba8a596d522b",
"assets/assets/aErenFight1.png": "6c817cbbf709737d750d6547030674db",
"assets/assets/aErenFight2.png": "91b45f73d9a0a515172cf73f90d6ce0d",
"assets/assets/aErenTitan1.png": "e202dbbeb83a8e57ee33e7cd0a6142c7",
"assets/assets/aErenTitan2.png": "192f3cac6714bc21a454820e2646ff67",
"assets/assets/aScreenshotLedgIt.png": "4926fce056d4f4b1f4ef5d5ce4e85363",
"assets/assets/aScreenshotLedgIt1.png": "9b9c84ff708df4aae10a702dc1471147",
"assets/assets/asmurfcat1.png": "298175379b4b1f8e1603863365d859f1",
"assets/assets/asmurfcat2.png": "d05e05e80e061951803ee1999dc6d692",
"assets/assets/broschure.png": "fbc96f28f189f697ceedb464812b6959",
"assets/assets/certificate.png": "6bf73fa97714080beb54d3bd9397ce4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "31368718080ab192e827a3795a7e1f64",
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
"flutter_bootstrap.js": "e400edfcd2de93f3e8fa92fb6833ff4a",
"icons/flavicon-192.png": "4fcb7124c28ec349df90a88228f8bc4f",
"icons/flavicon-512.png": "4748cb44b0c77fde88d8f64ac7bbfc31",
"index.html": "73f36bd61deb8c1409ad8d94559ded96",
"/": "73f36bd61deb8c1409ad8d94559ded96",
"main.dart.js": "4db68395cc3d8fb905cebde31cdc411d",
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
