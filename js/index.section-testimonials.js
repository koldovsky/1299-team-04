// Отримання елементів
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slidesContainer = document.querySelector('.testimonials-carousel__container');
const indicators = document.querySelectorAll('.carousel__indicator');
const slides = document.querySelectorAll('.testimonials-carousel-slide');

// Поточний індекс слайда
let currentSlideIndex = 0;

// Функція для оновлення каруселі
function updateCarousel() {
  // Оновлюємо позицію слайдів
  const offset = -currentSlideIndex * (slides[0].offsetWidth + 20); // 20 - це відступ між слайдами
  slidesContainer.style.transform = `translateX(${offset}px)`;

  // Оновлюємо індикатори
  indicators.forEach((indicator, index) => {
    if (index === currentSlideIndex) {
      indicator.classList.add('carousel__indicator--active');
    } else {
      indicator.classList.remove('carousel__indicator--active');
    }
  });
}

// Функція для переходу до певного слайда за індексом
function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlideIndex = index;
    updateCarousel();
  }
}

// Обробники подій для кнопок
prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slides.length - 1; // Повертаємось до останнього слайда
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0; // Повертаємось до першого слайда
  }
  updateCarousel();
});

// Обробка кліку на індикатор
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Ініціалізація каруселі
updateCarousel();
