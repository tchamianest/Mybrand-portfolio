const editor = document.getElementById("richtext");
const button_post = document.querySelector(".post-blog");

///SELECT BLOG CONATAIRNER
const blog_dash_store = document.querySelector(".blog-update");

////// blog container
const blogs = [
  {
    title: "Reasons Business needs Agency.",
    description:
      "Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.",
    image_src: "",
    small_description:
      "Reasons Business needs Agency.Reasons Business needs Agency.",
  },
  {
    title: "Reasons Business needs Agency.",
    description:
      "Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.",
    image_src: "",
    small_description:
      "Reasons Business needs Agency.Reasons Business needs Agency.",
  },
  {
    title: "Reasons Business needs Agency.",
    description:
      "Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.Reasons Business needs Agency.",
    image_src: "",
    small_description:
      "Reasons Business needs Agency.Reasons Business needs Agency.",
  },
];

// /////////////////////////////////FUNCTION FOR DISPLAY BLOG
const display = function () {
  blog_dash_store.innerHTML = "";
  blogs.forEach((blog) => {
    const title = blog.title;
    const image_src = blog.image_src;
    const description = blog.description;
    const smalldescription = blog.small_description;

    ///////TEMPLATE FOR DAHBORD CONTROL
    const dashBlogtemp = `<div class="text-not">
    <p>${title}</p>
    <button class="accept">update</button>
    <button class="delete">delete</button>
  </div>`;

    blog_dash_store.insertAdjacentHTML("afterbegin", dashBlogtemp);
  });
};
display();

button_post.addEventListener("click", function (events) {
  const innertext = editor.value;
  const parser = new DOMParser();
  const dataparse = parser.parseFromString(innertext, "text/html");

  console.log(dataparse.body);
  const data_contained = dataparse.body.children;

  //   Array.from(data_contained).forEach((el) => {
  //     console.log(el.textContent);
  //   });
  const newtitle = data_contained[0].innerHTML;
  const newobj = {
    title: newtitle,
    description: "",

    image_src: "",
    small_description: "",
  };
  blogs.push(newobj);
  console.log(data_contained[0].textContent);
  display();
});
