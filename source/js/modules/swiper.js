const initSlider = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};


// const coachSlider = () => {
//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// };

export {initSlider};
