// Отримуємо всі кнопки аккордеона
const accordionButtons = document.querySelectorAll('.accordion-button');

// Додаємо обробник події для кожної кнопки
accordionButtons.forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-bs-target'); // Отримуємо id елемента, який потрібно відкрити/закрити
    const targetContent = document.querySelector(targetId); // Знаходимо цей елемент

    // Перевіряємо, чи вже відкрито вміст
    if (targetContent.classList.contains('collapse')) {
      // Вміст закритий, відкриваємо його
      targetContent.classList.remove('collapse');
      this.setAttribute('aria-expanded', 'true'); // Змінюємо статус aria-expanded
    } else {
      // Вміст відкритий, закриваємо його
      targetContent.classList.add('collapse');
      this.setAttribute('aria-expanded', 'false'); // Змінюємо статус aria-expanded
    }

    // Для інших елементів аккордеона закриваємо їх
    accordionButtons.forEach(otherButton => {
      if (otherButton !== this) {
        const otherTargetId = otherButton.getAttribute('data-bs-target');
        const otherTargetContent = document.querySelector(otherTargetId);
        if (!otherTargetContent.classList.contains('collapse')) {
          otherTargetContent.classList.add('collapse');
          otherButton.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
