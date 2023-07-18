$(document).ready(function () {
  // スライダーの設定
  var slider = $(".slick-slider");
  slider.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  });

  // full-screen スライダーの設定
  $(".full-screen").slick({
    centerMode: true,
    centerPadding: "5%",
    dots: true,
    autoplay: true,
    autoplaySpeed: 2800,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 16,
    autoplay:{
      delay: 4000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".event-slide", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    // spaceBetween: 16,
    autoplay:{
      delay: 4000,
    },
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
