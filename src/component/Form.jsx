import React from "react";
import "./Form.css";

import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xknyezwl");
  if (state.succeeded) {
    return <p>Thanks for contacting</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <label htmlFor="name">Name</label> */}
      <input id="name" type="text" name="name" placeholder="Name" />

      {/* <label htmlFor="email">Email Address</label> */}
      <input id="email" type="email" name="email" placeholder="Email Address" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <input type="text" placeholder="Phone" name="phone" />
      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button id="formBtn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
