;(function ($) {
"use strict";


    $ (document).ready (function () {

        $ ('.login-form').addClass ('display-block');
        $ ('.forgot-password').addClass ('display-hide');
        $ ('.forget-pass').on ('click', function () {
            if ( $ ('.forgot-password').hasClass ('display-hide') ) {
                $ ('.forgot-password').removeClass ('display-hide').addClass ('display-block');

            }
            if ( $ ('.login-form').hasClass ('display-block') ) {
                $ ('.login-form').removeClass ('display-block').addClass ('display-hide');

                return false;
            }
        });
        
        $ ('.back-to-login').on ('click', function () {
            if ( $ ('.forgot-password').hasClass ('display-block') ) {
                $ ('.forgot-password').removeClass ('display-block').addClass ('display-hide');

            }
            if ( $ ('.login-form').hasClass ('display-hide') ) {
                $ ('.login-form').removeClass ('display-hide').addClass ('display-block');

                return false;
            }
        });

        $(document).on("click", function(e) {
            if ($(e.target).is(".dropdown-menu") === false) {
                $ ('.login-form').removeClass ('display-hide').addClass ('display-block');
                $ ('.forgot-password').removeClass ('display-block').addClass ('display-hide');
            }
        });


        // Canvas menu add class
        $ (".navigation-trigger").on ("click", function () {
            $ (".navigation, .off-canvas-overlay").addClass ("toggled");
            return false;
        });

        // Canvas menu remove class
        $ (".menu-close, .off-canvas-overlay").on ("click", function () {
            $ (".navigation, .off-canvas-overlay").removeClass ("toggled");
        });


        // filter add class
        $ (".advanced-search-icon").on ("click", function () {
            $ (".advanced-search, .off-canvas-overlay").addClass ("toggled");
            return false;
        });

        // filter remove class
        $ (".filter-close, .off-canvas-overlay").on ("click", function () {
            $ (".advanced-search, .off-canvas-overlay").removeClass ("toggled");
            return false;
        });


        $('#example').hierarchySelect({
            hierarchy: false,
            width: 'auto'
        });
        $('#example-owner').hierarchySelect({
            hierarchy: false,
            width: 'auto'
        });


        // fixed nav bar in jquery
        $(window).scroll(function() {
            if($(this).scrollTop() > 150) {
                $('.search-action').addClass('fixedElement');
            } else {
                $('.search-action').removeClass('fixedElement');
            };
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            }
            else {
                $('.scroll-to-top').fadeOut();
            }
          });

        $(".scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });





        // 1. Price Range

        if ($('#property-price-range')[0]) {
            var propertyPriceRange = document.getElementById('property-price-range');
            var propertyPriceRangeValues = [
                document.getElementById('property-price-upper'),
                document.getElementById('property-price-lower')
            ]

            noUiSlider.create (propertyPriceRange, {
                start: [12000, 70000],
                connect: true,
                range: {
                    'min': 12000,
                    'max': 70000
                }
            });

            propertyPriceRange.noUiSlider.on('update', function( values, handle ) {
                propertyPriceRangeValues[handle].innerHTML = values[handle];
            });
        }

        // 2. Property Area Size

        if ($('#property-area-range')[0]) {
            var propertyAreaRange = document.getElementById('property-area-range');
            var propertyAreaRangeValues = [
                document.getElementById('property-area-upper'),
                document.getElementById('property-area-lower')
            ]

            noUiSlider.create (propertyAreaRange, {
                start: [3500, 10000],
                connect: true,
                range: {
                    'min': 3500,
                    'max': 10000
                }
            });

            propertyAreaRange.noUiSlider.on('update', function( values, handle ) {
                propertyAreaRangeValues[handle].innerHTML = values[handle];
            });
        }

        // 3. Lot Size

        if ($('#property-lot-range')[0]) {
            var propertyLotRange = document.getElementById('property-lot-range');
            var propertyLotRangeValues = [
                document.getElementById('property-lot-upper'),
                document.getElementById('property-lot-lower')
            ]

            noUiSlider.create (propertyLotRange, {
                start: [1000, 5000],
                connect: true,
                range: {
                    'min': 1000,
                    'max': 5000
                }
            });

            propertyLotRange.noUiSlider.on('update', function( values, handle ) {
                propertyLotRangeValues[handle].innerHTML = values[handle];
            });
        }

        // 4. Year Built

        if ($('#property-year-built')[0]) {
            var propertyYbRange = document.getElementById('property-year-built');
            var propertyYbRangeValues = [
                document.getElementById('property-yb-upper'),
                document.getElementById('property-yb-lower')
            ]

            noUiSlider.create (propertyYbRange, {
                start: [1990, 2016],
                connect: true,
                range: {
                    'min': 1990,
                    'max': 2016
                }
            });

            propertyYbRange.noUiSlider.on('update', function( values, handle ) {
                propertyYbRangeValues[handle].innerHTML = Math.round(values[handle]);
            });
        }


        // single product slider

        $('.product-big-thumb').slick({
            arrows: true,
            asNavFor: '.product-sm-thumb',
        });

        $('.product-sm-thumb').slick({
            arrows: true,
            asNavFor: '.product-big-thumb',
            dots: true,
            focusOnSelect: true,
            slidesToShow: 4,
        });

        // single product share

        $(".social-link").click(function(){
            $(".all-link").toggleClass("active");
        });


  
    });


})(jQuery);
