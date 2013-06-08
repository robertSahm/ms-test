 
// Porta Flipper 
$(function () {
  $('#portaBlockWrapper').each(function() {
    function flip(t) {      // t is the id/class of the element
      $('#portaClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
                            // .off() removes mouseout/mouseover handlers
        color_target: "none",
        depth : "0",
        light : "0",
        direction : "BOTTOM",
        duration : "400",
        verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' class='afterBlock' />",
        //recto: "<img class='small-12 small-centered' src='/assets/ketchBlock.png' class='afterBlock' />",
        onFinish: function () {
          $('#portaClick').off().on('click', function () { 
            $('#portaClick').addClass('afterBlock');


            // remove(d) handles again and add mouseout
            flipBack('#portaClick');

          });
        },

        onReverseFinish: function () {
          $('#portaClick').off().on('click', function(){
            
            flip('#portaClick');
          });
        }
      });
    }
    
    function flipBack(t) {
      $(t).flippyReverse({
        direction: "BOTTOM",
        color_target: "none",
        verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
      });
    }
    
    $(function () {
      $("#portaClick").on('click', function () { 
        $('#portaClick').addClass('afterBlock');
        // at start bind mouseover and run function flip()
        flip('#portaClick'); // here you send the id/class of the element
      });
    });
  });
});


//Ketch Flipper
$(function () {
  $('#ketchBlockWrapper').each(function(){
    function flip(t) {      // t is the id/class of the element
      $('#ketchClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
                            // .off() removes mouseout/mouseover handlers
        color_target: "none",
        depth : "0",
        light : ".1",
        direction : "TOP",
        duration : "1000",
        verso: "<img class='small-12 small-centered' src='/assets/ketchBlock.png' class='afterBlock' />",
        //recto: "<img class='small-12 small-centered' src='/assets/ketchBlock.png' class='afterBlock' />",
        onFinish: function () {

          $('#ketchClick').off().on('click', function () { 
            $('#ketchClick').addClass('afterBlock');

            // remove(d) handles again and add mouseout
            flipBack('#ketchClick');
          });
        },
        onReverseFinish: function () {
          $('#ketchClick').off().on('click', function(){
            flip('#ketchClick');
          });
        }
      });
    }
    
    function flipBack(t) {
      $(t).flippyReverse({
        direction: "TOP",
        color_target: "none",
        verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
      });
    }
    
    $(function () {
      $("#ketchClick").on('click', function () { 
        // at start bind mouseover and run function flip()
        flip('#ketchClick'); // here you send the id/class of the element
      });
    });
  });
});

//C2C Flipper

$(function () {
  $('#c2cBlockWrapper').each(function(){
    function flip(t) {      // t is the id/class of the element
      $('#c2cClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
                            // .off() removes mouseout/mouseover handlers
        color_target: "none",
        depth : "0",
        light : ".1",
        direction : "TOP",
        duration : "1000",
        verso: "<img class='small-12 small-centered' src='/assets/c2cBlock.png' class='afterBlock' />",
        //recto: "<img class='small-12 small-centered' src='/assets/ketchBlock.png' class='afterBlock' />",
        onFinish: function () {

          $('#c2cClick').off().on('click', function () { 
            $('#c2cClick').addClass('afterBlock');

            // remove(d) handles again and add mouseout
            flipBack('#c2cClick');
          });
        },
        onReverseFinish: function () {
          $('#c2c').off().on('click', function(){
            flip('#c2cClick');
          });
        }
      });
    }
    
    function flipBack(t) {
      $(t).flippyReverse({
        direction: "TOP",
        color_target: "none",
        verso: "<img class='small-12 small-centered' src='/assets/c2cBlock.png' alt='Portablock' />",
      });
    }
    
    $(function () {
      $("#c2cClick").on('click', function () { 
        // at start bind mouseover and run function flip()
      flip('#c2cClick'); // here you send the id/class of the element
      });
    });
  });
});
// $('.box').click(function () {
//   //$('.')
//   $('.box').transition({
//     perspective: '100px',
//     rotateX: '180deg'
//   });
// });








