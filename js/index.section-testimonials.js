const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slidesContainer = document.querySelector('.testimonials-carousel__container');
const indicators = document.querySelectorAll('.carousel__indicator');
const slides = document.querySelectorAll('.testimonials-carousel-slide');

let currentSlideIndex = 0;

function updateCarousel() {
  const offset = -currentSlideIndex * (slides[0].offsetWidth + 20); // 20 - це відступ між слайдами
  slidesContainer.style.transform = `translateX(${offset}px)`;

  indicators.forEach((indicator, index) => {
    if (index === currentSlideIndex) {
      indicator.classList.add('carousel__indicator--active');
    } else {
      indicator.classList.remove('carousel__indicator--active');
    }
  });
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlideIndex = index;
    updateCarousel();
  }
}

prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slides.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
});

updateCarousel();
