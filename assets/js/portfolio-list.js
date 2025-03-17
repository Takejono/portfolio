// Filtering Portfolio : folio list page
var elem = document.querySelector(".pf-wrapper");
var iso = new Isotope(elem, {
  itemSelector: ".filtr-item",
  layoutMode: "masonry",
  transitionDuration: "0.3s",
});

// filter functions : sorting item
var filtersElem = document.querySelector(".portfolio-filters");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll(".portfolio-filters");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}
