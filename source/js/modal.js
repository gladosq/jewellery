const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.header__login-link');
const modalCloseButton = document.querySelector('.modal__close-button');

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  showModal();
  window.addEventListener('keydown', hideModalHandler);
  modalCloseButton.addEventListener('click', hideModalHandler);
  overlay.addEventListener('click', hideModalHandler);
})

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
