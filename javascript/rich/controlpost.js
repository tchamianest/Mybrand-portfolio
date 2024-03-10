let blogs = [
  {
    title: "Reasons Business needs Agency.",
    id: 1,
    template: "",

    image_src: "",
    small_description: "",
  },
];
/// CHECK FOR THE BLOG
const fecthBlogsToApi = async () => {
  try {
    const response = await fetch(
      " https://mybrand-be-2-jfbq.onrender.com/api/blogs"
    );
    const data = await response.json();
    const final = await data.Blogs;
    console.log(final);
    blogs = await final;

    ///// CHECK IF IS IN LOCAL STORAGE

    // const storedBlogs = localStorage.getItem("blogs");
    // blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

    //////// eND OF GETING IT FROM LOCAR STORAGES
    var editor1 = new RichTextEditor("richtext");
    const editor = document.getElementById("richtext");
    const button_post = document.querySelector(".post-blog");
    const title = document.getElementById("title-of-blog");
    const clealocar = document.getElementById("clear-blog");
    const image = document.getElementById("imageInput");
    const Logoutbutton = document.getElementById("Logout-button");
    let imgs = "";

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    clealocar.style.display = "none";
    button_post.style.display = "block";

    Logoutbutton.addEventListener("click", function () {
      localStorage.clear();
      window.location.href = "index.html";
    });

    const blog_dash_store = document.querySelector(".blog-update");

    ////// blog container

    const tokenstore = localStorage.getItem("authToken");
    const headers = new Headers({
      Authorization: tokenstore,
      "Content-Type": "application/json",
    });

    // /////////////////////////////////FUNCTION FOR DISPLAY BLOG
    const display = function () {
      blog_dash_store.innerHTML = "";
      blogs.forEach((blog) => {
        const title = blog.title;

        ///////TEMPLATE FOR DAHBORD CONTROL
        const dashBlogtemp = `<div class="text-not">
          <p>${title}</p>
          <button id="${blog._id}"  class="accept update-single-blogs">update</button>
          <button id="${blog._id}" class="delete delete-blog">delete</button>
        </div>`;

        blog_dash_store.insertAdjacentHTML("afterbegin", dashBlogtemp);

        const deleted = document.querySelector(".delete-blog");

        deleted.addEventListener("click", async function () {
          console.log("clicked");
          console.log(deleted.id);
          const response = await fetch(
            `https://mybrand-be-2-jfbq.onrender.com/api/blog/${deleted.id}`,
            {
              method: "DELETE",
              headers: headers,
            }
          )
            .then((res) => {
              return res;
            })
            .then((data) => {
              console.log(data);
            });

          console.log("Blog deleted successfully");
          const responsecah = await fetch(
            " https://mybrand-be-2-jfbq.onrender.com/api/blogs"
          );
          const data = await responsecah.json();
          const final = await data.Blogs;
          console.log(final);
          blogs = await final;
          display();
        });
        const update = document.querySelector(".update-single-blogs");

        update.addEventListener("click", async function () {
          button_post.style.display = "none";
          clealocar.style.display = "block";
          console.log("update logo");
          let blogToUpdate;
          const response = await fetch(
            `https://mybrand-be-2-jfbq.onrender.com/api/blog/${update.id}`,
            {
              method: "GET",
              headers: headers,
            }
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              blogToUpdate = data.blogs;
            });

          console.log(blogToUpdate);
          console.log(blogToUpdate.title);
          document.getElementById("title-of-blog").value = blogToUpdate.title;
          editor1.setHTML(`${blogToUpdate.template}`);

          const innertext = editor.value;
          const parser = new DOMParser();
          const dataparse = parser.parseFromString(innertext, "text/html");
          dataparse.body.innerHTML = blogToUpdate.template;

          ////UPDATE BUTTON 🎇🎇
          clealocar.addEventListener("click", async function () {
            const title = document.getElementById("title-of-blog");
            const innertext = editor.value;
            const parser = new DOMParser();
            const dataparse = parser.parseFromString(innertext, "text/html");

            const data_contained = dataparse.body.children;
            let smalldesc;

            if (data_contained[0].textContent) {
              smalldesc = data_contained[0].textContent;
            }
            // const formData = new FormData();
            // console.log(title.value);
            const update_data = {
              title: title.value,
              like: 0,
              template: dataparse.body.innerHTML,
              small_description: smalldesc,
            };
            // console.log(JSON.stringify(update_data));

            try {
              // console.log(tokenstore);
              const headero = {
                Authorization: tokenstore, // Replace with your actual access token
                "Content-type": "application/json",
              };
              // console.log(headero);
              const response = await fetch(
                `https://mybrand-be-2-jfbq.onrender.com/api/blog/${update.id}`,
                {
                  method: "PATCH",
                  headers: headero,
                  body: JSON.stringify(update_data),
                }
              );
              if (response.ok) {
                console.log("Blog updated successfully");

                const responsecah = await fetch(
                  " https://mybrand-be-2-jfbq.onrender.com/api/blogs"
                );
                const data = await responsecah.json();
                const final = await data.Blogs;
                console.log(final);
                blogs = await final;
                document.getElementById("title-of-blog").value = " ";
                editor1.setHTML(` `);
                display();
                clealocar.style.display = "none";
                button_post.style.display = "block";
              }
            } catch (error) {
              console.error("Error creating blog:", error.message);
            }
          });
        });
      });
    };
    display();

    button_post.addEventListener("click", async function (events) {
      const innertext = editor.value;
      const parser = new DOMParser();
      const dataparse = parser.parseFromString(innertext, "text/html");

      const data_contained = dataparse.body.children;
      let smalldesc;
      const formData = new FormData();

      if (data_contained[0].textContent) {
        smalldesc = data_contained[0].textContent;
      }

      formData.append("image", imageInput.files[0]);
      console.log(title.value);
      console.log(dataparse.body.innerHTML);
      formData.append("title", title.value);
      formData.append("like", "0");
      formData.append("template", dataparse.body.innerHTML);
      formData.append("small_description", smalldesc);

      try {
        const response = await fetch(
          "https://mybrand-be-2-jfbq.onrender.com/api/blogs",
          {
            method: "POST",
            headers: headers,
            body: formData,
          }
        )
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((dat) => {
            console.log(dat);
          });
        document.getElementById("title-of-blog").value = " ";
        editor1.setHTML(` `);
        const responsecah = await fetch(
          " https://mybrand-be-2-jfbq.onrender.com/api/blogs"
        );
        const data = await responsecah.json();
        const final = await data.Blogs;
        console.log(final);
        blogs = await final;
        display();
      } catch (error) {
        console.error("Error creating blog:", error.message);
      }

      display();
    });
  } catch (err) {
    console.log(err);
  }
};
fecthBlogsToApi();
