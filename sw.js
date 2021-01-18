//Archivo service workers .js
const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request
    //solo vamos a trabajar con get
    if (request.method !== 'GET') {
        return
    }
    //buscamos en el cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/js/index.js',
        // '/assets/js/MediaPlayer.js',
        // '/assets/js/plugins/AutoPlay.js',
        // '/assets/js/plugins/AutoPause.js',
        // '/assets/css/index.css',
        // '/assets/videos/viajeEnMoto.mp4',
        // Tuve que comentar todo esto porque el ServiceWorker dejó de funcionar al pasar
        // desde el live-server a parcel (usado para typescript)
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}