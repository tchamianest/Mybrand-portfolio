// CALL LOCAR STORAGE DATA
const storedBlogs = localStorage.getItem("blogs");
const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

// Get blog ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("id");
console.log(blogId);

// Find the blog with the corresponding ID
const selectedBlog = blogs.find((blog) => blog.id === parseInt(blogId));

// Display the content of the selected blog
if (selectedBlog) {
  const blogContent = document.getElementById("blog-store-one");
  const blogTemplate = `
        ${selectedBlog.template}`;
  blogContent.insertAdjacentHTML("afterbegin", blogTemplate);
} else {
  console.error("Blog not found");
}

const changeURL = function (newBlogId) {
  window.history.pushState({}, "", `blog.html?id=${newBlogId}`);
};

changeURL(blogId);
