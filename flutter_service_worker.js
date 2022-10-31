'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0630860720dbbcdebedecbbe831e2c4d",
"index.html": "9ce9db088f61281dead6394612519ab3",
"/": "9ce9db088f61281dead6394612519ab3",
"main.dart.js": "6e3ded83fa0d8c6978e19da62dda68fe",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6c629b8320a9b683d191ff087617ba4",
".git/config": "0a7f8abffd942b9e1a8d3c361da3e94a",
".git/objects/61/1296b117a309a59e7e816b11da544b533ea5f8": "5c319917e3eb0768feea684ecc7bced9",
".git/objects/0d/2c5e0091487bbf32b18a7187f12f210741bac0": "973078cdfe60877f89979724fb135c60",
".git/objects/0d/0ec920010bbb7104522d978e95315428a8fdc6": "854a667cb6a4abdbb8aefefd7d018621",
".git/objects/6f/2550e062dcd3bed5fcbb60a84979b2d6554fda": "a4743a6a573db68a8a8314a00bc4fd8f",
".git/objects/69/33f9e3617fa5f1ab70a8b8e21bd70fdeddf9d6": "e6d9c07bc5a5f5cfc8af4dc7de5ad78e",
".git/objects/56/900c6096236c26a45aa922239675065a115fb6": "86fa70333d736b86ce1056684a89344d",
".git/objects/9d/d9ee2fde180955f53da2e2565aa16c9f624c40": "3624fb4349e8848b518cb906c0a8f183",
".git/objects/9c/e26aab7b1dbd09be743405cfdc25386ad6518e": "e2076c7651c46d169dd62bf8242cede4",
".git/objects/9c/a8546ede49b5f0c0dd5d511d516002816e0ce1": "c50f965d43be3085d199974ca00ca7f2",
".git/objects/a3/15fb912d32079990babe93d07f47c53e9299c4": "31f10d237f54bc1538a870c3c2b5b9ad",
".git/objects/b5/cc52028c073b3be93c5104f5d8e001a733bcfe": "014152210913118ceffd802b797e0bfb",
".git/objects/b3/434da78a5114c5f8bfed6f0e353fadd4dad0e7": "c4120126c8736689bc5d704f8600a874",
".git/objects/da/5421a3390a606621452388435f02e1e9dc1ff4": "b27dd2cca23b706ae1cd6feec3c4fbba",
".git/objects/da/71b52490cee7f9c92cae3226c65c41abb0dd27": "305a63edf871cb9dcdbb5ac715c7d5c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/b31250adf7fe8832b89d485723390fa859992d": "dbbf95437a76146941c4a5d23e110095",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/40357ed083d634dfa91127e839e6c2b9ebbd05": "fd5148b8347b706dadf45311387ddfbe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/f887f4d8644fc817e5bfd3c3745f6d9a80ca88": "19509dad88172db197e2721bf62bbe4c",
".git/objects/fb/38d779266f7f53a592daaa4f539a334b66db3a": "52989efda24dbb17523f1ad00b0b5bd8",
".git/objects/4e/f663107cfa06c79d4368a7cbeb96a2f56b0658": "337acf8bacd26afa543a14aa9387006a",
".git/objects/4b/8998bf42ab54233156262a5ecb855c7ec300a3": "1c65886baa7b6614f8eb45b167c71f73",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/153d1236447524889f2dc133a186a4f06d74b6": "cb1523f5b6fe5d033e68c46b2d18c9d5",
".git/objects/1f/9af5894817b3a2d7fa9f1cc80192fc6a050fec": "08329a69d57a71c4bc3cb24c07cc89a4",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/50e6987f2abb4ba201592f22c180583e2af7ec": "75a8c2a94ecc436bce2c501788903977",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/5edfeeb05c017dadafa08ffed05d409bd2c1d9": "ed73e8d66fb8f05c21e4137d60431ff6",
".git/objects/5c/364d10018766afc4336618ce097e24adfa6121": "1d5903c0dfd93a0b60f2e99edfc56b4c",
".git/objects/09/b892a7e36274be0f27f9587167235dfcd35601": "4fe57a9cd7927ef941dbf08e410e668c",
".git/objects/31/0a06fbc842f11245c017988ed8676cbe60dd25": "02039f244ffd614f2f14109da0958199",
".git/objects/98/431a81eb08fe0bb97ac66e66b2141f0bb6923c": "e93e3d3dad22ad9ea32dbe59a4ec2df4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/99/b0a584d6f7313d30994403233ab7aabc75b6b8": "bbb614c6c15400548dfadf42fd06e0f9",
".git/objects/55/c192b8fd39d8529e6dd76fafe5cdcb856897eb": "83334aaeb6785658cb0516dbb12fcc98",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b1/0d237a204ee5d871cc5215e355fdc788a3a9e8": "a53862ba7068f5902946ae417c8d4d9f",
".git/objects/dc/02b55263fe5f8f48db638cdc4862e24b321663": "2f66fa9b735de329e5b68c80213993bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e7/1be677d951911678115de2074672b3d530f5b8": "744d2a6963203bdff739d44c51fa8fe7",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/394e4832c34176f0c36aa2c3799736eea1a085": "4930818ea03335dd8c956d659b777815",
".git/objects/23/c50ab7f4125b5d8336b0eacb8a014c3b492433": "4c9943ceb94d63a0dbb48271047b5cc1",
".git/objects/23/1a457dd0acc6ae8893e988d3722badb72e2675": "a7149c57f2c7dc1e8721b8191087e352",
".git/objects/76/e22b8b060e8e4b5c2a8a0c270b52e0b2f9ba06": "57dba8063c41af8ded0ce6a765d07d99",
".git/objects/82/82e1f23c071f6917f632b7bd860789133b936d": "b9336920efdeab025caa29a966bf348b",
".git/objects/82/38175ac02d4063477514d929f131c61aff5164": "ac07394d2a938e1c034c71078d74b94b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/b481befd6afe32de8cac01367a052767641eec": "abc6df0e29ee36a0fd2a4c58990eebad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ceee700572ae68287795077687545dff",
".git/logs/refs/heads/main": "95fa37f40c62b7243a440b94ca3cccf4",
".git/logs/refs/remotes/origin/main": "86a26f86ca328cdaea1b76e66e8fe2b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e450184025b92196497e6799dab36a92",
".git/refs/remotes/origin/main": "e450184025b92196497e6799dab36a92",
".git/index": "eb7a988906cf7aa89918dd7d666342e4",
".git/COMMIT_EDITMSG": "708837c1d238f0955c23a38051f5ebb7",
"assets/AssetManifest.json": "764f917809c95e40e3b4ed5f1d45ecd9",
"assets/NOTICES": "0af3f9f4bb21c503c9bf84d83d71d3ba",
"assets/FontManifest.json": "437cc6a88685aac58815ff3f8e0845f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "72544c3937b3127789a5f7c46f1c026b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/bebas_neue/BebasNeue-Regular.ttf": "47f711bd1524b9283aa92d3d74db16a8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
