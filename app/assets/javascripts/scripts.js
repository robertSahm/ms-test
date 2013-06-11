

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




// `7MMF'  `7MMF'                                  
//   MM      MM                                    
//   MM      MM  ,pW"Wq.`7M'   `MF'.gP"Ya `7Mb,od8 
//   MMmmmmmmMM 6W'   `Wb VA   ,V ,M'   Yb  MM' "' 
//   MM      MM 8M     M8  VA ,V  8M""""""  MM     
//   MM      MM YA.   ,A9   VVV   YM.    ,  MM     
// .JMML.  .JMML.`Ybmd9'     W     `Mbmmd'.JMML.   
//                     ,,                          
//   .g8"""bgd       `7MM                          
// .dP'     `M         MM                          
// dM'       `,pW"Wq.  MM  ,pW"Wq.`7Mb,od8 ,pP"Ybd 
// MM        6W'   `Wb MM 6W'   `Wb MM' "' 8I   `" 
// MM.       8M     M8 MM 8M     M8 MM     `YMMMa. 
// `Mb.     ,YA.   ,A9 MM YA.   ,A9 MM     L.   I8 
//   `"bmmmd' `Ybmd9'.JMML.`Ybmd9'.JMML.   M9mmmP' 


// Porta Hover
$(function () {
  $('img.portaBlockCol').hide();
  $('.portaBlockBW').mouseenter( function () {
    $('img.portaBlockCol').fadeIn(300);
    $('img.portaBlockBW').fadeOut(300);
    return false;
  });

  $('.portaBlockCol').mouseleave( function () {
    $('img.portaBlockCol').fadeOut(300);
    $('img.portaBlockBW').fadeIn(300);
    return false;
  });
});

// Ketch Hover
$(function () {
  $('img.ketchBlockCol').hide();
  $('.ketchBlockBW').mouseenter( function () {
    $('img.ketchBlockCol').fadeIn(300);
    $('img.ketchBlockBW').fadeOut(300);
  });

  $('.ketchBlockCol').mouseleave( function () {
    $('img.ketchBlockCol').fadeOut(300);
    $('img.ketchBlockBW').fadeIn(300);
  });
});

// c2c Hover
$(function () {
  $('img.c2cBlockCol').hide();
  $('.c2cBlockBW').mouseenter( function () {
    $('img.c2cBlockCol').fadeIn(300);
    $('img.c2cBlockBW').fadeOut(300);
  });

  $('.c2cBlockCol').mouseleave( function () {
    $('img.c2cBlockCol').fadeOut(300);
    $('img.c2cBlockBW').fadeIn(300);
  });
});

//carol hover
$(function () {
  $('img.carolBlockCol').hide();
  $('.carolBlockBW').mouseenter( function () {
    $('img.carolBlockCol').fadeIn(300);
    $('img.carolBlockBW').fadeOut(300);
  });

  $('.carolBlockCol').mouseleave( function () {
    $('img.carolBlockCol').fadeOut(300);
    $('img.carolBlockBW').fadeIn(300);
  });
});

//craw hover
$(function () {
  $('img.crawBlockCol').hide();
  $('.crawBlockBW').mouseenter( function () {
    $('img.crawBlockCol').fadeIn(300);
    $('img.crawBlockBW').fadeOut(300);
  });

  $('.crawBlockCol').mouseleave( function () {
    $('img.crawBlockCol').fadeOut(300);
    $('img.crawBlockBW').fadeIn(300);
  });
});

// charlotte and lisa hover
$(function () {
  $('img.candlBlockCol').hide();
  $('.candlBlockBW').mouseenter( function () {
    $('img.candlBlockCol').fadeIn(300);
    $('img.candlBlockBW').fadeOut(300);
  });

  $('.candlBlockCol').mouseleave( function () {
    $('img.candlBlockCol').fadeOut(300);
    $('img.candlBlockBW').fadeIn(300);
  });
});

//Clicks 
$(function () {
//$('#portaBlockCol').on('click', function(){
  $('.portaBlockCol').click(function() {
    $('#portaRow').fadeIn(500).addClass('large-12');
    $('.portaLogoRow').fadeIn(1000);
    $('.blockRow1').css('margin-top', '430px')
    $('#portaBlockWrapper').hide();  
  });
});



// $('.blockRow1').animate({
      //   'margin-top' : '+=50%'
      //   //opacity: '0',
      //  // top: '+=257'
      //   }, 500, function() {
      // //animation complete
      //   });
      // });