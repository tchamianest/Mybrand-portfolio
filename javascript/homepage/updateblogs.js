///// CHECK IF IS IN LOCAL STORAGE

const storedBlogs = localStorage.getItem("blogs");
const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

//////// eND OF GETING IT FROM LOCAR STORAGES

// console.log(blogs);
//////// select the needed to create the blog

const blog_store_one = document.getElementById("blog-card-store");

const display = function () {
  blogs.forEach((el) => {
    const title = el.title;
    const small_description = el.small_description;
    const image_sr = el.image_src;
    const blogId = el.id;

    ////CREATE ONE CARD TEMPLATE

    const onetemplate = ` <a href="blog.html?id=${blogId}" class="link-blog">
        <div class="blog-review">
          <img src="${image_sr}">
          <div class="like-blog">
            <p>•11 Like</p>
            <p>•22 com</p>
          </div>
          <p class="blog-title">${title}</p>
          <p class="blog-description">${small_description}</p>
      </div>
      </a>`;

    blog_store_one.insertAdjacentHTML("beforeend", onetemplate);
  });
};
display();
