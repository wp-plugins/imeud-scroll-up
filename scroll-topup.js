// JavaScript Document
(function($) {
$(document).ready(function() {
	$("body").append( $('<span id="m_click_top" ></span>') );
	
	$(window).scroll(function () { 		
        if ($(this).scrollTop() > 100) {
            $('#m_click_top').fadeIn(300);
        } else {
            $('#m_click_top').fadeOut(1000);
        }
    });

    $('#m_click_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });	
	
});
})(jQuery);