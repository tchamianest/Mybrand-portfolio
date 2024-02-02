let blogs = [
  {
    title: "Reasons Business needs Agency.",
    id: 1,
    template: "",

    image_src: "",
    small_description: "",
  },
];

///// CHECK IF IS IN LOCAL STORAGE

const storedBlogs = localStorage.getItem("blogs");
blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

//////// eND OF GETING IT FROM LOCAR STORAGES

const editor = document.getElementById("richtext");
const button_post = document.querySelector(".post-blog");
const title = document.getElementById("title-of-blog");
const clealocar = document.getElementById("clear-blog");

///SELECT BLOG CONATAIRNER
const blog_dash_store = document.querySelector(".blog-update");

////// blog container

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

  const data_contained = dataparse.body.children;
  // console.log(dataparse.body.children[1].children[0].src);
  // console.log(data_contained[0].children[0].src);

  let imagesrc;
  let smalldesc;
  if (typeof data_contained[0].children[0].src === "undefined") {
    imagesrc = dataparse.body.children[1].children[0].src;
  } else {
    imagesrc = data_contained[0].children[0].src;
  }
  if (data_contained[1].textContent) {
    smalldesc = data_contained[1].textContent;
  }
  const newobj = {
    id: blogs.length + 1,
    title: title.value,

    template: `${dataparse.body.innerHTML}`,

    image_src: `${imagesrc}`,
    small_description: smalldesc,
  };
  blogs.push(newobj);
  // console.log(dataparse.body.innerHTML);
  console.log(blogs);

  //// store my abject in locar storage
  localStorage.setItem("blogs", JSON.stringify(blogs));
  display();
});

////////CLEAR LOCAR STORAGE
clealocar.addEventListener("click", function () {
  localStorage.clear();
});
