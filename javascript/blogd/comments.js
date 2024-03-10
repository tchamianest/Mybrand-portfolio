const comment_container = document.getElementById("comments-adder");
const comments_input = document.getElementById("comments--inputs");
const button = document.getElementById("comments-button");
const comments_count = document.getElementById("comments-number");
//////////////////////////////////////////////////////////////////////////////////
// console.log(blogId);

let commentsofblogs;
let likecount;
let firstlikeID;
const handleblogs = async () => {
  try {
    const commentsofblogs = await fetch(
      ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
    );
    const likes = await fetch(
      ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
    );
    const commentjdon = await commentsofblogs.json();
    const likejson = await likes.json();
    commentsArray = commentjdon.Allsingleblogcomments;
    likecount = likejson.likes;
    // console.log(likecount);
    // if (likecount.length > 0) {
    //   firstlikeID = likecount[0]._id;
    // }
    // console.log(firstlikeID);
    const display = function () {
      comment_container.innerHTML = "";
      commentsArray.forEach((com) => {
        nam = com.names;
        comments = com.comment;

        const template = `
       <div class="one-comments">
        <div class="photo">
          <img src="imagess/uknown user.png" />
        </div>
        <div class="text-comm">
          <p class="name">${nam}</p>
          <p class="comments-descr">${comments}</p>
        </div>
        </div>`;
        comments_count.innerHTML = commentsArray.length;

        comment_container.insertAdjacentHTML("afterbegin", template);
      });
    };
    display();

    ////////////////post comments and likes

    const tokenstore = localStorage.getItem("authToken");
    const userType = localStorage.getItem("userType");
    button.addEventListener("click", async function (e) {
      e.preventDefault();
      button.innerHTML = `<div class="loader-button"></div>`;
      console.log(tokenstore);
      console.log(userType);

      if (!tokenstore) {
        window.location.href = "login.html"; // Replace "/home" with the appropriate home page URL
      } else {
        const commentsnew = comments_input.value;
        const usename = localStorage.getItem("userEmail");
        let user_name;
        if (usename) {
          const final = usename.split("@")[0];
          user_name = final;
        } else {
          user_name = "unkown";
        }

        const objc = { name: `${user_name}`, comment: `${commentsnew}` };
        try {
          const response = await fetch(
            ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(objc),
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          comments_input.value = "";
          const updatedCommentsResponse = await fetch(
            `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
          );
          const updatedCommentsJson = await updatedCommentsResponse.json();
          commentsArray = updatedCommentsJson.Allsingleblogcomments;
          display();
          button.innerHTML = `Comments >>`;
        } catch (err) {
          button.innerHTML = `Comments >>`;
          console.log(err);
        }
      }
    });

    // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅likes handleblogs
    const like_number = document.getElementById("likes-number");
    const like_img = document.getElementById("like-icons");

    let like_counter = likecount.length;

    like_img.addEventListener("click", async function (e) {
      e.preventDefault();

      if (like_img.getAttribute("src") !== "imagess/icons/liked.png") {
        like_img.setAttribute("src", "imagess/icons/liked.png");

        const objc = { like: true };

        const response = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(objc),
          }
        );
      } else {
        like_img.setAttribute("src", "imagess/icons/like-svgrepo-com.svg");

        const likes = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
        );
        const likejson = await likes.json();
        commentsArray = commentjdon.Allsingleblogcomments;
        likecount = likejson.likes;

        if (likecount.length > 0) {
          firstlikeID = likecount[0]._id;
        }
        const response = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/likes/${firstlikeID}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
      }
      const updatedLikesResponse = await fetch(
        `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
      );
      const updatedLikesJson = await updatedLikesResponse.json();
      like_counter = updatedLikesJson.likes.length;
      like_number.innerHTML = like_counter;
    });
    like_number.innerHTML = like_counter;
  } catch (err) {
    console.log(err);
  }
};
handleblogs();

// if (comments) {
///////////////////////////////////////////////////////////

//////// USE ENTER KEY DOWN
// comments_input.addEventListener("keydown", function (events) {
//   if (events.key === "Enter") {
//     const commentsnew = comments_input.value;

//     const user_name = "unkown";

//     const objc = { name: `${user_name}`, comm: `${commentsnew}` };

//     ////add to arrray
//     comment_info.push(objc);
//     localStorage.setItem("blogs", JSON.stringify(blogs));

//     comments_input.value = "";
//     //   comment_container.insertAdjacentHTML("afterbegin", template);
//     display();
//   }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////IMPLEMENTS THE LIKES

// }
