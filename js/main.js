"use strict";

var faqItem = document.querySelectorAll('.faq__item');
faqItem.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('faq__item--active');
  });
});
"use strict";

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
var filterMobileOverlay = document.querySelector('.filter__button-mobile');
var filterMobileCloseButton = document.querySelector('.filter__button-mobile button');

if (filterMobileButton !== null) {
  filterMobileButton.addEventListener('click', function (evt) {
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
"use strict";

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var openModalButton = document.querySelector('.header__login-link');
var modalCloseButton = document.querySelector('.modal__close-button');
openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  showModal();
  window.addEventListener('keydown', hideModalHandler);
  modalCloseButton.addEventListener('click', hideModalHandler);
  overlay.addEventListener('click', hideModalHandler);
});

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
"use strict";

var menuButton = document.querySelector('.header__mobile-hamburger');
var headerWrapper = document.querySelector('.header__wrapper');
var promoBlock = document.querySelector('.promo');

function menuButtonHandler() {
  if (headerWrapper.classList.contains('header__wrapper--active')) {
    headerWrapper.classList.remove('header__wrapper--active');
    document.body.classList.remove('no-scroll');

    if (document.querySelector('.promo') == null) {
      document.querySelector('.catalog-promo').style.marginTop = '-19px';
    } else {
      promoBlock.style.marginTop = '-19px';
    }
  } else {
    headerWrapper.classList.add('header__wrapper--active');
    document.body.classList.add('no-scroll');

    if (document.querySelector('.promo') == null) {
      document.querySelector('.catalog-promo').style.marginTop = '120px';
    } else {
      promoBlock.style.marginTop = '120px';
    }
  }
}

menuButton.addEventListener('click', menuButtonHandler);
"use strict";

var swiper = new Swiper('.swiper-container', {
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
var swiperWidth = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
var arrowsMobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

if (!swiperWidth.matches) {
  swiper.allowTouchMove = false;
}

if (arrowsMobileWidth) {
  console.log('work');
}