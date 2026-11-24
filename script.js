const button = document.querySelector('.brands__toggle');
const buttonText = document.querySelector('.brands__toggle-text');
const list = document.querySelector('.brands__list');
const mobileBreakpoint = window.matchMedia('(max-width: 767px)');

button.addEventListener('click', () => {
  const isOpen = list.classList.toggle('brands__list--expanded');

  button.classList.toggle('brands__toggle--expanded', isOpen);
  
  buttonText.textContent = 'Показать все';

  if (isOpen) {
    buttonText.textContent = 'Скрыть';
  }
});

let swiper = null;

function syncSwiper() {
  if (mobileBreakpoint.matches && swiper === null) {
    swiper = new Swiper('.brands__slider', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.brands__pagination',
        clickable: true,
      },
    });
  } else if (window.matchMedia('(min-width: 768px)').matches && swiper !==null) {
  swiper.destroy(true, true);
  swiper = null;
  }
}

syncSwiper();
window.addEventListener('resize', syncSwiper);