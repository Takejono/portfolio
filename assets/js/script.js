	// Preloader and menu

window.addEventListener('load',function(){
	const preloader = document.querySelector('.preloader')
	preloader.classList.add("loaded");
	function byeLoader(){
		preloader.remove();
	}
	setTimeout (byeLoader, 1800);

	const titleLogo = document.querySelector('.title-logo')
	function titleDraw(){
		titleLogo.classList.add("drawed");
	}
	setTimeout (titleDraw, 750);

	const el = document.querySelector('.menu-link')
	const list = document.querySelectorAll('.menu-link, .menu-list a')
	for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function() {
		el.classList.toggle('active');
		})
	  }
  });

	// Wow Plugin Initialization
	const wow = new WOW({
		animateClass: 'animated',
		offset: 60,
		mobile: true
	});
	wow.init();

	/*--------------------------------
	 Start Header
		----------------------------------*/
    // Background Slider Header
	var elem = document.querySelector('#background-slide');
	var flkty = new Flickity( elem, {
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
	pageDots: false,
	selectedAttraction: 0.01,
    friction: 0.24,
	wrapAround: true,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});

// Carousel folio : single page
	var elem = document.querySelector('#carousel-folio');
	var flkty = new Flickity( elem, {
	cellselector: 'folio-item',
	selectedAttraction: 0.01,
	friction: 0.24,
	wrapAround: true,
    imagesLoaded: true,
	pageDots: false,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});
	
//	var caption = document.querySelector('.caption');
//    flkty.on( 'select', function() {
// set image caption using img's alt
//    caption.textContent = flkty.selectedElement.alt;
//    });



// Carousel folio-nav
	var elem = document.querySelector('#carousel-nav');
	var flkty = new Flickity( elem, {
	selectedAttraction: 0.015,
	friction: 0.24,
	contain: true,
	asNavFor: '#carousel-folio',
	pageDots: false,
	prevNextButtons: false,
    imagesLoaded: true,
	arrowShape: { 
		x0: 25,
		x1: 60, y1: 50,
		x2: 65, y2: 50,
		x3: 40
	  }
	});
	
// Filtering Portfolio : folio list page
	var elem = document.querySelector('.pf-wrapper');
    var iso = new Isotope( elem, {
    itemSelector: '.filtr-item',
    layoutMode: 'masonry',
	transitionDuration: '0.3s'
    });


// filter functions : sorting item
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