// $(function () {
//   $('#logoHeader').click(function () {
//     $('.introHide').show(2000);

//   });
// });




// `7MMF'  `7MMF'                                  
//   MM      MM                                    
//   MM      MM  ,pW"Wq.`7M'   `MF'.gP"Ya `7Mb,od8 
//   MMmmmmmmMM 6W'   `Wb VA   ,V ,M'   Yb  MM' "' 
//   MM      MM 8M     M8  VA ,V  8M""""""  MM     
//   MM      MM YA.   ,A9   VVV   YM.    ,  MM     
// .JMML.  .JMML.`Ybmd9'     W     `Mbmmd'.JMML.   

//Porta hover
$(function () {
  $('.portaBlockBW').mouseenter( function () {
    $('.portaHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : '#444'
    }, 300);
    $('img.portaBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#portaBlockWrapper').mouseleave( function () {
    $('.portaHoverText').hide(500).fadeOut(1000);
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.portaBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 1800);
    $('img.portaBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 1800);
  });
});

// Ketch Hover
$(function () {
  $('.ketchBlockBW').mouseenter( function () {
    $('.ketchHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : '#DFDDB4'
    }, 300);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#ketchBlockWrapper').mouseleave( function () {
    $('.ketchHoverText').hide(500).fadeOut(1000);
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.ketchBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 1800);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 1800);
  });
});

// Carol Hover
$(function () {
  $('.carolBlockBW').mouseenter( function () {
    $('.carolHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#carolBlockWrapper').stop(true, true).animate ({
      'background-color' : '#ffffff'
    }, 300);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '1',
      'margin-left' : '+=30'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0',
      'margin-left' : '+=30'
    }, 200);
  });
  $('#carolBlockWrapper').mouseleave( function () {
    $('.carolHoverText').hide(500).fadeOut(1000);
    $('#carolBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.carolBlockBW').stop(true, true).animate({
      opacity : '1',
      'margin-left' : '0'
    }, 700);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '0',
      'margin-left' : '0'
    }, 700);
  });
});

// Carol Hover
$(function () {
  $('.c2cBlockBW').mouseenter( function () {
    $('.c2cHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#c2cBlockWrapper').stop(true, true).animate ({
      'background-color' : '#DFDDB4'
    }, 300);
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#c2cBlockWrapper').mouseleave( function () {
    $('.c2cHoverText').hide(500).fadeOut(1000);
    $('#c2cBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.c2cBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 1800);
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 1800);
  });
});

// Crawfest Hover
$(function () {
  $('.crawBlockBW').mouseenter( function () {
    $('.crawHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : '#DFDDB4'
    }, 300);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#crawBlockWrapper').mouseleave( function () {
    $('.crawHoverText').hide(500).fadeOut(1000);
    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.crawBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 1800);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 1800);
  });
});

// C and L Hover
$(function () {
  $('.candlBlockBW').mouseenter( function () {
    $('.candlHoverText').stop(true, true).show(500).fadeIn(1000);
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : '#DFDDB4'
    }, 300);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $(this).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#candlBlockWrapper').mouseleave( function () {
    $('.candlHoverText').hide(500).fadeOut(1000);
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 300);
    $('img.candlBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 1800);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 1800);
  });
});

//Clicks 
$(function () {
  $('.portaBlockBW').click(function() {
    $('.portaHide').fadeIn(500);
    $('img.shrinkMe').fadeIn(500).addClass('click2Hide');
    $('#portaRow').fadeIn(500).addClass('large-12');
    $('.portaLogoRow').fadeIn(4000);
    $('#portaBlockWrapper').hide();  
  });
});

$(function () {
  $('img.shrinkMe').click( function () {
    //$(this).hide("slide", {direction: "left" }, "slow");
    $('#portaRow').hide("slide", {direction: "left" }, 1000);
    $(this).hide("slide", {direction: "down" }, 500);
    $('#portaRow').hide("slide", {direction: "up" }, 500);
    $('#portaBlockWrapper').fadeIn(500).animate({
      'margin-top' : ""
    },500);
    $('.blockRow1').css('margin-top', '0')  
  });
});

// $(function () {
//   $('.portaTop').clickToggl(function() {
//     $('#portaBlockWrapper').show();
//   });
//   $('.portaTop').click(function() {
//       $('.portaHide').fadeOut(1000).hide;
//   });
// });


// OLD HOVERS

// $(function () {
//   $('.carolBlockBW').mouseenter( function () {
//     $('img.carolBlockCol').stop(true, true).animate({
//       opacity : '1'
//     }, 500);
//     $(this).stop(true, true).animate({
//       opacity : '0' 
//     }, 500);
//   });
//   $('img.carolBlockBW').mouseleave( function () {
//     $(this).stop(true, true).animate({
//       opacity : '1'
//     }, 1800);
//     $('img.carolBlockCol').stop(true, true).animate({
//       opacity : '0'
//     }, 1800);
//   });
// });





