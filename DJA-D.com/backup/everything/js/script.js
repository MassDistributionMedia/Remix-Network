
$(document).ready(function(){
	$('.ul_1').stop(false, true).slideUp(400);
	$('#menu').mouseenter(function(){
		$('#menu nav').stop().animate({top:'0'},400, function(){$('#menu nav li').css({visibility:'visible'}); $('#menu .ul_1').css({visibility:'visible'}); });
	}).mouseleave(function(){
		$('#menu nav').stop().animate({top:'-400px'},400, function(){$('#menu nav li').css({visibility:'hidden'}); $('#menu .ul_1').css({visibility:'hidden'}); });	
	});
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