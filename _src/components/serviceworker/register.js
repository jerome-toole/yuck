if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                // registration is a ServiceWorkerRegistration instance.
                // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
                let swToWatchState = null;

                if (registration.installing) {
                    swToWatchState = registration.installing;
                    console.log('Service Worker installing with scope:', registration.scope);
                } else if (registration.waiting) {
                    swToWatchState = registration.waiting;
                    console.log('Service Worker waiting with scope:', registration.scope);
                } else if (registration.active) {
                    swToWatchState = registration.waiting;
                    console.log('Service Worker active with scope:', registration.scope);
                }

                if (swToWatchState) {
                    swToWatchState.addEventListener('statechange', (e) => {
                        console.log(
                            `Service worker ${e.target.state} with scope:`,
                            registration.scope
                        );
                    });
                }
            })
            .catch((err) => {
                console.log('Service Worker registration failed: ', err);
            });
    });
}
