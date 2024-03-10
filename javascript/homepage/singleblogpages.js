const blog_store_one = document.getElementById("single-blog-container-slider");

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

    const onetemplate = `<div class="blogs-container"> <a href="blogs.html?id=${blogId}" class="link-blog background-remover">
              <div class="blog-review background-remover">
                <img src="${image_sr}" class="background-remover image-size-singleblog"  />
                <p class="blog-title background-remover changer-title">
                ${title}
                </p>
                <p class="blog-description background-remover">
                ${small_description}
              </div>
            </a></div>`;

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
