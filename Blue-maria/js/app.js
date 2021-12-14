$(window).scroll(function() {
    if($(this).scrollTop() > 75) {
        $('.custom_nav').addClass('active');
    } else {
        $('.custom_nav').removeClass('active');
    };
});

$(document).ready(function() {
    /* map menu function */
    $(".hamburger-menu").on("click", function(event) {
        if($(this).hasClass('hamburger-menu-closed', 'hamburger-menu-text-hidden')) {
            $(this).removeClass('hamburger-menu-closed', 'hamburger-menu-text-hidden');
        } else {
            $(this).addClass('hamburger-menu-closed', 'hamburger-menu-text-hidden');
        }

        if($('.hamburger-menu-text').hasClass('hamburger-menu-text-hidden')) {
            $('.hamburger-menu-text').removeClass('hamburger-menu-text-hidden');
        } else {
            $('.hamburger-menu-text').addClass('hamburger-menu-text-hidden');
        }

        if($('.shape_overlays, .shape_overlays span').hasClass('open')) {
            $('.shape_overlays, .shape_overlays span').removeClass('open');
        } else {
            $('.shape_overlays, .shape_overlays span').addClass('open');
        }

        if($('.shape_overlays').hasClass('open')) {
            $('.shape_overlays abbr').removeClass('open');
        } else {
            $('.shape_overlays abbr').addClass('open');
        }

        if($('.global-menu__item').hasClass('is-opened')) {
            $('.global-menu__item').removeClass('is-opened');
        } else {
            $('.global-menu__item').addClass('is-opened');
        }


        if($('.global-menu').hasClass('active')) {
            $('.global-menu').removeClass('active');
        } else {
            $('.global-menu').addClass('active');
        }
        event.preventDefault();
    });
});