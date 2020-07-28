$(document).ready(function () {
  $('.owl-discountshell').owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    slideBy: 'page',
    margin: 0,
    dots: true,
    nav: true,
    navContainerClass: 'discountshell__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button'],
    responsive: {
      960: {
        items: 3,
      },
      1250: {
        items: 4,
      },
      1500: {
        items: 5,
      },
    },
  });
});
