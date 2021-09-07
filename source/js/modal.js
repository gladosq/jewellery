(function () {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const openModalButton = document.querySelector('.header__login-link');
  const modalCloseButton = document.querySelector('.modal__close-button');
  const openMobileModalButton = document.querySelector('.header__login-mobile-link');
  const inputMail = document.getElementById('email');
  const modalSendData = document.querySelector('.modal__wrapper form button');
  const modalEmailInput = document.querySelector('.modal__email-input');

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
    modalEmailInput.focus();
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

  function fixPromoHeight() {
    const headerWrapper = document.querySelector('.header__wrapper');
    const promoBlock = document.querySelector('.promo');
    const promoBlockCatalog = document.querySelector('.catalog-promo');
    const mobileWidth = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

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
})();
