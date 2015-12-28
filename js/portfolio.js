$(function() {
	//Project description data
	var projects = {
		proj1: {
			message: "This is my first ever project. I built it with some images I had laying around and it's the website you are on right now. It's responsive to different display sizes",
			srcset: 'imgs/proj-1-sm.jpg 600w, imgs/proj-1-lg.jpg 1140w',
			class: 'img-detail',
			src: "imgs/proj-1-lg.jpg"
		},
		proj2: {
			message: 'An arcade game similar to Frogger. Built by implementing psuedo-classical object-oriented programming patterns. The image assets and game engine were provided by Udacity.',
			srcset: '',
			class: 'img-detail centered',
			src: "imgs/proj-2-lg.jpg"
		},
		proj3: {
		message: 'Neighborhood map application built with the Google Maps API. Utilizes other APIs for additional meteological and astronomical data.',
		srcset: 'imgs/proj-3-sm.jpg 600w, imgs/proj-3-lg.jpg 1140w',
		class: 'img-detail',
		src: "imgs/proj-3-lg.jpg"
		}
	}

	//Make clicks on project display it in the main picture area
	var projectClick = function(evt) {
		//TODO: Add ability to toggle back to the main image
		changeImg(evt);
		displayDescription(evt);
	};

	//Change image in main picture area to project's screenshot
	var changeImg = function(evt) {
		var projName = evt.target.parentElement.id;
		$('.display img').attr({'src': projects[projName].src, 'class': projects[projName].class, 'srcset': projects[projName].srcset, 'sizes': '100vw', 'alt': 'Enlargement of project screenshot'});
	};

	//Display project discription
	var displayDescription = function(evt) {
		$('.display p').attr('class', 'txt-detail');
		$('.display p').html(projects[evt.target.parentElement.id].message);
	};

	//Listen for project image clicks
	$('.projects').on('click','img', projectClick);
});