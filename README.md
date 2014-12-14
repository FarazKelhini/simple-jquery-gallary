Simple jQuery Gallary
=====================

This <a href="http://eloux.com/jquery-simple-gallery/">script</a> uses <a href="http://stackoverflow.com/questions/4478795/what-is-unobtrusive-javascript-in-layman-terms">unobtrusive JavaScript technique</a> to let people who have their JavaScript off still use it. All images in the gallery are wrapped in a link, but the script prevents the default behavior of the link and creates the gallery with fading effect, so people who have JavaScript off are still able to see the image in a new page.

<h2>Installation</h2>
Include jQuery, simple-gallary.js, and required html in your page like this:

```html
<div id="main-photo"><a href="img/1.jpg"><img src="img/1.jpg"></a></div>
<div id="thumbs">
	<a href="img/1.jpg"><img src="img/1.jpg" width="110" height="70"></a> 
	<a href="img/2.jpg"><img src="img/2.jpg" width="110" height="70"></a> 
	<a href="img/3.jpg"><img src="img/3.jpg" width="110" height="70"></a> 
	<a href="img/4.jpg"><img src="img/4.jpg" width="110" height="70"></a> 
	<a href="img/5.jpg"><img src="img/5.jpg" width="110" height="70"></a> 
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="../simple-jquery-gallary.js"></script>
```
You can add as many thumbnail as you like.

