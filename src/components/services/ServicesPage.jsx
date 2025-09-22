"use client";
import React from "react";
import Label from "@/components/ui/Label";
import Wave from "@/components/ui/Wave";
import ContactSection from "../contact/ContactSection";
import Accordion from "../ui/Accordion/Accordion";

export default function ServicesPage({ content }) {
  return (
    <section className="flex h-fit flex-col items-center">
      <div className="flex flex-col gap-5 pt-40 md:gap-20">
        <article className="px-3 md:px-10">
          <Label color="light" size="sm">
            {content.servicesPage.subtitle}
          </Label>
          <h1 className="text-2xl">{content.servicesPage.title}</h1>
          <p className="md:w-3/4">{content.servicesPage.desc}</p>
        </article>
        <div className="mb-30 px-3 md:px-10 lg:hidden">
          <Accordion content={content.servicesPage.services} />
        </div>
        <div className="bg-violet-600">
          <ContactSection />
        </div>
      </div>
    </section>
  );
}
