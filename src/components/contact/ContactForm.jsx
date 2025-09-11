import React from "react";
import InputField from "./InputField";
import AppButton from "../ui/AppButton";

function ContactForm({ content }) {
  return (
    <form
      action="#"
      className="rounded-3xl bg-white p-5 text-violet-950 lg:w-1/2"
    >
      <fieldset className="flex flex-col gap-4">
        <InputField type={"text"} label={content.name} />
        <InputField type={"tel"} label={content.phone} />
        <InputField type={"email"} label={content.mail} />
        <textarea
          id="msg"
          placeholder={content.msg}
          className="rounded-3xl border-2 border-violet-950 p-2 ps-3 focus:outline-2 focus:outline-violet-500"
        ></textarea>
        <AppButton type="submit" color="purple">
          {content.btn}
        </AppButton>
      </fieldset>
    </form>
  );
}

export default ContactForm;
