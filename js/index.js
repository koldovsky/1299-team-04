function init() {
  import('./index.section-header.js');
  import('./index.section-our-fave-finds.js');
  import('./index.section-partners.js');
  import('./index.section-testimonials.js');
  import('./index.section-best-selling-products.js');
  import('./index.section-testimonials.js');
  import('./index.section-best-selling-products-details.js');
  import('./index.section-contact-form-partial.js');
  import('./index.our-blog-post-page.js');
  import('./index.section-about-us.js');
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
