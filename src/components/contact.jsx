import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email)) {
      setMessage("Oops! That doesn’t look like an email address");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="contact">
      <h3 className="contact_title">Get notified when we launch</h3>
      <div className="contact_area">
        <div className="input_area">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleOnChange}
          />
          <span className="error">{message}</span>
        </div>

        <button className="submit_btn" type="submit" onClick={emailValidation}>
          Get notified
        </button>
      </div>
    </section>
  );
}

export default Contact;
