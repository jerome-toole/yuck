if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        if (registrations.length) {
            registrations.forEach((registration) => {
                registration.unregister().then((success) => {
                    if (success) {
                        console.log('Service Worker unregistration successful.');
                    } else {
                        console.log('Service Worker unregistration failed.');
                    }
                });
            });
        } else {
            console.log('No Service Workers registered');
        }
    });
}
