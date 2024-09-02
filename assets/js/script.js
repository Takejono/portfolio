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
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});

	
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
	Start Menu
		----------------------------------*/

	$('.hello').waypoint({
		handler: function (direction) {
			$(".owl-carousel").toggleClass("owl-off");
		}
	});

	// Toggle Mobile Menu
	$('a.menu-link, .menu-list a').on("click", function () {
		$(".menu-link").toggleClass("active");
//		$(".menu-slider").slideToggle(300);
		$(".menu-slider").toggleClass("open");
	});
	/*--------------------------------
			 End Menu
		----------------------------------*/

	/*--------------------------------
			 Start Portfolio
	----------------------------------*/

    // Carousel recent works
	var elem = document.querySelector('.rw-wrapper');
	var flkty = new Flickity( elem, {
	// options
	//   cellAlign: 'center',
	selectedAttraction: 0.005,
    friction: 0.1,
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
	// percentPosition: true,
	// masonry: {
	// 	columnWidth: 100
	//   },
	transitionDuration: '0.3s'
    });

    // $('portfolio-navigation').on( 'click', 'input', function() {
	// 	// get filter value from input value
	// 	var filterValue = this.value;
	// 	// use filterFn if matches value
	// 	filterValue = filterFns[ filterValue ] || filterValue;
	// 	$grid.isotope({ filter: filterValue });
	// });
 
    // Carousel folio
	var elem = document.querySelector('#carousel-folio');
	var flkty = new Flickity( elem, {
	// options
	cellAlign: 'center',
	selectedAttraction: 0.005,
	friction: 0.1,
	wrapAround: true,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});

	/*--------------------------------
			 End Portfolio
	----------------------------------*/

	/*--------------------------------
			 Start Testimonials
	----------------------------------*/
	// Configure and Initialize Owl Carousel

	
	/*--------------------------------
			End Testimonials
	----------------------------------*/

	/*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
	// Code for Opera Mini
	var vh = $(window).height();
	if (navigator.userAgent.indexOf('Opera Mini') != -1) {
		// Setting Fun Facts Value Immediately
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
		// Removing Bootstrap Class and Re-Style Input
		$("input").removeClass("form-control");
		$("input").css({
			"width": "100%",
			"height": "50px",
			"background": "#fff"
		});
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
	}

	// Code For UC Browser
	if (navigator.userAgent.indexOf('UCBrowser') != -1) {
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
		$(".fun-facts").css({
			"display": "table",
			"margin": "auto"
		});
		// Setting Fun Facts Value Immediately
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
	}
	/*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

	/*--------------------------------
			Others
	----------------------------------*/
	// Code for Internet Explorer
	if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		$(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment", "scroll");
		$(".fullscreen-nav-holder").css("width", "100vw");
	}

	// Wow Plugin Initialization
	var wow = new WOW({
		animateClass: 'animated',
		offset: 70,
		mobile: true
	});
	wow.init();

	// Toggling Visibility of Scroll Up Button
	$(".hello").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		// offset: "bottom-in-view"
	});
	$(".sub-button").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		// offset: "bottom-in-view"
	});
	/*--------------------------------
			Others
	----------------------------------*/
}(jQuery));
