// const initSlider = () => {
//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: false,
//     slidesPerView: 'auto',
//     spaceBetween: 60,
//     autoHeight: true,

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// };


// export {initSlider};


const initSlider = () => {
  (function () {
    return new Swiper('.coaches__swiper', {
      direction: 'horizontal',
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }());

  (function () {
    return new Swiper('.reviews__slider', {
      direction: 'horizontal',
      grabCursor: true,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 80,
      setWrapperSize: true,
      autoHeight: true,

      navigation: {
        nextEl: '.reviews__button--next ',
        prevEl: '.reviews__button--prev',
      },
    });
  }());
};

export {initSlider};
