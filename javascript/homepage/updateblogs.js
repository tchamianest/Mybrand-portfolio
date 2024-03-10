///// CHECK IF IS IN LOCAL STORAGE

// const storedBlogs = localStorage.getItem("blogs");
// const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

//////// eND OF GETING IT FROM LOCAR STORAGES

// console.log(blogs);
//////// select the needed to create the blog

const blog_store_one = document.getElementById("blog-card-store");

const display = function (blogs) {
  blogs.forEach(async (el) => {
    const title = el.title;
    const small_description = el.small_description;
    const image_sr = el.image_src;
    const blogId = el._id;
    const com = el.comments.length;

    ////CREATE ONE CARD TEMPLATE

    const updatedCommentsResponse = await fetch(
      `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
    );
    const updatedCommentsJson = await updatedCommentsResponse.json();
    let commentsArray = updatedCommentsJson.Allsingleblogcomments.length;

    const updatedLikesResponse = await fetch(
      `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
    );
    const updatedLikesJson = await updatedLikesResponse.json();
    let like_counter = updatedLikesJson.likes.length;
    let onetemplate;
    document.querySelector(".button-left-home").style.display = "block";
    document.querySelector(".button-right-home").style.display = "block";
    document.querySelector(".loader-button").style.display = "none";

    onetemplate = ` <a href="blogs.html?id=${blogId}"  class="link-blog">
            <div class="blog-review">
              <img src="${image_sr}">
              <div class="like-blog">
                <p>•${like_counter} Like</p>
                <p>•${commentsArray} com</p>
              </div>
              <p class="blog-title">${title}</p>
              <p class="blog-description">${small_description}</p>
          </div>
          </a>`;

    blog_store_one.insertAdjacentHTML("afterbegin", onetemplate);
  });
};

//// insteady of locar host let me use online one
const fecthBlogsToApi = async () => {
  try {
    const response = await fetch(
      " https://mybrand-be-2-jfbq.onrender.com/api/blogs"
    );
    const data = await response.json();
    const final = await data.Blogs;
    console.log(final);
    display(final);
  } catch (err) {
    console.log(err);
  }
};
fecthBlogsToApi();
blog_store_one.addEventListener("click", function (event) {
  const clickedLink = event.target.closest(".link-blog");

  if (clickedLink) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const blogId = clickedLink.getAttribute("href").split("=")[1];
    window.location.href = `blogs.html?id=${blogId}`;
  }
});
