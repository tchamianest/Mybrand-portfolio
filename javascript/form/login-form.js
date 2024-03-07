const login_button = document.getElementById("login-button-in");
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
//password
const password = 12345;
let varid;
// add loding on
login_button.addEventListener("click", function (e) {
  login_button.innerHTML = `<div class="loader-button"></div>`;
  if (!varidemailRegex.test(input_email.value)) {
    varid = false;
    login_button.innerHTML = `Login`;
    email_valid("block", " Put Valid email Please");
  } else {
    email_valid("none");
    varid = true;
    const Loginuser = async () => {
      let user = {
        email: input_email.value,
        password: password_doc.value,
      };
      try {
        const response = await fetch(`${config.LINKTORENDER}/api/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const token = await response.json();
        const finalwithbear = "Bearer " + token.token;
        const status = token.type;
        localStorage.setItem("authToken", finalwithbear);
        localStorage.setItem("userType", status);
        localStorage.setItem("userEmail", input_email.value);
        console.log(token);

        if (token.token && status === "Admin") {
          pass_valid("none", "");
          email_valid("none", "");
          window.location.href = "dashboard.html";
        } else if (token.token && status !== "Admin") {
          window.location.href = "index.html";
        } else {
          console.log("there is some issue");
        }
      } catch (err) {
        console.log(err.message);
        login_button.innerHTML = `Login`;
        pass_valid("block", "Unauthorized User");
      }
    };
    Loginuser();
  }

  // }
});
