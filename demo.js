/**
Simple jQuery Gallery v1.0 
(c) 2014 Faraz Kelhini. http://eloux.com
License: 
**/
(function($){
	$(function() {
		$('#thumbs a').click(function() {
			var newPhoto = $('<img src="' + $(this).attr('href') +'">');
			newPhoto.hide();
			var oldPhoto = $('#main-photo img');
			$('#main-photo').html(newPhoto);
			newPhoto.fadeIn(500);
			oldPhoto.remove();
			return false;
		}); 
	});
})(jQuery)