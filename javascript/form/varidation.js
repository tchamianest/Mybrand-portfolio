const dange_text = document.querySelector(".validation-message-name");
const dange_email = document.querySelector(".validation-message-email");
const input_name = document.getElementById("name-input");
const input_email = document.getElementById("email-validation");
const submitt_button = document.getElementById("submitt-contact");
const messagebox = document.getElementById("message-to-admin");
// const login_button = document.getElementById("login-button");

// VARID EMAIL REGEX
const varidemailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let varid = false;
///function name validate message
const name_valid = function (style, message) {
  dange_text.style.display = `${style}`;
  dange_text.innerHTML = `⚠️ ${message}`;
};

const email_valid = function (style, message) {
  dange_email.style.display = `${style}`;
  dange_email.innerHTML = `⚠️ ${message}`;
};

// FIRST CHECK BEFOR THE CLICK

submitt_button.addEventListener("click", function (event) {
  if (input_name.value.trim() === "") {
    varid = false;
    name_valid("block", " Name must be filled out");
  } else if (input_name.value.trim().length < 7) {
    varid = false;
    name_valid("block", " Name is To Short");
  } else if (input_name.value.trim().length > 30) {
    varid = false;
    name_valid("block", " Name is To Long max=30");
  } else {
    varid = true;
    name_valid("none", "");
  }

  //////////
  if (!varidemailRegex.test(input_email.value)) {
    varid = false;
    email_valid("block", " Put Valid email Please");
  } else {
    varid = true;
    email_valid("none", "");
  }

  if (varid) {
    const message = async function () {
      let messages = {
        email: input_email.value,
        messages: messagebox.value,
      };
      const sendmessage = await fetch(
        `https://mybrand-be-2-jfbq.onrender.com/api/message`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(messages),
        }
      ).then(console.log(sendmessage));
    };
  }
});

///////////////////////////////////////////////////////////
//LOGIN BUTTON

// login_button.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("login clicked");
//   if (!varidemailRegex.test(input_email.value)) {
//     varid = false;
//     email_valid("block", " Put Valid email Please");
//   } else {
//     varid = true;
//     email_valid("none", "");
//     window.location.href = "dashboard.html";
//   }
// });
