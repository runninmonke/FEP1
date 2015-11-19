$('.projects').on('click','img', function(evt){
	imgLg = evt.target.currentSrc.slice(0,-4) + "-lg" + evt.target.currentSrc.slice(-4);
	$('.display img').attr({"src": imgLg, "class": "img-detail"});
	$('.display').prepend('<p class="txt-detail">This is my first ever project. It is the website you are on right now, but if you look close you will notice somethings have changed since this screenshot was taken.</p>');
});