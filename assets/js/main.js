/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com
    main.js


*/

$(document).ready(function () {

    //$('.navigations').fadeIn('slow');

    //  scrollspy
    $('body').scrollspy({ target: '#theNav' });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
    //  smooth scroll
    $('a[href*=#][class*="smooth"]:not([href=#])').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
    //  carousel pause
    $('.carousel').on('mouseenter', function () {
        $(this).carousel('pause');
    }).on('mouseleave', function () {
        $(this).carousel('cycle');
    });

    //  pretty colors
    spectrum();

    function spectrum() {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('.heading').animate({ color: hue }, 2500);
        spectrum();
    }

});

