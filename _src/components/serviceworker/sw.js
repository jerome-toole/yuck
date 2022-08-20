/* eslint no-restricted-globals: 1 */
/* eslint-disable max-len */ // TODO: Remove this and tidy up once we've sorted the long todos.

/**
 * Granola Service Worker
 * MDN technical documentation is on point: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API.-
 * ---
 * Decent overviews of Service Workers generally:
 * - Google: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
 * Service Worker caching and HTTP caching: https://web.dev/service-worker-caching-and-http-caching/
 * Stale-while-revalidate inspo: https://jcs.wtf/service-worker-stale-while-revalidate/
 * Navigation preload inspo: https://alistapart.com/article/now-thats-what-i-call-service-worker/
 * Workbox implementation, but still useful for understanding basic Service Worker strategy: https://dev.to/jonchen/service-worker-caching-and-http-caching-p82
 */

// TODO: TESTING: Visits X time apart with new version update.
// TODO: DOCUMENT WHAT IS HAPPENING :')

import {
    cacheResponse,
    fetchNetworkFirst,
    fetchCachedFirst,
    fetchCachedWhileRevalidate,
} from './scripts/functions.js';

// TODO: Dynamically grab THEME_SLUG when this file is moved to the root.
// const themeName = '{{THEME_SLUG}}';
const themeName = 'granola';
const currentCacheVersionName = `${themeName}-1.0.0`;
const isNavigationPreloadAvailable = 'navigationPreload' in self.registration;

/**
 * Handle an the Service Worker install.
 * @param {InstallEvent} event https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        // https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open
        caches
            .open(currentCacheVersionName)
            .then((cache) => {
                // https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll
                return cache.addAll(['/offline/', '/']);
            })
            .then(() => {
                // TODO: Review skipWaiting https://redfin.engineering/how-to-fix-the-refresh-button-when-using-service-workers-a8e27af6df68
                // I feel like we don't update the version enough for this to be an issue as described in the article
                // One to keep an eye on if we want to start doing more comprehensive SW stuff.
                return self.skipWaiting();
            })
    );
});

/**
 * Handle an the Service Worker activation.
 * @param {ExtendableEvent} event https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all([
                cacheNames
                    .filter((cacheName) => {
                        return cacheName !== currentCacheVersionName;
                    })
                    .map((cacheName) => {
                        return caches.delete(cacheName);
                    }),
                // TODO: Review clients.claim() https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
                // TODO(cont): https://stackoverflow.com/a/62288363/4479336
                // self.clients.claim(),

                // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload
                // https://developers.google.com/web/updates/2017/02/navigation-preload
                // https://alistapart.com/article/now-thats-what-i-call-service-worker/
                isNavigationPreloadAvailable ? self.registration.navigationPreload.enable() : true,
            ]);
        })
    );
});

/**
 * Handle each request being made.
 * @param {FetchEvent} event https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * For ref, event.request is a Request object; https://developer.mozilla.org/en-US/docs/Web/API/Request
 */
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const reqCacheControlHeader = event.request.headers.get('Cache-Control') || '';
    let response = null;

    // Bug fix for Chromium open-in-new-tab issue.
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    // Ignore all requests to other domains.
    if (url.origin !== self.origin) {
        // TODO: Review handling of third party image resources (i.e. SPAPI right now).
        // TODO(cont): Theme images: Check whether we can cache third party resource (from SPAPI or alternative); if not try cache local version of it.
        // TODO(cont): Non-theme images (e.g. uploads/xyz): Add offline image for third party reqs (i.e. SPAPI or alternative).
        // TODO(cont): We can just not cache images until we've tested our third party's handling of this properly; the browser should cache same-domain images (i.e. uploads/xyz) for performance, and we're serving an offline SVG if someone is offline.
        return;
    }

    // Ignore any non-HTTP/HTTPS requests (e.g. chrome-extension requests)
    if (!event.request.url.startsWith('http')) {
        return;
    }

    // Ignore non-GET requests.
    if (event.request.method !== 'GET') {
        return;
    }

    // If the resource is flagged as 'should not cache'
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    if (reqCacheControlHeader.indexOf('no-store') > -1) {
        return;
    }

    // TODO: Review /wp-admin check and instead rely on servers sending the correct Cache-Control header (containing no-store; caught before this check).
    // TODO(cont): Things like admin-ajax.php should be caught by the Cache-Control header value containing no-store.
    // TODO(cont): Therefore we can probably remove this check, but it's worth doing a bit more testing.
    // TODO(cont): e.g. checking headers set for these files on our local envs, non-Kinsta/WPE servers, etc.
    // TODO(cont): (WP core js files wouldn't be caught with current Cache-Control settings, but I don't think they need to be?)
    // TODO(cont): Regardless of all of the above, our Service Worker should be getting destroyed if you're logged in...
    // TODO(cont): Important we include this info, particularly around server inconsistencies, in our documentation.
    // Ignore requests for admin-related URLs.
    // if (url.pathname.startsWith('/wp-admin')) {
    //     return;
    // }

    // TODO: Review whether removing /wp-json checks is a good idea — this should be caught by the Cache-Control header value containing no-store; see wp-admin check TODOs.
    // Ignore requests for REST API URLs.
    // if (url.pathname.startsWith('/wp-json')) {
    //     return;
    // }

    // Ignore requests for core WP URLs (e.g. Gutenberg scripts).
    // TODO: Review whether it might be worth caching any of this for offline within the service worker.
    // TODO(cont): We should handle these in the same way we handle plugin JS/CSS/etc.
    if (url.pathname.startsWith('/wp-includes')) {
        return;
    }

    // Ignore video requests because of Safari's range bug
    // https://philna.sh/blog/2018/10/23/service-workers-beware-safaris-range-request/
    if (event.request.url.match(/\.(mp4)$/)) {
        return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Request/mode#value
    if (event.request.mode === 'navigate') {
        response = Promise.resolve(event.preloadResponse)
            .then((preloadResponse) => {
                if (preloadResponse) {
                    cacheResponse(event.request, preloadResponse.clone(), currentCacheVersionName);

                    return preloadResponse;
                }

                return fetchNetworkFirst(event.request, currentCacheVersionName);
            })
            .catch(() => {
                return caches.match(event.request);
            });
    }

    // Fetch cached versions of theme assets by default.
    // i.e. the pathname starts with /wp-content/themes/*/assets/
    // TODO: Cached first for styles, scripts, fonts.
    // TODO(cont): I had 'OR third party CDN images (SPAPI)' here (e.g. uploads/xyz) but we can decide that in line with SPAPI approach during the same origin check further up.
    if (url.pathname.match(/^\/wp-content\/themes\/[a-z-]*\/assets\//)) {
        response = fetchCachedFirst(event.request, currentCacheVersionName);
    } /* else if (
        // event.request.destination === 'style' ||
        // event.request.destination === 'script'
        // reqCacheControlHeader.indexOf('no-cache') > -1 ||
        // reqCacheControlHeader.indexOf('must-revalidate') > -1
    ) {
        response = fetchCachedWhileRevalidate(event.request, currentCacheVersionName);
    }

    response = fetchNetworkFirst(event.request, currentCacheVersionName);
    */ else {
        // TODO: Review whether there are any files that can't wait until next page load to get the fresh version.
        // TODO(cont): I can only really see this being an issue if/when non-versioned x cacheable plugin JS/CSS is updated, but it would only be on 1 load until you go to another page.
        response = fetchCachedWhileRevalidate(event.request, currentCacheVersionName);
    }

    if (response instanceof Promise || response instanceof Response) {
        // https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
        event.respondWith(response);
    }
});
