function init() {
  import('./index.section-header.js');
  import('./index.section-our-fave-finds.js');
  import('./index.section-partners.js');
  import('./index.section-best-selling-products.js');
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
