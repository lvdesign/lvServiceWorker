'use strict';



  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../lvServiceWorker/basicServiceWorker.js', { scope: '/lvServiceWorker/' }).then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
      console.dir('Registration failed with ' + error);
    });
  };
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
