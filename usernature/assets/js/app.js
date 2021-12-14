(function ($) {
	"use strict";

	jQuery(document).ready(function(){

		jQuery('.large-image-slider').slick({
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000
		});

		jQuery('.testinonial-slider').slick({
			dots: false,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000
		});

	});
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	