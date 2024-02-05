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
const image = document.getElementById("imageInput");
let imgs = "";
////////////////////////////////////////////////////
image.addEventListener("change", function () {
  if (imageInput.files.length > 0) {
    const selectedFile = imageInput.files[0];
    const reader = new FileReader();

    // Create a new image element
    const previewImage = new Image();

    previewImage.onload = function () {
      imgs = previewImage.src;
      console.log(previewImage);
      console.log("Image Src:", imgs);
    };

    // Read the file as a data URL (base64 encoded image)
    reader.onload = function (e) {
      // Set the data URL as the source of the preview image
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
  }
});

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

  let smalldesc;

  if (data_contained[0].textContent) {
    smalldesc = data_contained[0].textContent;
  }
  const newobj = {
    id: blogs.length + 1,
    title: title.value,
    comments: [],
    like: 0,

    template: `${dataparse.body.innerHTML}`,

    image_src: `${imgs}`,
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
