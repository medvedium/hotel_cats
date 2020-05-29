@@include('jquery.min.js');
@@include('slick.min.js');

// Gulp-webP плагин

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
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

$(document).ready(function () {
  // Burger-menu

  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav--mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Плавная прокрутка к пункту меню

  $('.header__nav--link, .footer__nav--link, .header__nav--link-mobile').click(
    function () {
      let linkID = $(this).attr('href');
      if ($('.header__burger').hasClass('active')) {
        // Прокрутка из мобильного меню

        $('html, body').animate(
          {
            scrollTop: $(linkID).offset().top - 62,
          },
          'slow',
        );
      } else {
        // Прокрутка из полноценного меню

        $('html, body').animate(
          {
            scrollTop: $(linkID).offset().top,
          },
          'slow',
        );
      }

      //Скрытие мобильного меню при нажатии ссылки

      if ($(this).hasClass('header__nav--link-mobile')) {
        $('.header__burger, .header__nav--mobile').toggleClass('active');
        $('body').toggleClass('lock');
      }
    },
  );

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
});
