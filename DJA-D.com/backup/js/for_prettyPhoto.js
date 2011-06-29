$(document).ready(function(){
		

			if ($("a[rel^='prettyPhoto']").length) {
			$(document).ready(function() {
				// prettyPhoto
				$("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});
				
				///// codegrabber ////////////
				$(".code a.code-icon").toggle(function(){
					$(this).addClass("minus").next("p").slideDown();
				}, function(){
					$(this).removeClass("minus").next("p").slideUp();
				})
			});
		}
			});