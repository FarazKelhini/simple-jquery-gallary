/** 
Simple jQuery Gallery v1.0 
MIT License 
Faraz Kelhini http://eloux.com 
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