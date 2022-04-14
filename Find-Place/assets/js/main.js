;(function($) {
    'use strict';

    jQuery(document).ready(function($) {
        $(".menu-icon").click(function(){
            $(".menu-icon").toggleClass("active");
        });

        $(".menu-icon").click(function(){
            $(".sidebar").toggleClass("active");
        });


        // gallery slider in single page 
        $ (".anmipes-product-big-image").slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // arrows: true,
            asNavFor: '.anmipes-thumb_imges',
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });

        $ (".anmipes-thumb_imges").slick ({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            // arrows: true,
            asNavFor: '.anmipes-product-big-image',
            centerMode: false,
            focusOnSelect: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });


    });

}(jQuery));