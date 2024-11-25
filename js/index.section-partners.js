tns({
  container: '.js-partners-slider',
  items: 1,
  slideBy: 1,
  autoplay: true,
  nav: false,
  autoplayButtonOutput: false,
  prevButton: document.querySelector('.js-partners-slider-prev'),
  nextButton: document.querySelector('.js-partners-slider-next'),
  gap: 30,
  speed: 600,
  responsive: {
    599: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1023: {
      items: 6,
    },
  },
});
