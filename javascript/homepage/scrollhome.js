const navconatinre = document.querySelectorAll("li");
console.log(navconatinre);
navconatinre.forEach((el) => {
  if (el.children[0].innerHTML !== "Login") {
    el.addEventListener("click", function (event) {
      console.log(el.children[0]);
      event.preventDefault();
      navconatinre.forEach((link) => {
        link.children[0].classList.add("color-tex");
        link.children[0].classList.remove("active-dash");
      });

      console.log(el.children[0].innerHTML);

      el.children[0].classList.remove("color-tex");
      el.children[0].classList.add("active-dash");

      // get targeted section
      const targetsection = this.children[0].getAttribute("href").slice(1);
      const sectioncordinate = document.getElementById(targetsection);

      sectioncordinate.scrollIntoView({ behavior: "smooth" });
    });
  }
});
