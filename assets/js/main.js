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
    autoplay: {
      delay: 4000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".event-slide", {
    slidesPerView: 2,
    // loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 14000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    breakpoints: {
      960: {
        slidesPerView: 1,
      },
    },

    on: {
      slideChangeTransitionEnd: function () {
        var slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
          slide.classList.remove("active-slide");
        });

        var activeSlide = slides[this.realIndex + 1]; // +1 to account for cloned slide in loop mode
        activeSlide.classList.add("active-slide");
      },
    },
  });
});
