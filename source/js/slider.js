(function () {
  const swiperWidth = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
  const arrowsMobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  if (arrowsMobileWidth.matches) {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '&nbsp;&nbsp;of&nbsp;&nbsp;' + total;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
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

    if (!swiperWidth.matches) {
      swiper.allowTouchMove = false;
    }
  }
})();
