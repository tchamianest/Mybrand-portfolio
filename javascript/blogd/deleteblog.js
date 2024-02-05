// call the array in locar storage
// const storedBlogs = localStorage.getItem("blogs");
// const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];
const accept = document.querySelector(".accept");

accept.addEventListener("click", function () {
  console.log("clicked");
  let selectedBlog = blogs.find((blog) => blog.id === accept.id);
  blogs.remove(selectedBlog);
});
