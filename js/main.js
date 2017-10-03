if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./basicServiceWorker.js', { scope: '/' });
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