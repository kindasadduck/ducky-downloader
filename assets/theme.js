/* global window, document */
// Follows the system theme (Master Prompt 10.2: default theme is "system").
(function () {
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    document.documentElement.setAttribute('data-theme', media.matches ? 'dark' : 'light');
  }
  apply();
  media.addEventListener('change', apply);
})();
