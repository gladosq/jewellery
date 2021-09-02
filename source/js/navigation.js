(function () {
  const menuButton = document.querySelector('.header__mobile-hamburger');
  const mobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  function menuButtonHandler() {
    fixPromoHeight();
  }

  function fixPromoHeight() {
    const headerWrapper = document.querySelector('.header__wrapper');
    const promoBlock = document.querySelector('.promo');
    const promoBlockCatalog = document.querySelector('.catalog-promo');

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
