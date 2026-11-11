'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f10f000313930f7c2da695a9a382c9f",
"assets/AssetManifest.bin.json": "a5d5b52c4c96e80aceec0420425d107b",
"assets/assets/exact/air.webp": "62ed502b9b43db5bae4341dea890c5a9",
"assets/assets/exact/alcohol.webp": "e7803dd82fdceb5bbb4d03bf76b2e2de",
"assets/assets/exact/breath_hero_v2.webp": "f03f9f0d1eb2338006cae6b295c92d19",
"assets/assets/exact/cannabis.webp": "f919f98aab3b76bd7d4fa0b9a1e014de",
"assets/assets/exact/decaler.webp": "085c82da3bcac70711175232fa44758f",
"assets/assets/exact/differ.webp": "9c0c7fad4b9f6bc1fa13a4394cd6103f",
"assets/assets/exact/diluer.webp": "2c2278b96778baa66419e2731b60b01d",
"assets/assets/exact/distraire.webp": "2ac6e918e47e3d821be7bdaaa57eaeb5",
"assets/assets/exact/drawer_background_dark.webp": "448ed9fcfdb17382f834d61cce79c3e8",
"assets/assets/exact/drawer_background_dark_v2.webp": "6b92b191f885e844128cce215d68ebdf",
"assets/assets/exact/drawer_background_light.webp": "a06f85946cc2f0fa15da2a184984feeb",
"assets/assets/exact/exode_brand_mark.webp": "6d955beaad4f1bca157f3986b7bfc647",
"assets/assets/exact/exode_brand_wordmark.webp": "c629e95cf909cd59119d88fdf90d6fc8",
"assets/assets/exact/exode_logo.webp": "6751ee6beb9b44980373e51e16ba64c4",
"assets/assets/exact/home_leaves.webp": "6363c9203e77813c26f8b5b2af4539cc",
"assets/assets/exact/level_badge_template.webp": "8623278dfa91d23d6b4f82f9436c577e",
"assets/assets/exact/lungs.webp": "9fbbdf8c43c81bd6165df6cc683be5b3",
"assets/assets/exact/material_dark_v2/add_rounded.webp": "8443101c2241c35f266f8cc7f61c9032",
"assets/assets/exact/material_dark_v2/air_rounded.webp": "b5477f160c71f1b9683a5066eae564ad",
"assets/assets/exact/material_dark_v2/arrow_forward.webp": "4157d403b9e5e6f717720e9cb55f4609",
"assets/assets/exact/material_dark_v2/arrow_outward_rounded.webp": "ea85eba13d7cbc87fc1b3f81712ed3e5",
"assets/assets/exact/material_dark_v2/auto_stories_outlined.webp": "21ec8df8c7e60e06e4025f97fba98300",
"assets/assets/exact/material_dark_v2/bedtime_off_rounded.webp": "47c2297f522674291fcf32cd8ec1bbba",
"assets/assets/exact/material_dark_v2/bedtime_rounded.webp": "aefbc31a5a542825efed435f575c5b62",
"assets/assets/exact/material_dark_v2/block.webp": "75b50fdd373cd83fbd9145c445402768",
"assets/assets/exact/material_dark_v2/call.webp": "9f2a6ac4e7230da15f9c620504e0ca11",
"assets/assets/exact/material_dark_v2/check_circle_rounded.webp": "2d7094a046363376a20aafa236757891",
"assets/assets/exact/material_dark_v2/chevron_right_rounded.webp": "bed05d7ba383eab3452a2b10e1eccece",
"assets/assets/exact/material_dark_v2/circle_outlined.webp": "fba2ffd9bc510ec4f3af849e3010475c",
"assets/assets/exact/material_dark_v2/dark_mode_outlined.webp": "c7694130b65e6489c431a9bc0f8cc2e3",
"assets/assets/exact/material_dark_v2/delete_forever_outlined.webp": "6de5b8a9adc810d0b530e240f670f677",
"assets/assets/exact/material_dark_v2/diversity_3_outlined.webp": "bdb8848d361846f0a61702c2f5841ded",
"assets/assets/exact/material_dark_v2/eco_outlined.webp": "ba6d5154bd072b246dd6e583da57db29",
"assets/assets/exact/material_dark_v2/emoji_events_rounded.webp": "2c7744ded6d36b222152965933b77c56",
"assets/assets/exact/material_dark_v2/extension_outlined.webp": "097008050a2413a5d0a37352c345511a",
"assets/assets/exact/material_dark_v2/favorite_rounded.webp": "da1f9cf1a75e4bb916a7b7ff2124b00b",
"assets/assets/exact/material_dark_v2/grid_view_rounded.webp": "f8320aab7ea5d0f941c56da311e75b77",
"assets/assets/exact/material_dark_v2/home_rounded.webp": "5c1a99c27f014827b7ada57c0e67a0da",
"assets/assets/exact/material_dark_v2/info_outline.webp": "a0c3bb531db8da2358a7baa221170121",
"assets/assets/exact/material_dark_v2/info_rounded.webp": "efdab715e634bc43c02ef653b52e8789",
"assets/assets/exact/material_dark_v2/insights_rounded.webp": "754fd41777ee1912890f30b7673aa7f7",
"assets/assets/exact/material_dark_v2/ios_share_outlined.webp": "a8226ff3cf9f0843b86a1565ebdeb261",
"assets/assets/exact/material_dark_v2/light_mode_outlined.webp": "5cc50b5dcadf6dd151ef1232751c982b",
"assets/assets/exact/material_dark_v2/local_bar_outlined.webp": "5804b9f82b3b6238bd75e736bcb2357a",
"assets/assets/exact/material_dark_v2/medical_services_outlined.webp": "6192aefbbbc8258c0fcafea22903ad9a",
"assets/assets/exact/material_dark_v2/medication_rounded.webp": "1a4ea10a30f6ace0fa6b0a01e2cf2209",
"assets/assets/exact/material_dark_v2/menu_book_rounded.webp": "655cc133ab9b0d85af054fb325783a8e",
"assets/assets/exact/material_dark_v2/person_rounded.webp": "e496a551d2c09b153141b71c42e81e1c",
"assets/assets/exact/material_dark_v2/savings_rounded.webp": "743563832c019ec2ed4ee32806add6c2",
"assets/assets/exact/material_dark_v2/schedule_rounded.webp": "b2602a5e2012db90e77b494c9d2978bb",
"assets/assets/exact/material_dark_v2/self_improvement_outlined.webp": "b8c945b04d9e34640518759becf48697",
"assets/assets/exact/material_dark_v2/settings_rounded.webp": "71e10720d81952c6be9cd924dfa06a17",
"assets/assets/exact/material_dark_v2/settings_suggest_outlined.webp": "4c6400279ba6e3b13e05a4a6ea49007e",
"assets/assets/exact/material_dark_v2/smoke_free_rounded.webp": "9c3505a0334a9ace4fa49baca5872913",
"assets/assets/exact/material_dark_v2/star_rounded.webp": "7d7bfd8d997a87d3f58d9a6c9092fc2d",
"assets/assets/exact/material_dark_v2/support_agent_rounded.webp": "fc8b3a0f39c82ad9c05406054d2ec4ea",
"assets/assets/exact/material_dark_v2/support_rounded.webp": "33cb28ac9ba645b15dd2045cc9b9d3c4",
"assets/assets/exact/material_dark_v2/swap_horiz_rounded.webp": "b0a40a959e8a9c53601df4e976c2c287",
"assets/assets/exact/material_dark_v2/timer_outlined.webp": "e3184a14e4162c0e15da6ba6fa8bf2aa",
"assets/assets/exact/material_dark_v2/tune_rounded.webp": "08311e822378ee4a43ec3b39343c5a2f",
"assets/assets/exact/material_dark_v2/water_drop_outlined.webp": "ffaf975648371f219c99eb0db403e2c9",
"assets/assets/exact/material_dark_v2/waves_outlined.webp": "258c2f937c60bfe42e8586c473f57e3c",
"assets/assets/exact/material_dark_v2/wb_sunny_rounded.webp": "fffa87819c569daf7bf7211b767ef011",
"assets/assets/exact/material_dark_v2/workspace_premium_rounded.webp": "d104f39e4a21fe0503bf6716931817e1",
"assets/assets/exact/medals_v2/medal_bronze.webp": "f339fd2c5f43c4f4c528396edfcaa001",
"assets/assets/exact/medals_v2/medal_gold.webp": "73357e8004ead1b873e00550d4a47c52",
"assets/assets/exact/medals_v2/medal_platinum.webp": "0f277a57aa366c9003aaa41b0222014a",
"assets/assets/exact/medals_v2/medal_silver.webp": "671bc63ab1dc0959c6e0864dad244417",
"assets/assets/exact/medal_depart.webp": "91822a6a449033b7a68cf3f25d438f55",
"assets/assets/exact/medal_month.webp": "101be8f9c452c009202cffd4b1b78a01",
"assets/assets/exact/medal_social.webp": "90fa83d3bc7b844d2e5d1985ae6d34b9",
"assets/assets/exact/medal_week.webp": "4838248fc4a66d7a3a3054ad61cae4af",
"assets/assets/exact/mood_1.webp": "a4a221d61542312386908b69b038a67a",
"assets/assets/exact/mood_2.webp": "92604a930732388d21387740ad30d64f",
"assets/assets/exact/mood_3.webp": "70b361e7e5b07e6b6ca14c4d0116aca5",
"assets/assets/exact/mood_4.webp": "afad1f653cf13d9fa44d4a065028d7b2",
"assets/assets/exact/mood_5.webp": "21c1c18e6f807512ccf17f781b09ed48",
"assets/assets/exact/quick_bedtime.webp": "451b256f2b18a454825eabbb26f0cc8f",
"assets/assets/exact/quick_bedtime_metal_precious.webp": "fd2f087db111f244932d6c3830c8fef4",
"assets/assets/exact/quick_consumption.webp": "318bc3ac14a1bab4e6c7dceafbca2344",
"assets/assets/exact/quick_consumption_metal_precious.webp": "360c7ea4a269561e65ec03a256be9532",
"assets/assets/exact/quick_night_wake.webp": "870592e4f092084a4f48dd69ee14c003",
"assets/assets/exact/quick_night_wake_metal_precious.webp": "0b7697b7536ce9c802edbc150aaddf1d",
"assets/assets/exact/quick_wake.webp": "cf02a533e994f32f3c9377b5dd9b0e65",
"assets/assets/exact/quick_wake_metal_precious.webp": "c46734244088c812f86049e02fb5bd2b",
"assets/assets/exact/sos_hands.webp": "738dc4d203f943ddc7197bd54fdce17a",
"assets/assets/exact/tabs/about.webp": "930bd2536528fc8a41b2ff1eec7f8cea",
"assets/assets/exact/tabs/insights.webp": "1fa63cf27ddfcbc17cc0ef2ab859269b",
"assets/assets/exact/tabs/journal.webp": "cf0a7e3566f6fb0934d4116a242565d5",
"assets/assets/exact/tabs/milestones.webp": "31e075a277e28d5cd5645ddabff60056",
"assets/assets/exact/tabs/progression.webp": "3221b78123abc705abf2616190c424db",
"assets/assets/exact/tabs/resources.webp": "ed672c0d866b3ac112a55c39d82a6d45",
"assets/assets/exact/tabs/savings.webp": "dfc4a1bdbf23639c07b2333eb6241d8c",
"assets/assets/exact/tabs/sleep.webp": "b71410c624bf663de0575df1ab857900",
"assets/assets/exact/tabs/substitutes.webp": "8d9c244b2562663ae0eb94f37505517e",
"assets/assets/exact/tobacco.webp": "a04310c973b1bac92cc4f4320e6f1447",
"assets/assets/exact/today_leaf.webp": "1b622c402e462b6ea2134dc85823c419",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/fond-radio-x-fixe.png": "006518777622f68449d5c9607c4bc5c8",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/LISEZ-MOI.txt": "dd3d0659b78dea2f259ef3911c8a8d58",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image01-respiration-fond-radio-x.mp4": "ced4203c5089bcaebd67ad8c74236410",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image02-respiration-fond-radio-x.mp4": "bda6676c53121a139191fbe759feb4b3",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image03-respiration-fond-radio-x.mp4": "132c8edc75dcdc45ae38442d81bcf9bf",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image04-respiration-fond-radio-x.mp4": "b72e39e951a0d12c0b36a130e498b92a",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image05-respiration-fond-radio-x.mp4": "cb4637498b2cea5d13ed1c65263b885e",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image06-respiration-fond-radio-x.mp4": "0b09ba88c99fb801313fcdee05b95705",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image07-respiration-fond-radio-x.mp4": "f4add9309e492995d5e6fdc296630ee3",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image08-respiration-fond-radio-x.mp4": "9bbea8ea9379029fae747ab535524f8e",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image09-respiration-fond-radio-x.mp4": "d3c800e65769fd6e1120346de2c51b4a",
"assets/assets/lungs/Respire-10-animations-fond-radio-x/Respire-image10-respiration-fond-radio-x.mp4": "563b73f18787a3977d619e0b767fbec6",
"assets/assets/program/program_fr.json": "e5ed743865a2567b44fa07f55a2de477",
"assets/assets/program/program_fr_alcool.json": "707478c8c33826182e97a4915d91548a",
"assets/assets/program/program_fr_cannabis.json": "8871c7030f66f0ce23fd12779122a1fb",
"assets/assets/program/program_fr_phase0.json": "504fe301b4d1d1ebb5be306fef087ebf",
"assets/assets/program/program_fr_phase1_2.json": "601c2f4ddc648f0ffd8635bfd5fd4c9d",
"assets/assets/program/program_fr_phase3.json": "831ceac03a807080f19dae0fa341bd88",
"assets/assets/program/program_fr_phase4_substituts.json": "57e8e098faaf2e64bcf79799d39f2f0c",
"assets/assets/program/program_fr_tabac.json": "4a1ffb09fc3971b4b618b25bcf7a3292",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3bd964c3b30398357ef81637ac1e17d8",
"assets/NOTICES": "8b60ab8523446d5f2fb5997beff0b763",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"drift_worker.js": "2b08bde626272aafbc0805d6d39bdfd8",
"favicon.png": "9827cc1a1ca9a27c46a745c6e3b22960",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "309da405b46e75229e7617eda6e475f7",
"fonts/fallback/roboto/v32/KFOmCnqEu92Fr1Me4GZLCzYlKw.woff2": "13273c6930d6996e9bc59dff89cb5274",
"fonts/LICENSE-roboto.txt": "3b83ef96387f14655fc854ddc3c6bd57",
"fonts/LISEZMOI.txt": "f0cf7351d502f3bfaa9f90b9bd26e96b",
"fonts/roboto-black.ttf": "4718a9358aa223877b670491abb424f2",
"fonts/roboto-bold.ttf": "e575e04a7c47a0378ef5cd660fd5c8ac",
"fonts/roboto-medium.ttf": "518a4eff5005690d0417f202c20a41de",
"fonts/roboto-regular.ttf": "13273c6930d6996e9bc59dff89cb5274",
"icons/apple-touch-icon.png": "b339d05849f705c6491d0f6e98d9d6da",
"icons/Icon-192.png": "b41d88a8d02eb1a292188e1dd6ea1c52",
"icons/Icon-512.png": "2529d7650a895c09b401befb18c8c4e8",
"icons/Icon-maskable-192.png": "b41d88a8d02eb1a292188e1dd6ea1c52",
"icons/Icon-maskable-512.png": "2529d7650a895c09b401befb18c8c4e8",
"index.html": "6dc545a126109242af82e135dd6b6a87",
"/": "6dc545a126109242af82e135dd6b6a87",
"main.dart.js": "f440d349b619d0eedc41c4c3e544714b",
"manifest.json": "9bbf7f752c35b803bcec0ed1d9317b37",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"version.json": "d0e15e10fd07b8ca30a3f6cea6812bc2"};
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
