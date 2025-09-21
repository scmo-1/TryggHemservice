"use client";
import React from "react";
import Wave from "../ui/Wave";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";
import ContactButtons from "./ContactButtons";

function ContactSection() {
  const { content } = useLanguage();

  return (
    <section
      id="contact"
      className="p-auto relative flex flex-col items-center bg-violet-600 p-3 py-20 text-white"
    >
      <Wave color="dark" className="top-[-8%] lg:top-[-12%]" />
      <div className="my-10 flex max-w-[480px] flex-col gap-8 lg:max-w-[1024px] lg:flex-row">
        <div className="lg:w-1/2">
          <p className="mb-5 text-lg">{content.contact.desc}</p>
          <ContactButtons content={content.contact} />
        </div>
        <ContactForm content={content.form} />
      </div>
    </section>
  );
}

export default ContactSection;
