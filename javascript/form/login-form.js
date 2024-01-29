const login_button = document.getElementById("login-button-in");
const input_email = document.getElementById("email-validation");
const password_doc = document.getElementById("input-password");
const dange_email = document.querySelector(".validation-message-email");
const dange_pass = document.querySelector(".validation-message-password");
const varidemailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email_valid = function (style, message) {
  dange_email.style.display = `${style}`;
  dange_email.innerHTML = `⚠️ ${message}`;
};

const pass_valid = function (style, message) {
  dange_pass.style.display = `${style}`;
  dange_pass.innerHTML = `⚠️ ${message}`;
};
//password
const password = 12345;

login_button.addEventListener("click", function (e) {
  if (!varidemailRegex.test(input_email.value)) {
    varid = false;
    email_valid("block", " Put Valid email Please");
  } else if (password !== Number(password_doc.value)) {
    varid = false;
    pass_valid("block", " Put Valid Password");
  } else {
    varid = true;
    pass_valid("none", "");
    window.location.href = "dashboard.html";
  }
});
