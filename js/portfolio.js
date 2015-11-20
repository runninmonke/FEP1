var messages = {
	proj1: "This is my first ever project. I built it with some images I had laying around and it's the website you are on right now.",
	proj2: "The next project is to build a resume website.",
	proj3: "Eventually I'm going to build a game similar to the arcade classic, Frogger."
}

var projectClick = function(evt) {
	//TODO: Add ability to toggle back to the main image
	changeImg(evt);
	displayDescription(evt);
};

var changeImg = function(evt) {
	var imgLg = evt.target.currentSrc.slice(0,-4) + "-lg" + evt.target.currentSrc.slice(-4);
	var imgSm = evt.target.currentSrc.slice(0,-4) + "-sm" + evt.target.currentSrc.slice(-4);
	$('.display img').attr({"src": imgLg, "class": "img-detail", "srcset": imgSm + " 500w, " + imgLg + " 1140w", "sizes": "100vw"});
};

var displayDescription = function(evt) {
	$('.display p').attr("class", "txt-detail");
	$('.display p').html(messages[evt.target.parentElement.id]);
};

$('.projects').on('click','img', projectClick);
	