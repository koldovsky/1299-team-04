document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо всі кнопки акордеону
  const accordionButtons = document.querySelectorAll('.accordion-button');

  // Перевіряємо, чи є кнопки
  if (!accordionButtons || accordionButtons.length === 0) {
    console.warn("Кнопки акордеону не знайдені");
    return;
  }

  // Додаємо обробник подій для кожної кнопки
  accordionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Знаходимо вміст акордеону, пов'язаний з цією кнопкою
      const content = this.nextElementSibling;

      // Перемикаємо видимість вмісту
      if (content) {
        if (content.style.display === 'block') {
          content.style.display = 'none';
          this.setAttribute('aria-expanded', 'false');
        } else {
          content.style.display = 'block';
          this.setAttribute('aria-expanded', 'true');
        }
      } else {
        console.error("Вміст для кнопки не знайдено");
      }

      // Перемикання класу для анімації іконки
      this.classList.toggle('collapsed');
    });
  });
});