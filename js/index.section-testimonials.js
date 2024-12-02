tns({
  container: '.js-testimonials-slider',
  items: 1,
  slideBy: 1,
  autoplay: true,
  nav: true,
  autoplayButtonOutput: false,
  navAsThumbnails: true,
  navPosition: 'bottom',
  prevButton: document.querySelector('.js-testimonials-slider-prev'),
  nextButton: document.querySelector('.js-testimonials-slider-next'),
  gutter: 30,
  speed: 600,
  mouseDrag: true,
  responsive: {
    599: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1023: {
      items: 3,
    },
  },
});
