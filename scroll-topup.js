!function(c){c(document).ready(function(){c("body").append(c('<span id="m_click_top" ></span>')),c(window).scroll(function(){c(this).scrollTop()>100?c("#m_click_top").fadeIn(300):c("#m_click_top").fadeOut(1e3)}),c("#m_click_top").click(function(){return c("html, body").animate({scrollTop:0},600),!1})})}(jQuery);