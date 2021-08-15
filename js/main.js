	// Background image
	jQuery('.imgLiquid').each(function () {
	  jQuery(this).find('img').hide();
	  var imgURL = jQuery(this).find('img').attr('src');
	  jQuery(this).css('background-image', 'url(' + imgURL + ')');
	});

	// Testimonials slider
	$('.testimonials-slider').slick();

	
        $(window).scroll(function() {
            if ($(document).scrollTop() > 1) {
                $('.main-outercon').addClass('sticky');
                } else {
                $('.main-outercon').removeClass('sticky');
            }
        });
       
    
	



