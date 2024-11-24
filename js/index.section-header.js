// move to separate module
const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

const $burger = document.querySelector('.js-burger');
const $mobMenu = document.querySelector('.js-mob-menu');

const handleResize = debounce(() => {
  if (window.matchMedia('(min-width: 900px)').matches) {
    document.body.classList.remove('is-overflow-hidden');
    $burger.classList.remove('is-opened');
    $mobMenu.classList.remove('is-opened');
  }
}, 400);

$burger.addEventListener('click', () => {
  document.body.classList.toggle('is-overflow-hidden');
  $burger.classList.toggle('is-opened');
  $mobMenu.classList.toggle('is-opened');
});

window.addEventListener('resize', handleResize);