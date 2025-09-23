"use client";
import React from "react";
import Label from "../ui/Label";
import ImageCard from "../ui/ImageCard";
import IconCard from "../ui/IconCard";
import { Puzzle, Hourglass } from "lucide-react";
import AppLink from "../ui/AppLink";
import Wave from "../ui/Wave";
import { useLanguage } from "@/context/LanguageContext";

function ServicesSection() {
  const { content } = useLanguage();
  return (
    <section
      id="services"
      className="p-auto relative flex flex-col items-center gap-5 bg-violet-50 px-5 py-10 lg:py-40"
    >
      <Wave color="light" className="top-[-5%]" />
      <div className="flex max-w-[480px] flex-col gap-5 lg:max-w-[1260px]">
        <div className="self-start">
          <Label size="sm" color="light">
            {content.services.subtitle}
          </Label>
          <h2 className="w-2/3 text-xl text-wrap lg:text-3xl">
            {content.services.title}
          </h2>
        </div>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          <ImageCard
            className="lg:col-span-1"
            img={content.services.cleaning.src}
            title={content.services.cleaning.title}
            description={content.services.cleaning.desc}
          />
          <ImageCard
            className="lg:col-span1"
            img={content.services.keyholding.src}
            title={content.services.keyholding.title}
            description={content.services.keyholding.desc}
          />
          <ImageCard
            className="lg:col-span-1"
            img={content.services.how.src}
            title={content.services.how.title}
            description={content.services.how.desc}
          />

          <div className="flex flex-col gap-5 lg:col-span-1">
            <IconCard
              className=""
              title={content.services.solutions.title}
              description={content.services.solutions.desc}
            >
              <Puzzle className="h-10 w-10" color="#f5f3ff" />
            </IconCard>
            <IconCard
              className=""
              title={content.services.answer.title}
              description={content.services.answer.desc}
            >
              <Hourglass className="h-10 w-10" color="#f5f3ff" />
            </IconCard>
            <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-5">
              <h3 className="text-center">{content.services.cta.title}</h3>
              <AppLink primary href={"/services"}>
                {content.services.cta.button}
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
