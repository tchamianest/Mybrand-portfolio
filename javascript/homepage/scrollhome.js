const navconatinre = document.querySelectorAll("li");

navconatinre.forEach((el) => {
  el.addEventListener("click", function (event) {
    /// change based on the position
    const rect = el.getClientRects();
    // const { top, bottom } = (rect.top, rect.bottom);
    // console.log("Top:", rect.top, bottom);

    // IF IT IS THE LOGIN LINK I NEED TO GO TO OTHER PAGES
    if (el.children[0].innerHTML === "Login/Signup ") {
      window.location.href = "login.html";
    } else {
      // console.log(el.children[0]);
      event.preventDefault();
      navconatinre.forEach((link) => {
        link.children[0].classList.add("color-tex");
        link.children[0].classList.remove("active-dash");
      });

      // console.log(el.children[0].innerHTML);

      el.children[0].classList.remove("color-tex");
      el.children[0].classList.add("active-dash");

      // get targeted section
      const targetsection = this.children[0].getAttribute("href").slice(1);
      const sectioncordinate = document.getElementById(targetsection);

      sectioncordinate.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// check the position for the bound
const baoundary = document.getElementById("skills-section");

const bound = baoundary.getClientRects();
console.log(bound);
