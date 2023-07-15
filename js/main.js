(function ($) {
    "use strict";

    // Skills
    function animateSkills() {
        $('.skill').waypoint(
            function () {
                $('.progress .progress-bar').each(function () {
                    $(this).css("width", $(this).attr("aria-valuenow") + '%');
                });
            },
            { offset: '80%' }
        );
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Call animateSkills when the page finishes loading
    $(window).on('load', function () {
        animateSkills();
    });

})(jQuery);
