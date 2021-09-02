(function () {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const openModalButton = document.querySelector('.header__login-link');
  const modalCloseButton = document.querySelector('.modal__close-button');
  const openMobileModalButton = document.querySelector('.header__login-mobile-link');
  const inputMail = document.getElementById('email');
  const modalSendData = document.querySelector('.modal__wrapper form button');

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
