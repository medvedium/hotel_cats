@@include("jquery.min.js");
@@include("slick.min.js");

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

let map;
let myIcon;

DG.then(function () {
  map = DG.map("map", {
    center: [59.93864, 30.323],
    zoom: 16,
  });
  myIcon = DG.icon({
    iconUrl: "img/map-marker.svg",
    iconSize: [52, 68],
  });
  DG.marker([59.93864, 30.323], {
    icon: myIcon,
  })
    .addTo(map)
    .bindPopup("Санкт-Петербург, ул Большая Конюшенная, д 19");
});

$(document).ready(function () {
  $(document).on("click", ".header__nav--list li a", function () {
    var linkID = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkID).offset().top,
      },
      "slow"
    );
  });
  $(document).on("click", ".footer__nav--list li a", function () {
    var linkID = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkID).offset().top,
      },
      "slow"
    );
  });

  $(".rooms__inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
  $(".reviews__inner").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
});
