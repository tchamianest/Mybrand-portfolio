const links = document.querySelectorAll('a[href^="#"]');

links.forEach((el) => {
  el.addEventListener("click", function (event) {
    // prevent defort
    event.preventDefault();
    // console.log(el);
    const newname = el.hash.slice(1);

    // console.log(el.children[0].innerHTML);

    links.forEach((remo) => {
      /// first remove the color for the first
      remo.children[0].classList.add("color-tex");
      remo.children[0].classList.remove("active-dash");
    });

    // add the color for the clicked link
    el.children[0].classList.remove("color-tex");
    el.children[0].classList.add("active-dash");

    ///// after this i need to add scroll smotth
    const targethref = this.getAttribute("href").slice(1);
    const sectionidget = document.getElementById(targethref);

    // here i need to check if this section is exist

    // this is the smoth scroll but i need to use direct one
    // if (sectionidget) sectionidget.scrollIntoView({ behavior: "smooth" });
    // DIRECT SCROLL
    if (sectionidget) sectionidget.scrollIntoView({ behavior: "auto" });
  });
});
