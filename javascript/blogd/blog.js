// SELECT ALL THE NECESSARY

const container = document.querySelector(".blog-page-container");
const trackwidth = container.offsetWidth;
// SELECT DIV BUTTON FOR SINGLE BLOG PAGE
const left_button = document.querySelector(".button-left");
const right_button = document.querySelector(".button-right");

// SELECT FOR THE HOMEPAGE BLOG SLIDER
const left_button_home = document.querySelector(".button-left-home");
const right_button_home = document.querySelector(".button-right-home");

let currentslide = 0;
/// start at the position 0
container.scrollIntoView(0);
right_button.addEventListener("click", function () {
  container.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

left_button.addEventListener("click", function (events) {
  events.preventDefault();
  container.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});
