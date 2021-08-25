const menuButton = document.querySelector('.header__mobile-hamburger');
const headerWrapper = document.querySelector('.header__wrapper');
const promoBlock = document.querySelector('.promo');

function menuButtonHandler () {
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
