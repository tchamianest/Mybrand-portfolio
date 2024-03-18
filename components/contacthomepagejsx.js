function ContactHome() {
  const initialState = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [form, setForm] = React.useState(initialState);
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = document.querySelector(".validation-message-response");

    try {
      const message = {
        email: form.Email,
        messages: form.Message,
      };
      console.log(message);
      const response = await fetch(
        `https://mybrand-be-2-jfbq.onrender.com/api/message`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(message),
        }
      ).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setForm(initialState);
          result.innerHTML = "Thank you for the message";
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
  };

  return (
    <>
      <div className="form-right">
        <p className="title-form">Name :</p>
        <div className="input-erro">
          <input
            id="name-input"
            type="text"
            className="input-name"
            name="Name"
            value={form.Name}
            onChange={handleChange}
          />
          <div className="validation-message-name">
            ⚠️You reach maximum name
          </div>
        </div>
      </div>
      <div className="form-right">
        <p className="title-form">Email :</p>
        <div className="input-erro">
          <input
            id="email-validation"
            type="email"
            name="Email"
            value={form.Email}
            className="input-name"
            onChange={handleChange}
          />
          <div className="validation-message-email">
            ⚠️You reach maximum name
          </div>
        </div>
      </div>
      <div className="form-right">
        <p className="title-form">Message :</p>
        <textarea
          id="message-to-admin"
          className="longText"
          name="Message"
          value={form.Message}
          rows="4"
          cols="49"
          onChange={handleChange}
        ></textarea>
      </div>
      <div
        className="validation-message-response"
        style={{
          backgroundColor: "transparent",
          color: "white",
          textAlign: "center",
          display: "none",
          fontSize: "15px",
        }}
      >
        Thank you for the message
      </div>
      <div className="button-form">
        <button id="submitt-contact" onClick={handleForm}>
          Submit
        </button>
      </div>
    </>
  );
}

ReactDOM.render(<ContactHome />, document.querySelector("#root-conatact"));
