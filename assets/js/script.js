// Show Move Up Arrow
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 600) {
        $('.top').show();
    } else {
        $('.top').hide();
    }

});

// Smooth Move Up Scroll
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    },
        500,
        'linear'
    );

});
