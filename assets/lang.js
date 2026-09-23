/* global window */
// Root page: Turkish browsers go to /tr/, everyone else to /en/.
(function () {
  var langs = navigator.languages || [navigator.language || 'en'];
  var tr = langs.some(function (l) {
    return String(l).toLowerCase().indexOf('tr') === 0;
  });
  window.location.replace(tr ? 'tr/index.html' : 'en/index.html');
})();
