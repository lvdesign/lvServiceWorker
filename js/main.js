'use strict';

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/lvServiceWorker/basicServiceWorker.js', { scope: '/lvServiceWorker' });
  }


/*
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./serviceworkerAdactio.js', {scope: '/'})
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('Service Worker is not supported in this browser.')
}
*/
