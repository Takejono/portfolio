// Background Slider Header
var elem = document.querySelector("#background-slide");
var flkty = new Flickity(elem, {
  fade: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 3000,
  draggable: false,
  pauseAutoPlayOnHover: false,
  //   wrapAround: true
});

// Carousel recent works
var elem = document.querySelector(".rw-wrapper");
var flktyRW = new Flickity(elem, {
  pageDots: false,
  selectedAttraction: 0.01,
  friction: 0.24,
  wrapAround: true,
  arrowShape: {
    x0: 25,
    x1: 60,
    y1: 50,
    x2: 65,
    y2: 50,
    x3: 40,
  },
});
