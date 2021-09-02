"use strict";

(function () {
  var faqItem = document.querySelectorAll('.faq__item');
  faqItem.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('faq__item--active');
    });
  });
})();
"use strict";

(function () {
  var filterButtons = document.querySelectorAll('.catalog__filter span');
  filterButtons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.target.parentNode.classList.toggle('catalog__filter--active');
    });
  });
  var filterResetButton = document.querySelector('.catalog__button-clear');
  var catalogFilterItems = document.querySelectorAll('.catalog__filter');

  if (filterResetButton !== null) {
    filterResetButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      resetAllFilters();
    });
  }

  function resetAllFilters() {
    catalogFilterItems[0].classList = 'catalog__filter catalog__filter--active';
    catalogFilterItems[1].classList = 'catalog__filter';
    catalogFilterItems[2].classList = 'catalog__filter';
    catalogFilterItems[3].classList = 'catalog__filter catalog__filter--active';
    document.getElementById('necklaces').checked = true;
    document.getElementById('chokers').checked = true;
    document.getElementById('rings').checked = false;
    document.getElementById('earrings').checked = true;
    document.getElementById('gold').checked = true;
    document.getElementById('silver').checked = false;
    document.getElementById('pink').checked = true;
    document.getElementById('dreams').checked = false;
  }

  var filterMobileButton = document.querySelector('.catalog__filter-mobile');
  var filterForm = document.querySelector('.catalog__form');
  var overlayCatalog = document.querySelector('.overlay-catalog');
  var filterMobileOverlay = document.querySelector('.filter');
  var filterMobileCloseButton = document.querySelector('.filter button');

  if (filterMobileButton !== null) {
    filterMobileButton.addEventListener('click', function () {
      showFilter();
      overlayCatalog.addEventListener('click', hideFilter);
    });
  }

  function showFilter() {
    filterForm.classList.add('catalog__form--active');
    document.body.classList.add('no-scroll');
    overlayCatalog.classList.remove('hidden');
    filterMobileOverlay.style.display = 'block';
  }

  function hideFilter() {
    filterForm.classList.remove('catalog__form--active');
    overlayCatalog.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    filterMobileOverlay.style.display = 'none';
  }

  if (filterMobileCloseButton !== null) {
    filterMobileCloseButton.addEventListener('click', hideFilter);
  }
})();
"use strict";

(function () {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');
  var openModalButton = document.querySelector('.header__login-link');
  var modalCloseButton = document.querySelector('.modal__close-button');
  var openMobileModalButton = document.querySelector('.header__login-mobile-link');
  var inputMail = document.getElementById('email');
  var modalSendData = document.querySelector('.modal__wrapper form button');
  modalSendData.addEventListener('click', function () {
    localStorage.setItem('phone', inputMail.value);
  });

  if (openModalButton !== null) {
    openModalButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      showModal();
      window.addEventListener('keydown', hideModalHandler);
      modalCloseButton.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', hideModalHandler);
    });
  }

  if (openMobileModalButton !== null) {
    openMobileModalButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      fixPromoHeight();
      showModal();
      window.addEventListener('keydown', hideModalHandler);
      modalCloseButton.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', hideModalHandler);
    });
  }

  function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }

  function hideModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }

  function hideModalHandler(evt) {
    if (evt.type === 'keydown' && evt.key !== 'Escape') {
      return;
    }

    hideModal();
    window.removeEventListener('keydown', hideModalHandler);
    modalCloseButton.removeEventListener('click', hideModalHandler);
    overlay.removeEventListener('click', hideModalHandler);
  }
})();
"use strict";

(function () {
  var menuButton = document.querySelector('.header__mobile-hamburger');
  var mobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  function menuButtonHandler() {
    fixPromoHeight();
  }

  function fixPromoHeight() {
    var headerWrapper = document.querySelector('.header__wrapper');
    var promoBlock = document.querySelector('.promo');
    var promoBlockCatalog = document.querySelector('.catalog-promo');

    if (headerWrapper.classList.contains('header__wrapper--active')) {
      headerWrapper.classList.remove('header__wrapper--active');
      document.body.classList.remove('no-scroll');

      if (document.querySelector('.promo') === null) {
        if (mobileWidth.matches) {
          promoBlockCatalog.style.marginTop = '-10px';
        } else {
          promoBlockCatalog.style.marginTop = '-10px';
        }
      } else {
        if (mobileWidth.matches) {
          promoBlock.style.marginTop = '-25px';
        } else {
          promoBlock.style.marginTop = '-19px';
        }
      }
    } else {
      headerWrapper.classList.add('header__wrapper--active');
      document.body.classList.add('no-scroll');

      if (document.querySelector('.promo') === null) {
        if (mobileWidth.matches) {
          promoBlockCatalog.style.marginTop = '107px';
        } else {
          promoBlockCatalog.style.marginTop = '120px';
        }
      } else {
        if (mobileWidth.matches) {
          promoBlock.style.marginTop = '86px';
        } else {
          promoBlock.style.marginTop = '120px';
        }
      }
    }
  }

  if (menuButton !== null) {
    menuButton.addEventListener('click', menuButtonHandler);
  }
})();
"use strict";

(function () {
  var swiperWidth = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
  var arrowsMobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  if (arrowsMobileWidth.matches) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'custom',
        renderCustom: function renderCustom(swiper, current, total) {
          return current + '&nbsp;&nbsp;of&nbsp;&nbsp;' + total;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  } else {
    var _swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    if (!swiperWidth.matches) {
      _swiper.allowTouchMove = false;
    }
  }
})();