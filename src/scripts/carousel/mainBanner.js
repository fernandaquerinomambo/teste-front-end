$(document).ready(function () {
  $('.owl-banner').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 0,
    dots: false,
    nav: true,
    navContainerClass: 'banner__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button'],
  });
});
