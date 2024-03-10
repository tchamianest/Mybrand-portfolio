const login_button = document.getElementById("signup-button-in");
const input_email = document.getElementById("email-validation");
const password_doc = document.getElementById("input-password");
const dange_email = document.querySelector(".validation-message-email");
const dange_pass = document.querySelector(".validation-message-password");
const varidemailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
import config from "../../config.js";

const email_valid = function (style, message) {
  dange_email.style.display = `${style}`;
  dange_email.innerHTML = `⚠️ ${message}`;
};

const pass_valid = function (style, message) {
  dange_pass.style.display = `${style}`;
  dange_pass.innerHTML = ` ${message}`;
};
const password = 12345;
let varid;

login_button.addEventListener("click", function (e) {
  console.log("yesy tested");
  login_button.innerHTML = `<div class="loader-button"></div>`;
  if (!varidemailRegex.test(input_email.value)) {
    login_button.innerHTML = `sign Up`;
    email_valid("block", " Put Valid email Please");
  } else {
    const Loginuser = async () => {
      let user = {
        email: input_email.value,
        password: password_doc.value,
      };
      try {
        const response = await fetch(`${config.LINKTORENDER}/api/register`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => {
          console.log(res.status);
          if (res.status == 201) {
            login_button.innerHTML = `<div class="loader-button"></div>`;
            pass_valid("block", "user created succeful");
            window.location.href = "login.html";
          } else {
            login_button.innerHTML = `sign Up`;
            pass_valid("block", "use email exist");
          }
        });
      } catch (err) {
        console.log(err.message);
        login_button.innerHTML = `sign Up`;
        pass_valid("block", err);
      }
    };
    Loginuser();
  }

  // }
});
