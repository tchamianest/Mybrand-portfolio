const fecthBlogsToApimessage = async () => {
  try {
    const tokenstore = localStorage.getItem("authToken");
    const headers = new Headers({
      Authorization: tokenstore,
      "Content-Type": "application/json",
    });
    const responsemessage = await fetch(
      " https://mybrand-be-2-jfbq.onrender.com/api/message",
      {
        method: "GET",
        headers: headers,
      }
    );
    const data = await responsemessage.json();
    const final = await data.message;
    message = await final;
    console.log(...final);

    const messagecontainer = document.querySelector(".notification-container");
    // /////////////////////////////////FUNCTION FOR DISPLAY BLOG
    const displaymessage = function () {
      messagecontainer.innerHTML = "";
      message.forEach((blog) => {
        const title = blog.title;

        ///////TEMPLATE FOR DAHBORD CONTROL
        const dashBlogtemp = `  <div class="one-chart">
        <p class="header-top">${blog.email}🫂</p>
        <p class="decription-notif">message:
          ${blog.messages} <br/>
          reply:${blog.reply}
        </p>
        <div class="button">
          <input type="text" id="reply-text" style="flex: 1" />
          <button class="accept">Read ✅</button>
          <button id="${blog._id}"  class="delete reply-message">Reply ⛔</button>
        </div>
      </div>`;

        messagecontainer.insertAdjacentHTML("afterbegin", dashBlogtemp);

        const repltid = document.getElementById("reply-text");
        const replymessage = document.querySelector(".reply-message");

        replymessage.addEventListener("click", async function () {
          console.log("clicked");
          console.log(replymessage.id);

          const replytest = {
            reply: repltid.value,
          };
          // console.log(repltid.value);
          const response = await fetch(
            `https://mybrand-be-2-jfbq.onrender.com/api/message/${replymessage.id}/reply`,
            {
              method: "PATCH",
              headers: headers,
              body: JSON.stringify(replytest),
            }
          )
            .then((res) => {
              return res;
            })
            .then((data) => {
              console.log(data.json());
            });
          //   const responseData = await response.json();

          console.log("message replyed successfully");
          const params = {
            name: blog.email,
            email: blog.email,
            message: repltid.value,
          };
          const serviceID = "service_lww5fm5";
          const templateID = "template_cf4z095";
          const emailresponse = await emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
              repltid.value = " ";
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(blog.email);
          const responsemessage = await fetch(
            " https://mybrand-be-2-jfbq.onrender.com/api/message",
            {
              method: "GET",
              headers: headers,
            }
          );
          const data = await responsemessage.json();
          const final = await data.message;
          message = await final;
          displaymessage();
        });
      });
    };
    displaymessage();
  } catch (err) {
    console.log(err);
  }
};

fecthBlogsToApimessage();
