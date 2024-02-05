// CALL LOCAR STORAGE DATA
const storedBlogs = localStorage.getItem("blogs");
const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

// Get blog ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("id");
console.log(blogId);

// Find the blog with the corresponding ID
let selectedBlog = blogs.find((blog) => blog.id === parseInt(blogId));

// Display the content of the selected blog

if (selectedBlog) {
  const title_blog = document.querySelector(".blog-title");
  const img_blog = document.getElementById("image-blog");
  const p_Fulldesc = document.getElementById("text-desc");
  // Set the image source only if imgsc is defined
  if (selectedBlog.image_src) {
    img_blog.src = selectedBlog.image_src;
  }

  title_blog.innerHTML = selectedBlog.title;
  p_Fulldesc.style.background = "transparent";
  p_Fulldesc.innerHTML = selectedBlog.template;
} else {
  console.error("Blog not found");
}

const changeURL = function (newBlogId) {
  window.history.pushState({}, "", `blog.html?id=${newBlogId}`);
};

changeURL(blogId);

////////////////////////
