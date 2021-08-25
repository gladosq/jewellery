const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: false,
  spaceBetween: 100,

  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiperWidth = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
let arrowsMobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)')

if (!swiperWidth.matches) {
  swiper.allowTouchMove = false;
}

if (arrowsMobileWidth) {

  console.log('work');
}
