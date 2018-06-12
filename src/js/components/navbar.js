/**
 * Navbar
 */

$(function() {

  // Navbar toggler
  var navbarToggler = $('.js-navbar-toggler'),
      navbarOpened = 'navbar--opened';

  navbarToggler.on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('navbar--opened');
  });

  /*
    Add class to navbar after certain amount of pixels are scrolled
    if navbar has class navbar-fixed-top then enable it
    e.g. when you want to provide some opacity to the background color
  */
  var navbar = $('.js-navbar'),
      navbarScrolled = 'navbar--scrolled';

  if (navbar.hasClass('navbar--fixed')) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        navbar.addClass(navbarScrolled);
      } else {
        navbar.removeClass(navbarScrolled);
      }
    });
  }

})
