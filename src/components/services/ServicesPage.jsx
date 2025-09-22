"use client";
import React from "react";
import Label from "@/components/ui/Label";
import ContactSection from "../contact/ContactSection";
import Accordion from "../ui/Accordion/Accordion";
import ServicesPageGrid from "./ServicesPageGrid";

export default function ServicesPage({ content }) {
  return (
    <section className="m-auto flex flex-col items-center">
      <div className="mb-20 flex max-w-[480px] flex-col gap-5 px-3 pt-40 md:gap-20 md:px-10 lg:max-w-[1260px]">
        <article className="">
          <Label color="light" size="sm">
            {content.servicesPage.subtitle}
          </Label>
          <h1 className="text-2xl lg:text-4xl">{content.servicesPage.title}</h1>
          <p className="mt-3 md:w-3/4 lg:text-lg">
            {content.servicesPage.desc}
          </p>
        </article>
        <div className="mb-30 lg:hidden">
          <Accordion content={content.servicesPage.services} />
        </div>
        <div className="mb-30 hidden lg:block">
          <ServicesPageGrid content={content.servicesPage.services} />
        </div>
      </div>
      <ContactSection />
    </section>
  );
}
