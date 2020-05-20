


/* this is the photo gallery on about us page */

$(document).ready(function () {
    $('.gallery').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
    });
});


/* feedback carousel */

$(document).ready(function () {
    $('.feedback_container').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: false,
        swipe: true,
    });
});



/* scrolling down arrow */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/* read more button */

$(document).ready(function() {


    $('#ReadLess').click(function() {
                $('.more').hide(200);
            });

    $('#ReadLess').click(function() {
                $(this).hide(200);
            });
    $('#ReadLess').click(function() {
                $('#ReadMore').show(200);
            });
    $('#ReadMore').click(function() {
                $('.more').show(200);
            });
    $('#ReadMore').click(function() {
                $(this).hide(200);
            });
    $('#ReadMore').click(function() {
                $('#ReadLess').show(200);
            });
    });

/* second Read more button, cause cannot use the same ID */

$(document).ready(function() {


    $('#ReadLess2').click(function() {
                $('.more2').hide(200);
            });

    $('#ReadLess2').click(function() {
                $(this).hide(200);
            });
    $('#ReadLess2').click(function() {
                $('#ReadMore2').show(200);
            });
    $('#ReadMore2').click(function() {
                $('.more2').show(200);
            });
    $('#ReadMore2').click(function() {
                $(this).hide(200);
            });
    $('#ReadMore2').click(function() {
                $('#ReadLess2').show(200);
            });
    });


/* gift card form */

$(document).ready(function() {


    $('#order').click(function() {
                $('#giftcard_form').fadeIn(200),
                $('#giftcard').hide(200),
                $('.btn1').hide(200);
            });

    $('#close').click(function() {
                $('#giftcard').fadeIn(200),
                $('#giftcard_form').hide(200),
                $('.btn1').fadeIn(200);
            });


    });
