
//Clicks

$(function () {
    // header link
  $('a.headerClick').click( function() {
    $('a.workLink, a.aboutLink, a.contactLink').removeClass('navSelected');
    $('.rowIntro, .workIntroText, .blocksWrapper').fadeIn(300);
    $('.aboutWrapper, .contactWrapper, #ketchRow, #portaRow, #carolRow, #aboutRow').hide(0);
    return false;
  });

  // work link
  $('a.workLink').click( function() {
    $(this).addClass('navSelected');
    $('a.aboutLink, a.contactLink').removeClass('navSelected');
    $('.blocksWrapper').show(300).css('margin-top', '77px !important');
    $('.rowIntro, .workIntroText, #aboutRow').hide(300);
    $('#portaRow, #ketchRow, #carolRow, #c2cRow').hide(300);
    return false;
  });

  //about link
  $('a.aboutLink').click( function() {
    $(this).addClass('navSelected');
    $('#aboutRow').fadeIn(400);
    $('.rowIntro, .workIntroText, .blocksWrapper, .aboutWrapper, .contactWrapper, #ketchRow, #portaRow').hide(300);
    $('a.workLink, a.contactLink').removeClass('navSelected');
    return false;
  });

  // contact link
  $('a.contactLink').click( function() {
    $(this).addClass('navSelected');
    $('.rowIntro .workIntroText').hide(300);
    $('a.workLink, a.aboutLink').removeClass('navSelected');
    return false;
  });

  $('a.homeLink').click(function() {
    $('.blocksWrapper, .workIntroText').fadeIn(300);
    $('#portaRow, #ketchRow #aboutRow, #contactRow').fadeOut(300);
  });

  $('.portaReveal').click(function() {
    $('#portaRow').fadeIn(300);
    $('.blocksWrapper, .workIntroText, .rowIntro').hide(300);
    return false;
  });

  $('.ketchReveal').click(function() {
    $('#ketchRow').fadeIn(300);
    $('.blocksWrapper, .rowIntro, .workIntroText').hide(300);
    return false;
  });

  $('.carolReveal').click(function() {
    $('#carolRow').fadeIn(300);
    $('.blocksWrapper, .rowIntro, .workIntroText').hide(300);
    return false;
  });

  $('.c2cReveal').click(function() {
    $('#c2cRow').fadeIn(300);
    $('.blocksWrapper, .rowIntro, .workIntroText').hide(300);
    return false;
  });
});

// `7MMF'  `7MMF'
//   MM      MM
//   MM      MM  ,pW"Wq.`7M'   `MF'.gP"Ya `7Mb,od8
//   MMmmmmmmMM 6W'   `Wb VA   ,V ,M'   Yb  MM' "'
//   MM      MM 8M     M8  VA ,V  8M""""""  MM
//   MM      MM YA.   ,A9   VVV   YM.    ,  MM
// .JMML.  .JMML.`Ybmd9'     W     `Mbmmd'.JMML.

