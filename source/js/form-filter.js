(function () {
  const filterButtons = document.querySelectorAll('.catalog__filter span');

  filterButtons.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.target.parentNode.classList.toggle('catalog__filter--active');
    });
  });

  const filterResetButton = document.querySelector('.catalog__button-clear');

  if (filterResetButton !== null) {
    filterResetButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      resetAllFilters();
    });
  }

  function resetAllFilters() {
    document.getElementById('necklaces').checked = false;
    document.getElementById('chokers').checked = false;
    document.getElementById('rings').checked = false;
    document.getElementById('earrings').checked = false;
    document.getElementById('gold').checked = false;
    document.getElementById('silver').checked = false;
    document.getElementById('pink').checked = false;
    document.getElementById('dreams').checked = false;
  }

  const filterMobileButton = document.querySelector('.catalog__filter-mobile');
  const filterForm = document.querySelector('.catalog__form');
  const overlayCatalog = document.querySelector('.overlay-catalog');
  const filterMobileOverlay = document.querySelector('.filter');
  const filterMobileCloseButton = document.querySelector('.filter button');

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
