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
    //  carousel pause
    $('.carousel').on('mouseenter', function () {
        $(this).carousel('pause');
    }).on('mouseleave', function () {
        $(this).carousel('cycle');
    });

    $('#sql-examples').on('slide.bs.carousel', function () {
        //  current issue
        
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
   
    //  upload another image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.image').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#upload").change(function () {
        readURL(this);
    });

});

