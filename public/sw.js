// Advanced Service Worker for HerbSpot.fi PWA
const CACHE_NAME = 'herbspot-v2';
const STATIC_CACHE = 'herbspot-static-v2';
const DYNAMIC_CACHE = 'herbspot-dynamic-v2';
const IMAGE_CACHE = 'herbspot-images-v2';

const STATIC_URLS = [
  '/',
  '/shop',
  '/b2b',
  '/en',
  '/en/shop',
  '/en/b2b',
  '/offline',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_URLS)),
      self.skipWaiting()
    ])
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event with advanced caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  // Determine strategy based on request type
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: data.data,
      actions: [
        {
          action: 'open',
          title: 'Avaa',
          icon: '/icons/checkmark.png'
        },
        {
          action: 'close',
          title: 'Sulje',
          icon: '/icons/xmark.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions
function isStaticAsset(request) {
  return request.url.includes('/_next/static/') ||
         request.url.includes('/static/') ||
         request.url.endsWith('.js') ||
         request.url.endsWith('.css') ||
         request.url.endsWith('.woff2');
}

function isImageRequest(request) {
  return request.destination === 'image' ||
         request.url.includes('images.unsplash.com') ||
         request.url.includes('cdn.shopify.com');
}

function isAPIRequest(request) {
  return request.url.includes('/api/');
}

async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Failed to fetch static asset:', error);
    return new Response('Asset not available offline', { status: 503 });
  }
}

async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return placeholder image for offline
    return new Response('', { status: 200 });
  }
}

async function handleAPIRequest(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }

    return new Response(JSON.stringify({ 
      error: 'Network unavailable', 
      offline: true 
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function handlePageRequest(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }

    // Return offline page
    const offlineResponse = await cache.match('/offline');
    return offlineResponse || new Response('Offline', { status: 503 });
  }
}

async function doBackgroundSync() {
  // Handle offline actions when back online
  console.log('Performing background sync...');
  
  // Example: sync offline cart items
  try {
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
      await clearOfflineData();
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function getOfflineData() {
  // Get offline data from IndexedDB
  return [];
}

async function syncOfflineData(data) {
  // Sync data with server
  console.log('Syncing offline data:', data);
}

async function clearOfflineData() {
  // Clear synced offline data
  console.log('Clearing offline data');
}
