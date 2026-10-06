/* Light or dark: follows the system until the reader picks one; the choice is kept. */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function current() { return root.getAttribute('data-theme') || (mq && mq.matches ? 'light' : 'dark'); }
  function label() { btn.setAttribute('aria-label', current() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'); }
  btn.addEventListener('click', function () {
    var next = current() === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('le-theme', next); } catch (e) {}
    label();
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', label);
  label();
})();
