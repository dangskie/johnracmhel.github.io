
$(function(){
	
	/*----------------------------------------------*/
	// ui-tab ( for using multiple on the same page )
	/*----------------------------------------------*/
	$(document).on('click', '.multi-tab-wrap .multi-tab a', function(e){
		e.preventDefault();
		var scope = $(this).closest('.multi-tab-wrap');
		var target = $(this).attr('href');
		if(!target){
			return;
		}
		if($(this).hasClass('disabled') || $(this).hasClass('disable') || $(this).prop('disabled')){
			return;
		}
		$('.multi-tab a', scope).removeClass('on');
		$(this).addClass('on');
		$('.tab-container', scope).hide();
		$(target).show();
	});

});
