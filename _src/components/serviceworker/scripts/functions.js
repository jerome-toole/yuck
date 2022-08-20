/**
 * Check if a response is good to cache.
 * i.e. good to potentially serve as a response on a later visit.
 * @param {Response} response https://developer.mozilla.org/en-US/docs/Web/API/Response
 * @returns {boolean} Whether the response is something we consider cacheable, i.e. ready to be re-served later.
 */
function isCacheableResponse(response) {
    // TODO: Consider adding check for content-length to try and avoid silly file sizes.
    // TODO(cont): (maybe only check size for non-documents).
    // e.g. if (response.headers.get('Content-Length') < 1000000) (1 MB in bytes)
    return response instanceof Response && response.status === 200 && response.type === 'basic';
}

/**
 * Handle a resource that can't be located.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @returns {*} A Response object or Promise that resolves to a Response, or null.
 */
function handleMissingResource(request) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
    if (navigator.onLine === false) {
        // For any HTML page, return the offline version.
        // This will only work if someone has visited the site at least once.
        if (request.destination === 'document') {
            return caches.match('/offline/');
        }

        // For any image, return an 'offline' image.
        if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
            return new Response(
                `
                <svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <title id="offline-title">Offline</title>
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#D8D8D8" d="M0 0h400v300H0z"/>
                        <text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif"
                        font-size="72" font-weight="bold">
                            <tspan x="93" y="172">offline</tspan>
                        </text>
                    </g>
                </svg>`,
                {
                    headers: {
                        'Content-Type': 'image/svg+xml',
                        'Cache-Control': 'no-store',
                    },
                }
            );
        }

        return null;
    }

    // TODO: Review whether we could handle this (and the one above) better than a 'null'.
    // TODO(cont): If we've made it here we have no fresh or cached response to serve at this point.
    // (TODO refs) Returning anything but a Response or Promise to FetchEvent.respondWith results in a DOMException.
    // (TODO refs) https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
    return null;
}

/**
 * A helper function to cache the response of a request.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {Response} response https://developer.mozilla.org/en-US/docs/Web/API/Response
 * @param {string} cacheVersionName
 * @returns {Promise} https://developer.mozilla.org/en-US/docs/Web/API/Cache/put#return_value
 */
function cacheResponse(request, response, cacheVersionName) {
    return caches.open(cacheVersionName).then((cache) => {
        return cache.put(request, response);
    });
}

/**
 * Try and fetch a fresh response over the network and cache it if we get a successful one.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {string} cacheVersionName
 * @param {boolean} tryFetchFromCacheOnFailure Try and get a cached version if fresh isn't located.
 * @returns {*} A Response object or Promise that resolves to a Response, or whatever handleMissingResource() returns.
 */
function fetchNetworkAndCacheIfSuccessful(
    request,
    cacheVersionName,
    tryFetchFromCacheOnFailure = false
) {
    return fetch(request)
        .then((freshResponse) => {
            const freshResponseClone = freshResponse.clone();

            if (!isCacheableResponse(freshResponse)) {
                return freshResponse;
            }

            cacheResponse(request, freshResponseClone, cacheVersionName);

            return freshResponse;
        })
        .catch(() => {
            if (tryFetchFromCacheOnFailure) {
                return caches.open(cacheVersionName).then((cache) => {
                    return cache.match(request).then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }

                        return handleMissingResource(request);
                    });
                });
            }

            return handleMissingResource(request);
        });
}

/**
 * Try getting a fresh version of the resource.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {string} cacheVersionName
 * @returns {*} Whatever fetchNetworkAndCacheIfSuccessful() returns.
 */
function fetchNetworkFirst(request, cacheVersionName) {
    return fetchNetworkAndCacheIfSuccessful(request, cacheVersionName, true);
}

/**
 * Try getting a cached response for a resource.
 * If there is no cached response, try fetching fresh (and cache if it's successful).
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {string} cacheVersionName
 * @returns {*} A Response object or Promise that resolves to a Response, or whatever handleMissingResource() returns.
 */
function fetchCachedFirst(request, cacheVersionName) {
    return caches.open(cacheVersionName).then((cache) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Cache/match
        return cache
            .match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetchNetworkAndCacheIfSuccessful(request, cacheVersionName);
            })
            .catch(() => {
                return handleMissingResource(request);
            });
    });
}

/**
 * Try getting a cached response then, in the background, try getting a fresh one.
 * If there is no cached version, try getting it fresh.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {string} cacheVersionName
 * @returns {*} A Response object or Promise that resolves to a Response, or whatever handleMissingResource() returns.
 */
function fetchCachedWhileRevalidate(request, cacheVersionName) {
    return caches.open(cacheVersionName).then((cache) => {
        return cache
            .match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    fetchNetworkAndCacheIfSuccessful(request, cacheVersionName);
                    return cachedResponse;
                }

                return fetchNetworkAndCacheIfSuccessful(request, cacheVersionName);
            })
            .catch(() => {
                return handleMissingResource(request);
            });
    });
}

export { fetchNetworkFirst, fetchCachedFirst, fetchCachedWhileRevalidate, cacheResponse };
