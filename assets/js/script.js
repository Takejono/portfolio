(function ($) {
	'use strict';

	/*--------------------------------
	 Start Preloader Animation
	----------------------------------*/
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	/*--------------------------------
			End Preloader Animation
		----------------------------------*/

	// -----------------------------
	//  Count Up
	// -----------------------------
	// function counter() {
	// 	var oTop;
	// 	if ($('.count').length !== 0) {
	// 		oTop = $('.count').offset().top - window.innerHeight;
	// 	}
	// 	if ($(window).scrollTop() > oTop) {
	// 		$('.count').each(function () {
	// 			var $this = $(this),
	// 				countTo = $this.attr('data-count');
	// 			$({
	// 				countNum: $this.text()
	// 			}).animate({
	// 				countNum: countTo
	// 			}, {
	// 				duration: 1000,
	// 				easing: 'swing',
	// 				step: function () {
	// 					$this.text(Math.floor(this.countNum));
	// 				},
	// 				complete: function () {
	// 					$this.text(this.countNum);
	// 				}
	// 			});
	// 		});
	// 	}
	// }
	// -----------------------------
	//  On Scroll
	// -----------------------------
	// $(window).on('scroll', function () {
	// 	counter();
	// });


	/*--------------------------------
	Start Menu
		----------------------------------*/

	// $('.hello').waypoint({
	// 	handler: function (direction) {
	// 		$(".owl-carousel").toggleClass("owl-off");
	// 	}
	// });

	// Toggle Mobile Menu
	$('a.menu-link, .menu-list a').on("click", function () {
		$(".menu-link").toggleClass("active");
		$(".menu-slider").toggleClass("open");
	});
	/*--------------------------------
			 End Menu
		----------------------------------*/


	/*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
	// // Code for Opera Mini
	// var vh = $(window).height();
	// if (navigator.userAgent.indexOf('Opera Mini') != -1) {
	// 	// Setting Fun Facts Value Immediately
	// 	work.start();
	// 	happyClient.start();
	// 	projects.start();
	// 	coffee.start();
	// 	// Setting Skillbar Value Immediately
	// 	$('.skillbar').each(function () {
	// 		$(this).find('.skillbar-bar').animate({
	// 			width: jQuery(this).attr('data-percent')
	// 		}, 0);
	// 	});
	// 	// Removing Bootstrap Class and Re-Style Input
	// 	$("input").removeClass("form-control");
	// 	$("input").css({
	// 		"width": "100%",
	// 		"height": "50px",
	// 		"background": "#fff"
	// 	});
	// 	// Removing Full-Screen Nav
	// 	$(".navigation-icon").css("display", "none");
	// }

	// Code For UC Browser
	// if (navigator.userAgent.indexOf('UCBrowser') != -1) {
	// 	// Removing Full-Screen Nav
	// 	$(".navigation-icon").css("display", "none");
	// 	$(".fun-facts").css({
	// 		"display": "table",
	// 		"margin": "auto"
	// 	});
	// 	// Setting Fun Facts Value Immediately
	// 	work.start();
	// 	happyClient.start();
	// 	projects.start();
	// 	coffee.start();
	// 	// Setting Skillbar Value Immediately
	// 	$('.skillbar').each(function () {
	// 		$(this).find('.skillbar-bar').animate({
	// 			width: jQuery(this).attr('data-percent')
	// 		}, 0);
	// 	});
	// }
	/*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

	/*--------------------------------
			Others
	----------------------------------*/
	// // Code for Internet Explorer
	// if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
	// 	$(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment", "scroll");
	// 	$(".fullscreen-nav-holder").css("width", "100vw");
	// }

	// Wow Plugin Initialization
	var wow = new WOW({
		animateClass: 'animated',
		offset: 70,
		mobile: true
	});
	wow.init();

	// Toggling Visibility of Scroll Up Button
	// $(".hello").waypoint({
	// 	handler: function (direction) {
	// 		$(".scroll-up").toggleClass("scroll-up-show");
	// 	},
	// 	// offset: "bottom-in-view"
	// });
	// $(".sub-button").waypoint({
	// 	handler: function (direction) {
	// 		$(".scroll-up").toggleClass("scroll-up-show");
	// 	},
	// 	// offset: "bottom-in-view"
	// });
	/*--------------------------------
			Others
	----------------------------------*/
}(jQuery));

	/*--------------------------------
	 Start Header
		----------------------------------*/
    // Background Slider Head
	var elem = document.querySelector('#background-slide');
	var flkty = new Flickity( elem, {
	// options
	  fade: true,
	  prevNextButtons: false,
	  pageDots: false,
	  autoPlay: 3000,
	  draggable: false,
	  pauseAutoPlayOnHover: false
	//   wrapAround: true
	});


	/*--------------------------------
		 End Header
	----------------------------------*/

/*--------------------------------
			 Start Portfolio
	----------------------------------*/

    // Carousel recent works
	var elem = document.querySelector('.rw-wrapper');
	var flkty = new Flickity( elem, {
	// options
	selectedAttraction: 0.005,
    friction: 0.14,
	wrapAround: true,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});

	// Carousel folio
	var elem = document.querySelector('#carousel-folio');
	var flkty = new Flickity( elem, {
	// options
	cellAlign: 'center',
	selectedAttraction: 0.005,
	friction: 0.14,
	wrapAround: true,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});

	
    // Filtering Portfolio
	var elem = document.querySelector('.pf-wrapper');
    var iso = new Isotope( elem, {
    // options
    itemSelector: '.filtr-item',
    layoutMode: 'masonry',
	transitionDuration: '0.3s'
    });


// filter functions
// bind filter button click
  var filtersElem = document.querySelector('.portfolio-filters');
  filtersElem.addEventListener( 'click', function( event ) {
	if ( !matchesSelector( event.target, 'button' ) ) {
	  return;
	}
	var filterValue = event.target.getAttribute('data-filter');
	iso.arrange({ filter: filterValue });
  });
  
 // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.portfolio-filters');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
	var buttonGroup = buttonGroups[i];
	radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
	buttonGroup.addEventListener( 'click', function( event ) {
	  // only work with buttons
	  if ( !matchesSelector( event.target, 'button' ) ) {
		return;
	  }
	  buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
	  event.target.classList.add('is-checked');
	});
  }

	/*--------------------------------
			 End Portfolio
	----------------------------------*/

		/*--------------------------------
			 End News
	----------------------------------*/

// const background = document.getElementById("news");
// const getRandomNumber = (maxNum) => {
//   return Math.floor(Math.random() * maxNum);
// };
// const getRandomNewsColor = () => {
// 	const h = getRandomNumber(360);
// 	return `hsl(${h}deg, 100%, 70%)`;
//   };
// const setBackgroundColor = () => {
//   const randomColor = getRandomNewsColor();
//   background.style.backgroundColor = randomColor;
// };
// setBackgroundColor();
// setInterval(() => {
// 	setBackgroundColor();
//   }, 1500);

	/*--------------------------------
			 End News
	----------------------------------*/