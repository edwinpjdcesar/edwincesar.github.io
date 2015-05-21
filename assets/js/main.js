/*


    Edwin Patrick Cesar
    edwinpjdcesar@gmail.com
    edwincesar.com
    main.js


*/

$(document).ready(function () {

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

    //      jquery demo

    //  image draggable within canvas
    $(function () {
        $(".drag").draggable({
            containment: $('.canvas')
        });
    });
    //  resize image
    $(".smaller").click(function () {
        var it = $(".image");
        it.css({ 'width': '-=20', 'height': '-=20' });
    });
    $(".bigger").click(function () {
        var it = $(".image");
        it.css({ 'width': '+=20', 'height': '+=20' });
    });
   

});

