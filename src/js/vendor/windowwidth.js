/**
 * Check Document Window Width
 */

function checkWindowWidth() {
  if ($(window).width() < 576) {
    // XS
  } else if ($(window).width() < 768) {
    // SM and down
  } else if ($(window).width() < 992) {
    // MD and down
  } else if ($(window).width() < 1200) {
    // LG and down
  } else  {
    // XL and up
  }
}

$(function() {
  // checkWindowWidth();
})

$(window).smartresize(function() {
  // checkWindowWidth();
});
