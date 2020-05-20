
/* this is the photo gallery on about us page */

$(document).ready(function () {
    $('.gallery').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
    });
});
