"use client";
import React from "react";
import Label from "@/components/ui/Label";
import TabsSection from "../ui/Tabs/TabsSection";
import ContactSection from "../contact/ContactSection";
import Accordion from "../ui/Accordion/Accordion";

export default function ServicesPage({ content }) {
  return (
    <section className="m-auto flex h-fit max-w-[1260px] flex-col items-center">
      <div className="flex flex-col gap-5 pt-40 md:gap-20">
        <article className="px-3 md:px-10">
          <Label color="light" size="sm">
            {content.servicesPage.subtitle}
          </Label>
          <h1 className="text-2xl lg:text-4xl">{content.servicesPage.title}</h1>
          <p className="md:w-3/4 lg:text-lg">{content.servicesPage.desc}</p>
        </article>
        <div className="mb-30 px-3 md:px-10 lg:hidden">
          <Accordion content={content.servicesPage.services} />
        </div>
        <div className="mb-30 hidden lg:block">
          <TabsSection content={content.servicesPage.services} />
        </div>
        <div className="bg-violet-600">
          <ContactSection />
        </div>
      </div>
    </section>
  );
}
