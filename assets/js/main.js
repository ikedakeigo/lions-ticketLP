$(document).ready(function () {

  var swiper1 = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 60,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".event-slide", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 30,
    loopAdditionalSlides: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,

    },
  });
});
