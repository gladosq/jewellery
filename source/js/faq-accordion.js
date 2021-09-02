(function () {
  const faqItem = document.querySelectorAll('.faq__item');

  faqItem.forEach((item) => {
    item.addEventListener('click', function () {
      item.classList.toggle('faq__item--active');
    });
  });
})();
