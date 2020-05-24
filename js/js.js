/* burger menu */

$(document).ready(function() {

    $('#navmenu').hide(0);

    $('#openMenu').click(function() {
                $('#navmenu').fadeIn(200),
                    $('main').hide(0);
            });

    $('#menuClose').click(function() {
                $('#navmenu').hide(0),
                    $('main').fadeIn(0);
            });


    });


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



/* scrolling to the top arrow */

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
    }
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

    $('#giftcard_form').hide(0);

    $('#order').click(function() {
                $('#giftcard_form').fadeIn(200),
                $('.btn1').hide(0);
            });

    $('#close').click(function() {
                $('#giftcard_form').hide(0),
                $('.btn1').fadeIn(0);
            });


    });


/* booking form */

$(document).ready(function() {

    $('#booking_form').hide(0);

    $('#book').click(function() {
                $('#booking_form').fadeIn(200);
            });

    $('#close_book').click(function() {
                $('#booking_form').hide(0);
            });


    });



/* open aftercare sheet */

$(document).ready(function() {

    $('#aftercare_sheet').hide(0),
    $('#aftercareCLose').hide(0);

    $('#aftercare').click(function() {
                $('#aftercare_sheet').fadeIn(0),
                  $('#aftercare').hide(0),
                    $('#aftercareCLose').fadeIn(0);
            });

    $('#aftercareCLose').click(function() {
                $('#aftercare_sheet').hide(0),
                  $('#aftercare').fadeIn(0),
                    $('#aftercareCLose').hide(0);
            });


    });

