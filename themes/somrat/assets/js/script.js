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
	//   cellAlign: 'center',
	  prevNextButtons: false,
	  pageDots: false,
	  autoPlay: 3000,
	  draggable: false,
	  pauseAutoPlayOnHover: false,
	  fade: true,
	  wrapAround: true
	//   arrowShape: { 
	// 	x0: 25,
	// 	x1: 60, y1: 50,
	// 	x2: 65, y2: 50,
	// 	x3: 40
	//   }
	});

		
	// Initiating Background Slider
	// var backgroundSlide = $('#background-slide');
	// backgroundSlide.owlCarousel({
	// 	loop: true,
	// 	items: 1,
	// 	dots: false,
	// 	autoplay: true,
	// 	autoplayTimeout: 5000,
	// 	animateOut: 'fadeOut'
	// });
	// $('.slider-prev-button').on("click", function () {
	// 	backgroundSlide.trigger('prev.owl.carousel');
	// });
	// $('.slider-next-button').on("click", function () {
	// 	backgroundSlide.trigger('next.owl.carousel');
	// });
	// // Setting Up Background Images
	// function SliderBackground() {
	// 	if ($(".owl-full-width .slider").length) {
	// 		$(".owl-full-width .slider").each(function () {
	// 			var $this = $(this);
	// 			var img = $this.children(img);
	// 			var imgSrc = img.attr("src");
	// 			$this.css({
	// 				backgroundImage: "url(" + imgSrc + ")",
	// 				backgroundSize: "cover",
	// 				backgroundPosition: "center center"
	// 			});
	// 		});
	// 	}
	// }
	// // Initializing Background Setting Function
	// SliderBackground();

	/*--------------------------------
		 End Header
	----------------------------------*/

	/*--------------------------------
	Start Menu
		----------------------------------*/
	// Highlighting Menu on Scroll Through Sections
	// $(window).on('scroll', function () {
	// 	$('section').each(function () {
	// 		if ($(window).scrollTop() + 50 >= $(this).offset().top) {
	// 			var id = $(this).attr('id');
	// 			$('.menu-item').removeClass('active');
	// 			$(".menu-item." + id).addClass("active");
	// 			$(".mobile-menu-item").removeClass("active");
	// 			$(".mobile-menu-item." + id).addClass("active");
	// 		}
	// 	});
	// });

	// Styling Menu on Scroll
	// $('.hello').waypoint({
	// 	handler: function (direction) {
	// 		// Fixing Menu after leaving Header Section
	// 		// $(".menu").toggleClass("menu-fix");
	// 		// Changing Menu background after leaving Header Section
	// 		// $(".menu-item").toggleClass("menu-item-transparent");
	// 		// Toggling Mobile Menu Visibility
	// 		// $(".mobile-menu").toggleClass("mobile-menu-fix");
	// 		// Auto-Collapsing Mobile Menu When Left Open
	// 		// var a = $(".menu-link").attr("class");
	// 		// if (direction == "up" && a == "menu-link active") {
	// 		// 	$(".menu-link").trigger("click");
	// 		// }
	// 	}
	// });

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
	var elem = document.querySelector('.main-carousel');
	var flkty = new Flickity( elem, {
	// options
	//   cellAlign: 'center',
	//   contain: true
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
	percentPosition: true,
	// masonry: {
	// 	columnWidth: 100
	//   },
	transitionDuration: '0.3s'
    });


    // $('.portfolio-navigation').on( 'click', 'input', function() {
	// 	// get filter value from input value
	// 	var filterValue = this.value;
	// 	// use filterFn if matches value
	// 	filterValue = filterFns[ filterValue ] || filterValue;
	// 	$grid.isotope({ filter: filterValue });
	// });
	  

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
