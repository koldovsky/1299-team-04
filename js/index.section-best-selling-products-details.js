const slides = [
  '<div><img src="img/section-best-selling-products/white_armchair.png" alt="GG"</div>',
  '<div><img src="img/section-best-selling-products/green_armchair.png" alt="GG"</div>',
  '<div><img src="img/section-best-selling-products/white_armchair.png" alt="GG"</div>',
  '<div><img src="img/section-best-selling-products/pink_armchair.png" alt="GG"</div>'
]

let currIdx = 0;

function renderCarousel() {
  const slidesContainer = document.querySelector('.container__img');
  slidesContainer.innerHTML = slides[currIdx];

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    if (index === currIdx) {
      thumbnail.classList.add('active');
    } else {
      thumbnail.classList.remove('active');
    }
  });
}

function nextSlide(){
  currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
  renderCarousel();
}

function prevSlide(){
  currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
  renderCarousel();
}

function selectThumbnail(index) {
  currIdx = index;
  renderCarousel();
}

document.querySelector(".arrow.right").addEventListener('click', nextSlide);
document.querySelector(".arrow.left").addEventListener('click', prevSlide);

const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => selectThumbnail(index));
});

renderCarousel();