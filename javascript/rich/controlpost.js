const editor = document.getElementById("richtext");
const button_post = document.querySelector(".post-blog");

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
  blogs.forEach((blog) => {
    const title = blog.title;
    const image_src = blog.image_src;
    const description = blog.description;
    const smalldescription = blog.small_description;
  });
};

button_post.addEventListener("click", function (events) {
  console.log(editor.value);
});
