import React from "react";
import Wave from "../ui/Wave";
import Link from "next/link";
import ContactForm from "./ContactForm";

function ContactSection({ content }) {
  return (
    <section className="p-auto relative flex h-screen flex-col items-center bg-violet-600 p-3 py-20 text-white">
      <Wave color="dark" className="top-[-8%]" />
      <div className="flex max-w-[480px] flex-col gap-8">
        <div>
          <p>{content.desc}</p>
        </div>
        <ContactForm content={content.form} />
      </div>
    </section>
  );
}

export default ContactSection;
