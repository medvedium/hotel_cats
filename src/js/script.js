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
      mobileMenu.classList.toggle('active');
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

  let roomsCatalog = document.querySelector('.rooms-catalog');

  if (roomsCatalog) {

    let sortHeader = document.querySelector('.sort__header'),
      sortBody = document.querySelector('.sort__body'),
      sortItem = document.querySelectorAll('.sort__item'),
      sortCurrent = document.querySelector('.sort__current'),

      filterWindow = document.querySelector('.rooms-catalog__filter'),
      filterButton = document.querySelector('.rooms-catalog__button--filter'),
      filterWrap = document.querySelector('.rooms-catalog__wrap'),
      fillterClose = filterWrap.querySelector('.modal__close');

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

    filterButton.addEventListener('click', () => {
      filterWindow.classList.add('rooms-catalog__filter--active');
      filterWrap.classList.add('rooms-catalog__wrap--active');
      body.classList.add('lock');

    });

    fillterClose.addEventListener('click', () => {
      filterWindow.classList.remove('rooms-catalog__filter--active');
      filterWrap.classList.remove('rooms-catalog__wrap--active');
      body.classList.remove('lock');
    });

    filterWrap.addEventListener('click', () => {
      filterWindow.classList.remove('rooms-catalog__filter--active');
      filterWrap.classList.remove('rooms-catalog__wrap--active');
      body.classList.remove('lock');
    });

    filterWindow.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }


  // Модальное окно 

  let singleRoom = document.querySelector('.room');

  if (singleRoom) {

    let orderFormBtn = document.querySelector('.room__btn'),
      modalClose = document.querySelector('.modal__close'),
      modalConfirm = document.querySelector('.modal__submit'),
      modalWrap = document.querySelector('.modal'),
      modalDialog = modalWrap.querySelector('.modal__dialog'),
      modalThanks = document.querySelector('.modal__thanks'),
      modalThanksBtn = document.querySelector('.modal__thanks--btn'),
      modalThanksClose = modalThanks.querySelector('.modal__close');

    orderFormBtn.addEventListener('click', (event) => {
      showModal();
    });

    modalClose.addEventListener('click', () => {
      closeModal();
    });

    modalWrap.addEventListener('click', () => {
      closeModal();
    });

    modalDialog.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    modalConfirm.addEventListener('click', (event) => {
      event.preventDefault();
      confirm();

    });

    modalThanks.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    modalThanksBtn.addEventListener('click', () => {
      event.preventDefault();
      closeModal();
    });

    modalThanksClose.addEventListener('click', () => {
      closeModal();
    });

    const closeModal = function () {
      modalDialog.style.display = 'flex';
      modalThanks.style.display = 'none';

      modalWrap.classList.remove('modal__active');
      body.classList.remove('lock');
    };

    const showModal = function () {

      modalWrap.classList.add('modal__active');
      body.classList.add('lock');
    };

    const confirm = function () {
      modalDialog.style.display = 'none';
      modalThanks.style.display = 'flex';
    };

  }
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

