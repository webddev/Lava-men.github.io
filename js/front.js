//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1000,
  simulateTouch: false,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 0,
  watchOverflow: true,
  navigation: {
    nextEl: ".promo-swiper-button-next",
    prevEl: ".promo-swiper-button-prev",
  },
  pagination: {
    el: ".promo-swiper-pagination",
    clickable: "true",
  },
});

const swiperAnnounce = new Swiper(".Announce", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  breakpoints: {
    1600: {
      spaceBetween: 5,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1300: {
      spaceBetween: 5,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1100: {
      spaceBetween: 5,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    992: {
      spaceBetween: 5,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 5,
      slidesPerView: 3,
      slidesPerGroup: 1,
    },

    0: {
      spaceBetween: 5,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});
const Announcetext = new Swiper(".Announce-text", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      spaceBetween: 10,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1300: {
      spaceBetween: 10,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1100: {
      spaceBetween: 10,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    992: {
      spaceBetween: 10,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});

swiperAnnounce.controller.control = Announcetext;
Announcetext.controller.control = swiperAnnounce;

const reportsSwiperMini = new Swiper(".reportsSwiperMini", {
  slidesPerView: 6,
  centeredSlides: true,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const reportsSwiper = new Swiper(".reportsSwiper", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: reportsSwiperMini,
  },
});

// let headerIndex = document.querySelector(".header--index");
let headerIndex = document.querySelector(".header");
let menuButton = document.querySelector(".menu-button");
let mainMenu = document.querySelector(".main-menu");

let openMenuHandler = function (evt) {
  if (!mainMenu.classList.contains("open")) {
    headerIndex.classList.toggle("minimal");
    mainMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
    document.body.classList.toggle("fixed");
  } else if (mainMenu.classList.contains("open")) {
    headerIndex.classList.toggle("minimal");
    mainMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
    document.body.classList.toggle("fixed");
  }
};

menuButton.addEventListener("click", function (evt) {
  openMenuHandler(evt);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && mainMenu.classList.contains("open")) {
    openMenuHandler(evt);
  }
});

$(function () {
  $scrollButton = $("#top-button");
  $window = $(window);
  $topOffset = 300;
  $topOffsetMobile = 200;
  $window.scroll(function () {
    if ($(window).width() > 991) {
      if ($window.scrollTop() > $topOffset) {
        $scrollButton.addClass("show");
      } else {
        $scrollButton.removeClass("show");
      }
    }
    if ($(window).width() < 992) {
      if ($window.scrollTop() > $topOffsetMobile) {
        $scrollButton.addClass("show");
      } else {
        $scrollButton.removeClass("show");
      }
    }
  });
  $scrollButton.on("click", function (e) {
    e.preventDefault(),
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        {
          duration: 0,
          easing: "linear",
        }
      );
  });
});
