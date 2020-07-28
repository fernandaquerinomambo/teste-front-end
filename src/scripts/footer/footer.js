$('#footerInstitutionalToggle').on('click', () => {
  if (window.innerWidth < 700) {
    $('#footerInstitutionalToggle').toggleClass('footer--selected');
    $('#footerInstitutionalContent').slideToggle(200);
    $('#footerInstitutionalContent').css('display', 'flex');
  }
});

$('#footerHelpandsupportToggle').on('click', () => {
  if (window.innerWidth < 700) {
    $('#footerHelpandsupportToggle').toggleClass('footer--selected');
    $('#footerHelpandsupportContent').slideToggle(200);
    $('#footerHelpandsupportContent').css('display', 'flex');
  }
});

$('#footerAbountserviceToggle').on('click', () => {
  if (window.innerWidth < 700) {
    $('#footerAbountserviceToggle').toggleClass('footer--selected');
    $('#footerAbountserviceContent').slideToggle(200);
    $('#footerAbountserviceContent').css('display', 'flex');
  }
});

addEventListener('resize', () => {
  if (window.innerWidth > 701) {
    $('.footer__titles').removeClass('footer--selected');
    $('.footer__content').css('display', 'flex');
    $('.footer__content').slideDown(0);
  } else {
    $('.footer__content').css('display', 'none');
    $('.footer__content').slideUp(0);
  }
});
