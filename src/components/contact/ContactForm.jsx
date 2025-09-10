import React from "react";
import InputField from "./InputField";

function ContactForm({ content }) {
  return (
    <form action="#" className="rounded-3xl bg-white p-5 text-violet-950">
      <fieldset className="flex flex-col gap-4">
        <InputField type={"text"} label={content.name} />
        <InputField type={"tel"} label={content.phone} />
        <InputField type={"email"} label={content.mail} />
        <textarea
          id="msg"
          placeholder={content.msg}
          className="rounded-3xl border-2 border-violet-950 p-2 ps-3 focus:outline-2 focus:outline-violet-500"
        ></textarea>
        <button
          type="submit"
          className="text-md rounded-3xl bg-violet-600 p-3 text-lg font-bold text-white hover:bg-violet-400"
        >
          {content.btn}
        </button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
