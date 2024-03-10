const submittmessagebuton = document.getElementById("submitt-contact");
const data_name = document.getElementById("name-input");
const data_email = document.getElementById("email-validation");
const data_message = document.getElementById("message-to-admin");
const result = document.querySelector(".validation-message-response");
import config from "../../config.js";

submittmessagebuton.addEventListener("click", async function () {
  try {
    const message = {
      email: data_email.value,
      messages: data_message.value,
    };
    const response = await fetch(`${config.LINKTORENDER}/api/message`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(message),
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        data_email.value = " ";
        data_message.value = " ";
        data_name.value = " ";
        result.style.display = "block";
      } else {
        pass_valid("block", "User email exist");
      }
    });
  } catch (err) {
    console.log(err.message);
    result.innerHTML = "there is some error";
    result.style.display = "block";
  }
});
