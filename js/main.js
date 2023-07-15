
(function ($) {
    "use strict";

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    function animateSkills() {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }
    document.addEventListener('DOMContentLoaded', function () {
        var skillContainer = document.querySelector('.skill-container');
        skillContainer.classList.remove('hidden');
        animateSkills();

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
    });


})(jQuery);
window.addEventListener('load', () => {
    init();
});