//Porta hover
//$('.portaHoverText').show();
$(function () {
  $('#portaBlockWrapper').mouseenter( function() {

    //show Text
    $('.portaHoverText').stop(true, true).fadeIn(500);

    // animate background color
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : '#000'
    }, 200);

    // show color image
    $('img.portaBlockCol').animate({
      opacity : '1'
    }, 200);

    // hide b & w image
    $('img.portaBlockBW').animate({
      opacity : '0'
    }, 200);
  });

  // mouseleave
  $('#portaBlockWrapper').mouseleave( function () {
    $('.portaHoverText').hide(300);
    //color fade Stuff
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.portaBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.portaBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// Ketch Hover
$(function () {
  $('#ketchBlockWrapper').mouseenter( function () {
    $('.ketchHoverText').stop(true, true).fadeIn(600);
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : '#CAC9AA'
    }, 200);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.ketchBlockBW').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
  $('#ketchBlockWrapper').mouseleave( function () {
    $('.ketchHoverText').stop(true, true).hide(300);

    //color fade Stuff
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.ketchBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// Carol Hover
$(function () {
  $('#carolBlockWrapper').mouseenter( function () {
    $('.carolHoverText').stop(true, true).fadeIn(200);
    $('#carolBlockWrapper').stop(true, true).animate ({
      'background-color' : '#fff'
    }, 200);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.carolBlockBW').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
  $('#carolBlockWrapper').stop(true, true).mouseleave( function () {
    $('.carolHoverText').stop(true, true).hide(300);

    //color fade Stuff
    $('#carolBlockWrapper').animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.carolBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// c2c Hover
$(function () {
  $('#c2cBlockWrapper').mouseenter( function () {
    $('.c2cHoverText').stop(true, true).fadeIn(200);
    $('#c2cBlockWrapper').addClass('bricksBG');
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.c2cBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
  $('#c2cBlockWrapper').mouseleave( function () {
    $('.c2cHoverText').stop(true, true).hide(500);
    $('#c2cBlockWrapper').removeClass('bricksBG');
    //color fade Stuff
    $('#c2cBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.c2cBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// Crawfest Hover
$(function () {
  $('#crawBlockWrapper').mouseenter( function () {
    $('.crawHoverText').stop(true, true).show(200);

    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : '#BDD9F0'
    }, 200);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.crawBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
  $('#crawBlockWrapper').mouseleave( function () {
    $('.crawHoverText').stop(true, true).hide(500);

    //color fade Stuff
    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.crawBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// C and L Hover
$(function () {
  $('#candlBlockWrapper').mouseenter( function () {
    $('.candlHoverText').stop(true, true).show(200);
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : '#fff'
    }, 200);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.candlBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
  $('#candlBlockWrapper').mouseleave( function () {
    $('.candlHoverText').stop(true, true).hide(500);

    //color fade Stuff
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.candlBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

 //$('.blocksWrapper, .rowIntro').hide(300);

//SoundCloud player styling

$(function() {
  $('.sc-player').addClass('large-12 small-12 columns');
  $('.sc-volume-slider').addClass('large-5 small-5 columns');
  $('ol.sc-artwork-list').addClass('large-3 small-3 columns');
  $('.sc-controls').addClass('large-1 small-1 columns');
  // includes volume, wav image and time display
  $('.sc-scrubber').addClass('large-9 small-9 columns');
});

// Color Looping
// dots 100ms apart, letters 200ms apart

$(function() {
  function endless(item) {
    $(item).css('display', 'inline-block').animate({
      'color': '#DE5605',
      'opacity': '1'
    }, 2100, function() {
      $(item).animate({
        'color': '#65ABA6'
      }, 3100);
      endless(item);
    });
  };

  // Animate intro word 1 letter colors

     endless($('a.w').delay( 400  ));
     endless($('a.o').delay( 600  ));
     endless($('a.n').delay( 800  ));
  endless($('a.dot1').delay( 900  ));
     endless($('a.d').delay( 1000 ));
     endless($('a.e').delay( 1200 ));
     endless($('a.r').delay( 1400 ));
  endless($('a.dot2').delay( 1500 ));
     endless($('a.f').delay( 1600 ));
     endless($('a.u').delay( 1800 ));
     endless($('a.l').delay( 2000 ));
});


// Intro word 2 color animations

$(function() {
  function endless2(item) {
    $(item).css('display', 'inline-block').animate({
      'color': '#C4590E',
      'opacity': '1'
    }, 500, function() {
      $(item).animate({
        //'color': '#F7A035'
        'color': '#333'
      }, 500).delay(500);
      endless2(item);
    });
  };
     endless2($('a.e2').delay( 400  ));
     endless2($('a.x2').delay( 600  ));
  endless2($('a.dot1b').delay( 700  ));
     endless2($('a.c2').delay( 800  ));
     endless2($('a.i2').delay( 1000 ));
     endless2($('a.t2').delay( 1200 ));
  endless2($('a.dot2b').delay( 1300 ));
    endless2($('a.i2b').delay( 1400 ));
     endless2($('a.n2').delay( 1600 ));
     endless2($('a.g2').delay( 1800 ));
    endless2($('a.chk').delay( 2000 ));
});

// Intro word 1 move in/out

$(function() {
  $('#introWord1').delay(5000).animate({
    'left': '-=1000',
    'opacity': '0'
  }, 1000, 'easeInCubic', function() {
    $('#introWord1').delay(8000).animate({
      'left': '+=1000',
      'opacity': '1'
    }, 700, 'easeOutCubic');
  });
});

// Intro word 2 move in/out
$(function() {
  $('#introWord2').delay(7000).fadeIn(10).animate({
    'left': '+=2000'
  }, 700, 'easeOutElastic', function() {
    $('#introWord2').delay(5000).animate({
      'left': '+=2000'
    }, 500, 'easeInBack');
  });
});


// $('a#dlPDF').click(function(e) {
//   e.preventDefault();  //stop the browser from following
//   window.location.href = '/public/Robert_Sahm_Resume.pdf';
// });



//$('#rowIntro, .blocksWrapper, .workIntroText').hide();


//$('#ketchRow').show();



