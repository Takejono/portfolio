// Preloader and menu

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("loaded");
  function byeLoader() {
    preloader.remove();
  }
  setTimeout(byeLoader, 1800);

  const titleLogo = document.querySelector(".title-logo");
  function titleDraw() {
    titleLogo.classList.add("drawed");
  }
  setTimeout(titleDraw, 750);

  // const el = document.querySelector('#menu-link')
  const el = document.getElementById("menu-nav");
  const list = document.querySelectorAll(
    "#menu-back, .menu-icon, .menu-list-link",
  );
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
      el.classList.toggle("active");
    });
  }
});

// Wow Plugin Initialization
const wow = new WOW({
  animateClass: "animated",
  offset: 60,
  mobile: true,
});
wow.init();
