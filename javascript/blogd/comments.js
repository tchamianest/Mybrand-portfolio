const comment_info = [
  { name: "erenest", comm: "😂😂😂😂😂 this things are so funy" },
  { name: "unknown", comm: "nice picture of blog 👌👌👌" },
];

/////////////////////////
const comment_container = document.getElementById("comments-adder");
const comments_input = document.getElementById("comments--inputs");
const button = document.getElementById("comments-button");
const comments_count = document.getElementById("comments-number");
/////////////////////////////////////////////////////////////////////////////
const display = function () {
  comment_container.innerHTML = "";
  comment_info.forEach((com) => {
    nam = com.name;
    comments = com.comm;

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
    comments_count.innerHTML = comment_info.length;

    comment_container.insertAdjacentHTML("afterbegin", template);
  });
};
display();
///////////////////////////////////////////////////////////////////////////////////////////
//////////IMPLEMENTS  THE TEMPLATE OF COMMENTS

button.addEventListener("click", function (e) {
  e.preventDefault();

  ///////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////
  const commentsnew = comments_input.value;

  const user_name = "unkown";

  const objc = { name: `${user_name}`, comm: `${commentsnew}` };

  ////add to arrray
  comment_info.push(objc);
  //   comment_container.insertAdjacentHTML("afterbegin", template);
  display();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////IMPLEMENTS THE LIKES
const like_number = document.getElementById("likes-number");
const like_img = document.getElementById("like-icons");

let like_counter = 0;

like_img.addEventListener("click", function (e) {
  e.preventDefault();

  if (like_img.getAttribute("src") !== "imagess/icons/liked.png") {
    like_img.setAttribute("src", "imagess/icons/liked.png");
    like_counter++;
    like_number.innerHTML = like_counter;
  }
});
