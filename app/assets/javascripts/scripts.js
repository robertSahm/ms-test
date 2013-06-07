// stroll.bind( '#main ul' );

// $(document).ready(function() {
//     var scrollorama = $.scrollorama({
//         blocks:'.scrollblock'
//     });
// });




// $(function () {
//   // Utilize the modernzr feature support class to detect CSS 3D transform support
//   if ($('html').hasClass('csstransforms3d')) {    
        
//     // if it's supported, remove the scroll effect add the cool card flipping instead
//     $('.thumb').removeClass('scroll').addClass('flip');        
            
//       // add/remove flip class that make the transition effect
//     $('.thumb.flip').hover (
//         function () {
//             $(this).find('.thumb-wrapper').addClass('flipIt flip');
//         },
//         function () {
//             $(this).find('.thumb-wrapper').removeClass('flipIt');            
//         }
//       );
            
//     } else {
        
//       // CSS 3D is not supported, use the scroll up effect instead
//       $('.thumb').hover(
//           function () {
//               $(this).find('.thumb-detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
//           },
//           function () {
//               $(this).find('.thumb-detail').stop().animate({bottom: ($(this).height() * -1) }, 500, 'easeOutCubic');            
//           }
//       );
//     }
//   });

// $(document).ready(function() {
//     $("#myFlippyBox").click(function() {

//         $(this).flippy({
//             //content : "Hi !",
//             verso: "<img src=\"http://placekitten.com/610/300\" alt=\"placeholder\"/>",
//             recto : "Hi! Bitches",
//             //verso: "<%= image_tag "portaBlock.png" %>",
//             direction : "TOP",
//             duration : "750",
//             // onStart : function() {
                
//             // },
//             onFinish : function() {
//                $(this).flippy({
//                   verso: "Hi!"
//                 });
//             }
//         });

//     });
// });


// $(".flipbox").on("click",function(e){
//   $(".flipbox").flippy({
//     color_target: "red",
//     duration: "500",
//     verso: "<div class='flipOver' style='background-image: url('portaLogo.png');'></div>",
//     //verso: "<img src=\"http://placekitten.com/610/300\" alt=\"placeholder\"/>",
//     //recto : "<img src='images/portaLogo.png'>",
//     onStart: function(){
//       // Your code here
    


//     }
//   });
//   //e.preventDefault();
// });


function flip(t) {      // t is the id/class of the element
    $(t).off().flippy({ // here instead of t you can also write #myFlippyBox and remove it
                        // .off() removes mouseout/mouseover handlers
        color_target: "#a7a7a7",
        verso: "<p class='title'>This is a stock image</p>",
        onFinish: function () {
            $('#myFlippyBox').off().on('click', function () { 
                                           // remove handles again and add mouseout
                flipBack('#myFlippyBox');
            });
        },
        onReverseFinish: function () {
            $('#myFlippyBox').off().on('click', function(){
              flip('#myFlippyBox');
            });
        }
    });
}

function flipBack(t) {
    $(t).flippyReverse({
        color_target: "#a7a7a7 ",
        recto: "<img src='http://static.blazonco.com/customcss/dyllen/HayworthCreative/images/ceo.jpeg'/>"
    });
}


$(function () {
    $("#myFlippyBox").on('click', function () { 
        // at start bind mouseover and run function flip()
        flip('#myFlippyBox'); // here you send the id/class of the element
    });
});



