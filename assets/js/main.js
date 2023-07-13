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
});
