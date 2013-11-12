$('a.financeClick').click(function() {
  $('.popUp1').fadeIn(500);
});

$('a.popHover').hover(function() {
  $('.popUp2, .popUp2 p').fadeIn(500);

  // $('a.popHover').mouseleave(function() {
  //   $('.popUp2').fadeOut(500);
  // });
});