'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e15ba0bdc61228287fb31b68c52e1958",
".git/config": "1e3521662be3c8fa43084edf7efd3bb3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b792da9f4a15d1863b52b3e7c228e0aa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "30a2088457496021fca39ca3731754f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89c84b156af399d5ff287c10ede16660",
".git/logs/refs/heads/main": "89c84b156af399d5ff287c10ede16660",
".git/logs/refs/remotes/origin/HEAD": "b12e2085b89470e8ca92398618d3d4ec",
".git/logs/refs/remotes/origin/main": "ffd35b62505b3385c96ed9053315a2a7",
".git/objects/02/489d7d096e7821dce56c999d3d25cbdfdb7159": "bdf19337273aa5cb24cb88e02c364e52",
".git/objects/02/675bbafe6f27b05bf33be987cf1ad1047436a3": "0c928f6bad5288dc9a0d889ec526121b",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0d/5fbd87017afafc797bc6c1730e68ff0e64ae03": "37a5d537b2afd478320f0798d0cd1070",
".git/objects/0e/28c4ce8ae5ed3244cbc9725f12bed82c24f603": "8c072333ac8955ae33e4f9dffbd0a1b8",
".git/objects/0e/d541eff9cc1d1f4516eedbcdbaecdfeef37326": "a6ce7e1142d158b71dc5ac801d665616",
".git/objects/12/34059012bbf030e69448b6e076b231d6ca5b69": "4ca69232cc910b4d4c82fb265b22d720",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/a88edfd1bfe3cbf92e41abb1eeaf0ccad2cd06": "12803fa865db7fd3873e879b181d22b9",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/67655f95c2b26acb3eaaee0603e931994ac703": "55383086ca25e93c4038092d9eeefab0",
".git/objects/30/61b84756d5dbd79fd0bc784d82603c0ca6e846": "70762353fe333be24186405b30cb8ab9",
".git/objects/3a/c06c98dd570e3d456be490052a8f9688795b34": "4aa52153208cfa78a9a53e863cd2d2cd",
".git/objects/3e/19100f5a4e757e5a990b35e551f9c8b2cd3a6b": "cd05661c9c96a0d69714705a723b23f4",
".git/objects/40/01710e5b37b41e5b8bdda1546f5f5f9cb96eb4": "680dc3181c8a8a425a6091182a157023",
".git/objects/4f/b05440a334b8f55f8a2be2c25f2d4398d5b2f8": "c9a72f71ad6b84bd05f22f2819b64f38",
".git/objects/53/f3e23cd41dfec53d27c82a40b7871efcbd9589": "566086fd21262d35d8dcbcc81996a5c2",
".git/objects/5a/3cade558cba2c778e392875dbd85e89f074242": "5d05ec5f6f9ae44b54ad3a54a0f66ee1",
".git/objects/5a/b18071996e78086d88fc910acf64cf646852f4": "fe2246268be01d1ce465cdf12db97ef1",
".git/objects/5c/e4e71c745393fc167ff4714a3a843e12bc14c2": "72989259ef4fba65e5c15ac787c1c20b",
".git/objects/5d/05ca6de07b2d8ba78978da42a5cedc22ea0232": "1d058663c8b814bbf0e0b8811ae05e89",
".git/objects/61/eeb8651e7be2592a5041bd16d1507fd470dcda": "2e879ef9440e0213b229d11b0d434ce5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/c0a790fdead1987158c5b07abc9c493cf132d1": "eec0c716236a2b640e35da1ed84d0f1b",
".git/objects/6b/e468ce5e845eb7bed4a84530c51be1a5b65a52": "dfc0dc9825cb44f3c4e78534b691fb12",
".git/objects/6d/2240a2905aa1f9f35262f3601795c46139dd7d": "aef1906cdb7e4854f1a0bc51d6e248d0",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/585c062236813f242d6c7bec248ba525a4a710": "6ba19bac4bc252b3716995590c7e2023",
".git/objects/79/6529c65aece2a9e725ddc934fc6c9c611d066c": "89b135c164b9fa7804ed68625773db83",
".git/objects/7b/fb10cab99a89abc6321c3ba5c63e5472a9b8cc": "bf78a898171d79b2d9e0e5471dbb8bb6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a135cd28ab3a2f1b4fc44b21f7ee9d605d4fb3": "dbd24f1ef02b4d581e59d0db5bffcddd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/b76c6698354fa29cabc73bce595a39737926f8": "383734d1e7ef678ebd29b9c153702ff5",
".git/objects/91/9de1e2c088847f916bbc1cb8377f9b3823b83d": "296ee6d02762db49e7f06bf38e3780e3",
".git/objects/93/017a9512d2cac5f61038c0e77104f88d68dfb9": "b00154db1e8196f022b875393a62285c",
".git/objects/93/b1d453d3e1d668426c06e01bb21a19bd55f302": "e03b2dca899f0f948167dc4c2a78ec4b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/b660a30ed03b9a8cef8a550279a80f096aef2b": "cadd828cfc46db253dfa5335f25dec89",
".git/objects/9e/62727b484e4cd41f0f81dbbf41d43fce5a866a": "d79f9783cb852fd322d8337b626b1bed",
".git/objects/a1/ddb34d4c0bb52b428f588e2212d1d4bd68d462": "e30ff78dc8aeaee0d0e1065338eb2039",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/5fdf3d78e87ba2c55381383e26b89df1845680": "bf685a541cc68720c7b4ba5856f682e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/cc3ad2f0d0af003c5d50209cbdd0f126863f88": "d864b0a1574674b61a48acc65fd833cb",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d2/0fbabf83a34efa42defeabbaf24e0790f1f098": "c5177682e29f99e6758640a658a9c770",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/88756b51b65de8b306458c965d9b061fd9bfe3": "ff13c6f0e6042d622644ec988d3d3a6f",
".git/objects/e8/df8f7e8ee801878d61bcbe7d8f3003e342584d": "7967d8938ed29004bf5b8e8bb57cd89e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/64e1586a441d0f4758e712eda9ccbdf5ea3261": "75fff14df46a5a4c5d0f64c94bb83420",
".git/objects/ed/291255acfdb15ee1643a5f6303c88b9e9a28e3": "16d8b9b3be0e7ce7cf6751ad1f076eb0",
".git/objects/ee/ef530f83a069cf964a6abd69fb711de959fc24": "b6c453ea4f98cba3e70a558fad64e467",
".git/objects/ef/b33f5b46bd1e0a07ccb411023584af378554e6": "d6a520245342b7e0e4a964973c3346f4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c3a39b0f49f95f418fa6ab640fc4c5db743509": "b64d0a1baba253cae66499ef6bbec698",
".git/objects/f6/83fa463e5a26f488cb2a7d19c19543c39275ac": "49c2204357ea47ec9a0f19f44b4978d2",
".git/objects/f6/bbf8496346973df211a4eb6bab4c89462babb0": "ff61a5181d0e9de1cd5c31e78b69fe4e",
".git/ORIG_HEAD": "e6682ce79527d4864da437de12ea28f7",
".git/refs/heads/main": "e6682ce79527d4864da437de12ea28f7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e6682ce79527d4864da437de12ea28f7",
"assets/AssetManifest.bin": "0163e85636a5587c1adb9f264e9a76ee",
"assets/AssetManifest.bin.json": "dbca388fd2df959ddd9204a9ce0f5233",
"assets/AssetManifest.json": "27a4f8a03866d5219caa8d7eded3c9ec",
"assets/assets/me.jpg": "834fad62118e389c88cb87ba9cd07d81",
"assets/assets/praveenaresume.pdf": "fd61340a85cb46ac369bf96d6588794c",
"assets/assets/resume.pdf": "b8dc9cc947f5d6f63479c0745fc4a620",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f013818655d4a44608cb55032f0bce55",
"assets/NOTICES": "7a175f0b809bfd0a91fe1e84eee47c75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2dea6a14df78a2d3afe473b36e523e0a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5d424a84ac80760175a3638412945dd1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3d812b956a02335df8a469797cc0e9e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "477109d37e6df187145100dd00830fae",
"/": "477109d37e6df187145100dd00830fae",
"main.dart.js": "90c2b11e3cf21c21c00c8308ac4518e4",
"manifest.json": "76f1e95de6dd5ac4a93d4faa15f3ff7e",
"version.json": "472c6d89785d1c028328d262b6659af3"};
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
