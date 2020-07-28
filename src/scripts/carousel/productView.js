function injectCarousel__productView() {
  $('.owl-productview').owlCarousel({
    items: 2,
    loop: true,
    slideBy: 'page',
    center: true,
    margin: 0,
    dots: true,
    nav: true,
    navContainerClass: 'productview__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button'],
    responsive: {
      600: {
        items: 3,
      },
    },
  });
}
