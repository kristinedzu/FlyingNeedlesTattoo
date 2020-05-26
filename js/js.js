/* burger menu */

$(document).ready(function () {

    $('#navmenu').hide(0);

    $('#openMenu').click(function () {
        $('#navmenu').fadeIn(200),
            $('main').hide(0);
    });

    $('#menuClose').click(function () {
        $('#navmenu').hide(0),
            $('main').fadeIn(0);
    });


});


/* menu hover show subpages */

$(document).ready(function () {

    $('#linkAnders').hide(0),
        $('#linkInga').hide(0),
        $('#linkAftercare').hide(0),
        $('#linkPrepare').hide(0),
        $('#linkHygiene').hide(0),
        $('#linkProducts').hide(0);

    $('#subLink').mouseenter(function () {
        $('#linkAnders').fadeIn(0);
        $('#linkInga').fadeIn(0);
        $('.navlink2').fadeOut(0)
    });
    $('#subLink').mouseleave(function () {
        $('#linkAnders').fadeOut(0);
        $('#linkInga').fadeOut(0);
        $('.navlink2').fadeIn(0)
    });

    $('#subLink2').mouseenter(function () {
        $('#linkPrepare').fadeIn(0);
        $('#linkHygiene').fadeIn(0);
        $('#linkAftercare').fadeIn(0);
        $('#linkProducts').fadeIn(0);
        $('.navlink3').fadeOut(0)
    });
    $('#subLink2').mouseleave(function () {
        $('#linkPrepare').fadeOut(0);
        $('#linkHygiene').fadeOut(0);
        $('#linkAftercare').fadeOut(0);
        $('#linkProducts').fadeOut(0);
        $('.navlink3').fadeIn(0)
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

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

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
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});


/* read more button */

$(document).ready(function () {


    $('#ReadLess').click(function () {
        $('.more').hide(200);
    });

    $('#ReadLess').click(function () {
        $(this).hide(200);
    });
    $('#ReadLess').click(function () {
        $('#ReadMore').show(200);
    });
    $('#ReadMore').click(function () {
        $('.more').show(200);
    });
    $('#ReadMore').click(function () {
        $(this).hide(200);
    });
    $('#ReadMore').click(function () {
        $('#ReadLess').show(200);
    });
});

/* second Read more button, cause cannot use the same ID */

$(document).ready(function () {


    $('#ReadLess2').click(function () {
        $('.more2').hide(200);
    });

    $('#ReadLess2').click(function () {
        $(this).hide(200);
    });
    $('#ReadLess2').click(function () {
        $('#ReadMore2').show(200);
    });
    $('#ReadMore2').click(function () {
        $('.more2').show(200);
    });
    $('#ReadMore2').click(function () {
        $(this).hide(200);
    });
    $('#ReadMore2').click(function () {
        $('#ReadLess2').show(200);
    });
});


/* gift card form */

$(document).ready(function () {

    $('#giftcard_form').hide(0);

    $('#order').click(function () {
        $('#giftcard_form').fadeIn(0),
            $('.btn1').hide(0);
    });

    $('#close').click(function () {
        $('#giftcard_form').hide(0),
            $('.btn1').fadeIn(0);
    });


});


/* booking form */

$(document).ready(function () {

    $('#booking_form').hide(0);

    $('#book').click(function () {
        $('#booking_form').fadeIn(200);
    });

    $('#close_book').click(function () {
        $('#booking_form').hide(0);
    });


});



/* open aftercare sheet */

$(document).ready(function () {

    $('#aftercare_sheet').hide(0),
        $('#aftercareCLose').hide(0);

    $('#aftercare').click(function () {
        $('#aftercare_sheet').fadeIn(0),
            $('#aftercare').hide(0),
            $('#aftercareCLose').fadeIn(0);
    });

    $('#aftercareCLose').click(function () {
        $('#aftercare_sheet').hide(0),
            $('#aftercare').fadeIn(0),
            $('#aftercareCLose').hide(0);
    });


});


/* aftercare sheet open on web */


$(document).ready(function () {

    $('#aftercare_sheet_web').hide(0),
        $('#aftercareCLose_web').hide(0);

    $('#aftercare_web').click(function () {
        $('#aftercare_sheet_web').slideDown(400),
            $('#aftercare_web').hide(0),
            $('#aftercareCLose_web').fadeIn(0);
    });

    $('#aftercareCLose_web').click(function () {
        $('#aftercare_sheet_web').slideUp(400),
            $('#aftercare_web').fadeIn(0),
            $('#aftercareCLose_web').hide(0);
    });
});
