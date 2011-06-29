function gallery_new(amount, visible, ob){
	
	var active=1, vis_page=1;
	
	//show first content
	activeContent(1);
	
	
	//pagination
	$(ob.gallery).prepend('<ul class="'+ob.pages+'"></ul>');
	$('.'+ob.pages).append('<li class="while_not_first"><span class="first">first page</span></li>');
	$('.'+ob.pages).append('<li class="while_not_first"><span class="prev"></span></li>');
	for (var i=1; i<=visible; i++){
		$('.'+ob.pages).append('<li><span class="page" id="num'+i+'" tittle="'+i+'">'+i+'</span></li>');
	}
	$('.'+ob.pages).append('<li class="while_not_last"><span class="next"></span></li>');
	$('.'+ob.pages).append('<li class="while_not_last"><span class="last">last page</span></li>');
	
	//active first button
	activePage(1);
	
	//hidden first buttons
	$('.'+ob.pages+' .while_not_first').hide();
	
	//hidden last buttons
	if (visible>=amount) {$('.'+ob.pages+' .while_not_last').fadeOut();}
	
	$('.'+ob.pages+' .page').click(function(){
		num=$(this).attr("tittle")	;
		goPage(num);
	});
	
	$('.'+ob.pages+' .next').click(function(){next()});
	$('.'+ob.pages+' .prev').click(function(){prev()});
	$('.'+ob.pages+' .last').click(function(){lastPage()});
	$('.'+ob.pages+' .first').click(function(){firstPage()});
	
	//function go to page
	function goPage(num){
		active=num;
		activePage(num);
		var a=--num;
			a=a+vis_page;
		activeContent(a);
	}
	
	//function next
	function next(){
		if (vis_page==1) {
			$('.'+ob.pages+' .while_not_first').show();
		}
		if (vis_page+visible <= amount) {
			vis_page=vis_page+visible;
			active=1;
			if (vis_page+visible > amount) {
				$('.'+ob.pages+' .while_not_last').hide();
				vis_page=amount-visible+1;
			} 
			repl();
			activePage(1);
			activeContent(vis_page);			
		}
	}	
	
	//function preview
	function prev(){
		if (vis_page>amount-visible) {
			$('.'+ob.pages+' .while_not_last').show();
		}
		if (vis_page-visible > 1) {
			vis_page=vis_page-visible;} else{
			$('.'+ob.pages+' .while_not_first').hide();
			vis_page=1;	
		}
		active=1;
		repl();
		activePage(1);
		activeContent(vis_page);
	}
	
	//function last page
	function lastPage(){
		vis_page=amount-visible+1;
		repl();
		$('.'+ob.pages+' .while_not_first').show();
		$('.'+ob.pages+' .while_not_last').hide();
		activePage(visible);
		activeContent(amount);		
	}
	
	//function first page
	function firstPage(){
		vis_page=1;
		repl();
		$('.'+ob.pages+' .while_not_last').show();
		$('.'+ob.pages+' .while_not_first').hide();
		activePage(1);
		activeContent(1);		
	}
	
	//replace page buttons
	function repl(){
		$('.'+ob.pages+' li .page').empty();
		for (var i=0; i<visible; i++){
			$('.'+ob.pages+' #num'+(i+1)).append(vis_page+i);
		}
	}
	
	//active page
	function activePage(i){
		$('.'+ob.pages+' span').removeClass('active');
		$('.'+ob.pages+' #num'+i).addClass('active');
	}
	
	//active content
	function activeContent(i){	
		$(ob.gallery+' section').hide();
		$(ob.gallery+' #page_'+i).show();
	}
	
};

