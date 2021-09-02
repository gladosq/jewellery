(function () {
  const filterButtons = document.querySelectorAll('.catalog__filter span');

  filterButtons.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.target.parentNode.classList.toggle('catalog__filter--active');
    });
  });

  const filterResetButton = document.querySelector('.catalog__button-clear');
  const catalogFilterItems = document.querySelectorAll('.catalog__filter');

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
