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
            containment: $('.image-space')
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
   
    //  change shirt type
    $('#ts').click(function () {
        $('.shirt').attr('src', 'https://cloud.githubusercontent.com/assets/10873565/7744091/1215600e-ff66-11e4-9756-b0ccf4993f24.png');
    });

    $('#hd').click(function () {
        $('.shirt').attr('src', 'https://cloud.githubusercontent.com/assets/10873565/7764481/be19c050-0017-11e5-882a-a8ffab6cf6d5.png');
    });
});

