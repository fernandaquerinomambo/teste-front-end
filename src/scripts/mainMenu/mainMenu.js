$('#headerbarBurgermenuClose').on('click', () => {
  $('.headerbar__burgermenu__nav__container').addClass(
    'hide--side--burgermenu'
  );
  $('.headerbar__burgermenu__background__container').fadeOut();
});

$('#headerbarBurgermenuOpen').on('click', () => {
  $('.headerbar__burgermenu__background__container').fadeIn();
  $('.headerbar__burgermenu__nav__container').removeClass(
    'hide--side--burgermenu'
  );
});
