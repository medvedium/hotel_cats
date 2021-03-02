@@include('jquery.min.js');
@@include('slick.min.js');


$(document).ready(function () {
  // Burger-menu

  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav--mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  const mobileMenu = document.querySelector('.header__nav--mobile'),
    mobileLink = mobileMenu.querySelectorAll('.header__nav--link-mobile'),
    header = document.querySelector('.header'),
    burger = document.querySelector('.header__burger'),
    body = document.querySelector('body');

  mobileLink.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active');
      body.classList.toggle('lock');
      mobileMenu.classList.toggle('active')
    });
  });

  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      header.classList.remove("is_hide");
    } else {
      header.classList.add("is_hide");
    }
    this.oldScroll = this.scrollY;
  };

  // Слайдер раздела "Номера"

  $('.rooms__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 889,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Слайдер раздела "Отзывы"

  $('.reviews__inner').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // Меню сортировки

  let sortHeader = document.querySelector('.sort__header'),
    sortBody = document.querySelector('.sort__body'),
    sortItem = document.querySelectorAll('.sort__item'),
    sortCurrent = document.querySelector('.sort__current');

  sortHeader.addEventListener('click', (item) => {
    sortHeader.classList.add('sort__header--active');
    sortBody.classList.add('sort__body--active');
  });

  sortItem.forEach(item => {
    item.addEventListener('click', function () {
      sortHeader.classList.remove('sort__header--active');
      sortBody.classList.remove('sort__body--active');
      let text = this.innerText;
      sortCurrent.innerText = text;
    });
  });

  // Кнопка фильтра

  let filterWindow = document.querySelector('.rooms-catalog__filter'),
    filterButton = document.querySelector('.rooms-catalog__button--filter'),
    filterWrap = document.querySelector('.rooms-catalog__wrap');

  filterButton.addEventListener('click', () => {
    filterWindow.classList.add('rooms-catalog__filter--active');
    filterWrap.classList.add('rooms-catalog__wrap--active');
  });

});


// Подключение карт 2Gis

let map;
let myIcon;

DG.then(function () {
  map = DG.map('map', {
    center: [59.93864, 30.323],
    zoom: 16,
  });
  myIcon = DG.icon({
    iconUrl: 'img/map-marker.svg',
    iconSize: [52, 68],
  });
  DG.marker([59.93864, 30.323], {
    icon: myIcon,
  })
    .addTo(map)
    .bindPopup('Санкт-Петербург, ул Большая Конюшенная, д 19');
});

