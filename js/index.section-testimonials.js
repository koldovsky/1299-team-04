const carousel = document.querySelector('.testimonials-carousel');
const track = document.querySelector('.testimonials-carousel__container');
const slides = document.querySelectorAll('.testimonials-carousel-slide');
const dots = document.querySelectorAll('.carousel__indicator');
const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');

let index = 0;
let timer;

const gap = parseFloat(getComputedStyle(track).gap) || 0;

const step = () => slides[0].offsetWidth + gap;
const visible = () => Math.max(1, Math.round(carousel.clientWidth / step()));
const maxIndex = () => Math.max(0, slides.length - visible());

function render() {
  if (index > maxIndex()) index = 0;
  track.style.transform = `translateX(${-index * step()}px)`;

  dots.forEach((d, i) => {
    d.style.display = i <= maxIndex() ? 'inline-block' : 'none';
    d.classList.toggle('carousel__indicator--active', i === index);
  });
}

function nextSlide() {
  index = index < maxIndex() ? index + 1 : 0;
  render();
}

function start() {
  stop();
  timer = setInterval(nextSlide, 3000);
}

function stop() {
  clearInterval(timer);
}

/* events */
next.onclick = () => { nextSlide(); start(); };
prev.onclick = () => { index = index > 0 ? index - 1 : maxIndex(); render(); start(); };
dots.forEach((d, i) => d.onclick = () => { index = i; render(); start(); });

carousel.onmouseenter = stop;
carousel.onmouseleave = start;
window.onresize = render;

/* init */
render();
start();