// //      ,... ,,   ,,                                              
// //   .d' "`7MM   db                                              
// //   dM`    MM                                                   
// //  mMMmm   MM `7MM `7MMpdMAo`7MMpdMAo.  .gP"Ya `7Mb,od8 ,pP"Ybd 
// //   MM     MM   MM   MM   `Wb MM   `Wb ,M'   Yb  MM' "' 8I   `" 
// //   MM     MM   MM   MM    M8 MM    M8 8M""""""  MM     `YMMMa. 
// //   MM     MM   MM   MM   ,AP MM   ,AP YM.    ,  MM     L.   I8 
// // .JMML. .JMML.JMML. MMbmmd'  MMbmmd'   `Mbmmd'.JMML.   M9mmmP' 
// //                    MM       MM                                
// //                  .JMML.   .JMML.                             
// $(function () {
//   $('.blockRow1, .blockRow2, .rowHeader').hide();
//   $('.rowHeader').delay(400).fadeIn(1000);
//   $('.blockRow1').delay(800).fadeIn(1000);
//   $('.blockRow2').delay(1000).fadeIn(1000);
// });
// // Porta Flipper 
// $(function () {
//   $('#portaBlockWrapper').each(function() {
//     function flip(t) {      // t is the id/class of the element
//       $('#portaClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : "0",
//         direction : "TOP",
//         duration : "400",
//         verso : "<div class=''></div>",
//         //verso: "<div class='bgBlack fullBlock'><div class='row'><div class='large-6 small-6 columns'></div><div class='large-6 small-6 columns'></div></div><div class='row portaLogoRow'><div class='large-3 small-3'></div></div></div>",
//         onStart: function(){
//                      //alert('hello Bitches!');
//         },

//         onFinish: function () {
//           $('#portaClick').off().on('click', function () { 
//             //$('#portaClick').addClass('afterBlock');
//             //$('#portaBlockWrapper').toggleClass('large-12');
//             // remove(d) handles again and add mouseout\
//             $('#portaBlockWrapper').removeClass('large-12');
//             $('#ketchBlockWrapper, #c2cBlockWrapper').removeClass('large-6 medBlock');///////////////////
//             flipBack('#portaClick');
            
//           });
//         },

//         onReverseFinish: function () {
//           $('#portaClick').off().on('click', function(){
//             $('#portaBlockWrapper').toggleClass('large-12 wideBlock');///////////
//             $('#ketchBlockWrapper, #c2cBlockWrapper').toggleClass('large-6 medBlock');

//             flip('#portaClick');

//           });
//         }
//       });
//     }
    
//     function flipBack(t) {

//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         //verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
//       });
      
//     }
    
//     $(function () {
//       $("#portaClick").on('click', function () { 
//         $('#portaClick').addClass('afterBlock');
        
//         //$('img.portaBlockBW').css("opacity", "1");
//         // at start bind mouseover and run function flip()
//         flip('#portaClick'); // here you send the id/class of the element

//         $('#portaBlockWrapper').addClass('large-12 wideBlock');//////////////////////
//         $('#ketchBlockWrapper, #c2cBlockWrapper').addClass('large-6 medBlock')
//       });
//     });
//   });
// });

// //Ketch Flipper
// $(function () {
//   $('#ketchBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#ketchClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h4>California-based production house Ketchum Labs needed a website, so I made one</h4>",
//         onFinish: function () {
//           $('#ketchClick').off().on('click', function () { 
//             $('#ketchClick').addClass('afterBlock');
//             // remove(d) handles again and add mouseout
//             flipBack('#ketchClick');
//             $('#ketchBlockWrapper').removeClass('large-12');
//           });
//         },

//         onReverseFinish: function () {
//           $('#ketchClick').off().on('click', function(){
//             $('#ketchBlockWrapper').toggleClass('large-12');

//             flip('#ketchClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         //verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#ketchClick").on('click', function () { 
//         $('#ketchBlockWrapper').addClass('large-12');
//         // at start bind mouseover and run function flip()
//         flip('#ketchClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// //C2C Flipper

// $(function () {
//   $('#c2cBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#c2cClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h4>The Coast to Coast foodtruck needed people to know where they are on the go</h4>",
//         onFinish: function () {

//           $('#c2cClick').off().on('click', function () { 
//             $('#c2cClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#c2cClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#c2c').off().on('click', function(){
//             flip('#c2cClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/c2cBlock.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#c2cClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#c2cClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// //Carol Flipper

// $(function () {
//   $('#carolBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#carolClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h3>Carol Beehler is an awesome designer who asked me to put together her website from a series of illustrator mockups</h3>",
//         onFinish: function () {

//           $('#carolClick').off().on('click', function () { 
//             $('#carolClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#carolClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#carol').off().on('click', function(){
//             flip('#carolClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/carol.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#carolClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#carolClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// // Craw 

// $(function () {
//   $('#candlBlockWrapper').each(function(){
//     function flip(t) {                 // t is the id/class of the element
//       $('#candlClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                                        // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso:  "<h4>Tulane University hired me to design the official website for their annual music festival that draws over 10,000 people every year</h4>",
//         onFinish: function () {

//           $('#candlClick').off().on('click', function () { 
//             $('#candlClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#candlClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#candl').off().on('click', function(){
//             flip('#candlClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/candl.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#candlClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#candlClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });




// $(function () {
//   $('.titleWrap').delay(1000).animate({
//     'right': '-=300',
//     'opacity': 0,

//   }, 4000);
// });

// $('.blockRow1').animate({
      //   'margin-top' : '+=50%'
      //   //opacity: '0',
      //  // top: '+=257'
      //   }, 500, function() {
      // //animation complete
      //   });
      // });