"use client";
import React from "react";
import Label from "@/components/ui/Label";
import Wave from "@/components/ui/Wave";
import ContactSection from "../contact/ContactSection";
import Accordion from "../ui/Accordion/Accordion";

export default function ServicesPage({ content }) {
  return (
    <section className="flex h-fit flex-col items-center bg-violet-50 pb-40 lg:pb-50">
      <div className="flex max-w-[480px] flex-col gap-5 bg-white px-3 pt-40 lg:max-w-[1024px]">
        <article className="">
          <Label color="light" size="sm">
            {content.servicesPage.subtitle}
          </Label>
          <h1>{content.servicesPage.title}</h1>
          <p>{content.servicesPage.desc}</p>
        </article>
        <div className="">
          <Accordion content={content.servicesPage.services} />
        </div>
      </div>
    </section>
  );
}
