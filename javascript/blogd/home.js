const left_button_home = document.querySelector(".button-left-home");
const right_button_home = document.querySelector(".button-right-home");
const container_home = document.querySelector(".blogs-with-button");

left_button_home.addEventListener("click", function (events) {
  events.preventDefault();
  console.log("scroll");
  container_home.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

// /////LIGHT BUTTON IMPLEMENTS
right_button_home.addEventListener("click", function (events) {
  events.preventDefault();

  container_home.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});
