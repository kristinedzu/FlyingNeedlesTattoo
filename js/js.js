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
        $('#linkAnders').fadeIn(0),
        $('#linkInga').fadeIn(0),
        $('.navlink2').fadeOut(0);
    });
    $('#subLink').mouseleave(function () {
        $('#linkAnders').fadeOut(0),
        $('#linkInga').fadeOut(0),
        $('.navlink2').fadeIn(0);
    });

    $('#subLink2').mouseenter(function () {
        $('#linkPrepare').fadeIn(0),
        $('#linkHygiene').fadeIn(0),
        $('#linkAftercare').fadeIn(0),
        $('#linkProducts').fadeIn(0),
        $('.navlink3').fadeOut(0);
    });
    $('#subLink2').mouseleave(function () {
        $('#linkPrepare').fadeOut(0),
        $('#linkHygiene').fadeOut(0),
        $('#linkAftercare').fadeOut(0),
        $('#linkProducts').fadeOut(0),
        $('.navlink3').fadeIn(0);
    });

    /* to make the sublinks work on a current page */

    $('#linkInga').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
    });

    $('#linkAnders').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
    });

    $('#linkPrepare').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
    });

    $('#linkHygiene').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
    });

    $('#linkAftercare').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
    });

    $('#linkProducts').click(function () {
        $('#navmenu').hide(0),
        $('main').show(0);
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


$(document).ready(function () {
    $('.feedback_auto').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        swipe: true,
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



/* artists photo gallery */


$(document).ready(function () {

$('.anders1').click(function() {
                $(".anders1").toggleClass("BigPhoto");
            });
    $('.anders2').click(function() {
                $(".anders2").toggleClass("BigPhoto");
            });
    $('.anders3').click(function() {
                $(".anders3").toggleClass("BigPhoto");
            });
    $('.anders4').click(function() {
                $(".anders4").toggleClass("BigPhoto");
            });
    $('.anders5').click(function() {
                $(".anders5").toggleClass("BigPhoto");
            });
    $('.anders6').click(function() {
                $(".anders6").toggleClass("BigPhoto");
            });
    $('.anders7').click(function() {
                $(".anders7").toggleClass("BigPhoto");
            });
    $('.anders8').click(function() {
                $(".anders8").toggleClass("BigPhoto");
            });
    $('.anders9').click(function() {
                $(".anders9").toggleClass("BigPhoto");
            });
    $('.anders10').click(function() {
                $(".anders10").toggleClass("BigPhoto");
            });
    $('.anders11').click(function() {
                $(".anders11").toggleClass("BigPhoto");
            });
    $('.anders12').click(function() {
                $(".anders12").toggleClass("BigPhoto");
            });
    $('.anders13').click(function() {
                $(".anders13").toggleClass("BigPhoto");
            });
    $('.anders14').click(function() {
                $(".anders14").toggleClass("BigPhoto");
            });
    $('.anders15').click(function() {
                $(".anders15").toggleClass("BigPhoto");
            });
    $('.inga1').click(function() {
                $(".inga1").toggleClass("BigPhoto2");
            });
    $('.inga2').click(function() {
                $(".inga2").toggleClass("BigPhoto2");
            });
    $('.inga3').click(function() {
                $(".inga3").toggleClass("BigPhoto2");
            });
    $('.inga4').click(function() {
                $(".inga4").toggleClass("BigPhoto2");
            });
    $('.inga5').click(function() {
                $(".inga5").toggleClass("BigPhoto2");
            });
    $('.inga6').click(function() {
                $(".inga6").toggleClass("BigPhoto2");
            });
    $('.inga7').click(function() {
                $(".inga7").toggleClass("BigPhoto2");
            });
    $('.inga8').click(function() {
                $(".inga8").toggleClass("BigPhoto2");
            });
    $('.inga9').click(function() {
                $(".inga9").toggleClass("BigPhoto2");
            });
    $('.inga10').click(function() {
                $(".inga10").toggleClass("BigPhoto2");
            });
    $('.inga11').click(function() {
                $(".inga11").toggleClass("BigPhoto2");
            });
    $('.inga12').click(function() {
                $(".inga12").toggleClass("BigPhoto2");
            });
    $('.inga13').click(function() {
                $(".inga13").toggleClass("BigPhoto2");
            });
    $('.inga14').click(function() {
                $(".inga14").toggleClass("BigPhoto2");
            });
    $('.inga15').click(function() {
                $(".inga15").toggleClass("BigPhoto2");
            });


    });

/* about us gallery big photos */


$(document).ready(function () {

$('.aboutus1').click(function() {
                $(".aboutus1").toggleClass("about_us_big");
            });
    $('.aboutus2').click(function() {
                $(".aboutus2").toggleClass("about_us_big");
            });
    $('.aboutus3').click(function() {
                $(".aboutus3").toggleClass("about_us_big");
            });
    $('.aboutus4').click(function() {
                $(".aboutus4").toggleClass("about_us_big");
            });
    $('.aboutus5').click(function() {
                $(".aboutus5").toggleClass("about_us_big");
            });
    $('.aboutus6').click(function() {
                $(".aboutus6").toggleClass("about_us_big");
            });
    $('.aboutus7').click(function() {
                $(".aboutus7").toggleClass("about_us_big");
            });
    $('.aboutus8').click(function() {
                $(".aboutus8").toggleClass("about_us_big");
            });

    });



$(document).ready(function () {
var images = document.querySelectorAll('.bookmarks-web');
        new simpleParallax(images, {
            delay: 0,
            orientation: 'down',
            scale: 1.8,
            overflow: true,
            customContainer: '.container',
            customWrapper: '.wrapper'

        });

        var images = document.querySelectorAll('.poster-web');
        new simpleParallax(images, {
            delay: 0,
            orientation: 'down',
            scale: 1.8,
            overflow: true,
            customContainer: '.container',
            customWrapper: '.wrapper'

        });

        var images = document.querySelectorAll('.stickers-web');
        new simpleParallax(images, {
            delay: 0,
            orientation: 'down',
            scale: 2.5,
            overflow: true,
            customContainer: '.container',
            customWrapper: '.wrapper'

        });
        var images = document.querySelectorAll('.badges-web');
        new simpleParallax(images, {
            delay: 0,
            orientation: 'down',
            scale: 1,
            overflow: true,
            customContainer: '.container',
            customWrapper: '.wrapper'

        });
     });
