(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Video controls for featured estates
    $('.toggle-mute-btn').click(function(e) {
        e.preventDefault();
        var video = $(this).closest('.video-wrapper').find('video')[0];
        var icon = $(this).find('i');
        if (video) {
            if (video.muted) {
                video.muted = false;
                icon.removeClass('bi-volume-mute').addClass('bi-volume-up');
            } else {
                video.muted = true;
                icon.removeClass('bi-volume-up').addClass('bi-volume-mute');
            }
        }
    });

    // Fullscreen for videos
    $('.toggle-fullscreen-btn').click(function(e) {
        e.preventDefault();
        var video = $(this).closest('.video-wrapper').find('video')[0];
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome and Safari
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE 11
                video.msRequestFullscreen();
            }
        }
    });
    
})(jQuery);

