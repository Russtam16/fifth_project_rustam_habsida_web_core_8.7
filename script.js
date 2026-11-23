const button = document.querySelector('.brands__toggle');
const buttonText = document.querySelector('.brands__toggle-text');
const list = document.querySelector('.brands__list');

button.addEventListener('click', () => {
  const isOpen = list.classList.toggle('brands__list--expanded');
  button.classList.toggle('brands__toggle--expanded', isOpen);
  buttonText.textContent = 'Показать все';

  if (isOpen) {
    buttonText.textContent = 'Скрыть';
  }
});

const swiper = new Swiper('.brands__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.brands__pagination',
    clickable: true,
    },
});