// Инициализация слайдеров
const swiper_v1 = new Swiper('.swiper_v1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar1',
  },
  // autoplay: {
  //   delay: 5000,
  // },
});


const swiper = new Swiper('.swiper_v2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next_v2',
    prevEl: '.swiper-button-prev_v2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerGroup: 5,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    // when window width is >= 480px
    991: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 3,
    },
    // when window width is >= 640px
    1199: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
    }
  },

});
