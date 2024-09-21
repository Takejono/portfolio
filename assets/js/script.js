window.addEventListener('load',function(){
	document.querySelector('.preloader').classList.add("loaded");

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
	pageDots: false,
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