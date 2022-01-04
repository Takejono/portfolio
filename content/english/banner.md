---
title : "Takeshi JONOO"
# full screen navigation
first_name : "Takeshi"
last_name : "JONOO"
bg_image : "images/backgrounds/full-nav-bg.jpg"
# animated text loop
occupations:
- "Painter"
- "Illustrator"
- "Graphic Designer"

# slider background image loop
slider_images:
- "images/slider/slider-1.jpg"
- "images/slider/slider-2.jpg"
- "images/slider/slider-3.jpg"
- "images/slider/slider-4.jpg"
- "images/slider/slider-5.jpg"

# button
button:
  enable : false
  label : "CONTACT"
  link : "#contact"


# custom style
custom_class: ""
custom_attributes: ""
custom_css: "
.header .slider::after, .header::after {
  background: rgba(50, 50, 50, 0.3);  
}
.full-nav-icons .fab.fa-facebook-f, .footer-icons .fab.fa-facebook-f {
  padding: 7px 11px;
}
.fullscreen-nav-container::after {
  background: rgba(0,0,0,0.2);
}
ul.fullscreen-nav-holder a {
  font-size: 30px;
}
.navigation-icon:hover .burger-menu span {
  background: #1a1a1a;
}
input:checked+label span {
  background: #1a1a1a;
}
.logo, .mobile-menu-logo, .mr-auto {
  display: none !important;
}
.animated-text, .introduction h1 {
  font-family: Caveat;
  font-size: 42px;
}
"

---
