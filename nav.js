/* Upgrades the shared .navbar into a collapsible mobile menu.
   Runs on every page. Without JS the nav still works — responsive.css
   falls back to a fully expanded vertical menu on small screens. */
(function () {
  var nav = document.querySelector('.navbar');
  if (!nav) return;

  var links = document.createElement('div');
  links.className = 'nav-links';
  links.id = 'primary-nav';
  while (nav.firstChild) {
    links.appendChild(nav.firstChild);
  }

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-controls', 'primary-nav');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '\u2630 Menu';

  nav.appendChild(toggle);
  nav.appendChild(links);
  nav.classList.add('has-toggle');

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.innerHTML = isOpen ? '\u2715 Close' : '\u2630 Menu';
  });

  // Reset to the desktop state if the window is widened while open
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '\u2630 Menu';
    }
  });
})();
