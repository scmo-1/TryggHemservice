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
      className="relative flex w-full flex-col items-center bg-violet-600 p-3 px-3 py-20 text-white md:px-10"
    >
      <Wave color="dark" className="top-[-8%] lg:top-[-12%]" />
      <div className="p-auto my-10 flex max-w-[480px] flex-col gap-20 lg:max-w-[1260px] lg:flex-row lg:gap-25">
        <div className="lg:w-1/2">
          <p className="mb-10 text-lg">{content.contact.desc}</p>
          <ContactButtons content={content.contact} />
        </div>
        <ContactForm content={content.form} />
      </div>
    </section>
  );
}

export default ContactSection;
