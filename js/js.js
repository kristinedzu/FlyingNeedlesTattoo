
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
