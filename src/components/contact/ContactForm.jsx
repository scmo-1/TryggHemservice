import React from "react";
import InputField from "./InputField";

function ContactForm({ content }) {
  return (
    <form action="#" className="rounded-3xl bg-white p-5 text-violet-950">
      <fieldset className="flex flex-col gap-4">
        <InputField type={"text"} label={content.name} />
        <InputField type={"tel"} label={content.phone} />
        <InputField type={"email"} label={content.mail} />
        <label htmlFor="msg">{content.msg}</label>
        <textarea id="msg"></textarea>
        <button type="submit">{content.btn}</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
