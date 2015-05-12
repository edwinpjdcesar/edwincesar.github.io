/* Edwin Cesar (edwinpjdcesar@gmail.com) */


$(document).ready(function () {

    /* smooth scrollspy *****************************************************/
    $('a[href*=#][class*="smooth"]:not([href=#])').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('body').scrollspy({ target: '#theNav' });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })

    /* contact form validation *****************************************************/
    $('#contactForm').validate({
        rules: {
            first: {
                minlength: 2,
                maxlength: 30,
                required: true
            },
            last: {
                minlength: 2,
                maxlength: 30,
                required: true
            },
            business: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 25,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });

    /* resume *****************************************************/
    $('#obj-tab').effect('slide', { direction: 'left' }, 1000);
    $('#skill-tab').effect('slide', { direction: 'right' }, 1000);
    $('#edu-tab').effect('slide', { direction: 'left' }, 1000);
    $('#job-tab').effect('slide', { direction: 'right' }, 1000);

    $('#skill').click(function () {
        $('#s1').animate({ width: '100%' }, 500, 'swing');
        $('#s2').animate({ width: '80%' }, 500, 'swing');
        $('#s3').animate({ width: '100%' }, 500, 'swing');
        $('#s4').animate({ width: '100%' }, 500, 'swing');
        $('#s5').animate({ width: '100%' }, 500, 'swing');
        $('#s6').animate({ width: '70%' }, 500, 'swing');
        $('#s7').animate({ width: '35%' }, 500, 'swing');
    });

    $('#edu').click(function () {
        $('#edu-body').toggle('highlight')
    });

    $("#job").click(function () {
        $("#j1").fadeIn(1000);
        $("#j2").fadeIn(2000);
        $("#j3").fadeIn(3000);
    });    


});

/* parallax effect *****************************************************/
(function ($) {

    $.fn.parallax = function (options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed: 0.15
        }, options);

        // Iterate over each object in collection
        return this.each(function () {

            // Save a reference to the element
            var $this = $(this);

            // Set up Scroll Handler
            $(document).scroll(function () {

                var scrollTop = $(window).scrollTop();
                var offset = $this.offset().top;
                var height = $this.outerHeight();

                // Check if above or below viewport
                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');

            });
        });
    }
}(jQuery));

$('.bgAbout').parallax({
    speed: 0.15
});

$('.bgCareer').parallax({
    speed: 0.25
});

$('.bgProjects').parallax({
    speed: 0.15
});

$('.bgContact').parallax({
    speed: 0.25
});



