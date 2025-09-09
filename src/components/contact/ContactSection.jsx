import React from "react";
import Wave from "../ui/Wave";
import Link from "next/link";
import ContactForm from "./ContactForm";

function ContactSection({ content }) {
  return (
    <section className="h-screen bg-violet-600 p-3 py-20 text-white">
      <div>
        <div>
          <p>{content.desc}</p>
        </div>
        <ContactForm content={content.form} />
      </div>
    </section>
  );
}

export default ContactSection;
