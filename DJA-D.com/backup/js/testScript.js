
$(document).ready(function(){
	
	$('#menu nav ul li').hover(
        function() {
            $(this).addClass("active");
            $(this).find('ul').stop(false, true).slideDown(400);
        },
        function() {
            $(this).removeClass("active");
            $(this).find('ul').stop(false, true).slideUp(400);
        }
    );
	$('.ul_1').hover(
        function() {
            $(this).stop(false, true).slideDown(400);
        }
    );
});