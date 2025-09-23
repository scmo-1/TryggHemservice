"use client";
import React from "react";
import Label from "../ui/Label";
import Image from "next/image";
import * as Lucide from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import InViewWrapper from "../ui/InViewWrapper";

function AboutSection() {
  const { content } = useLanguage();
  return (
    <section
      id="about"
      className="flex flex-col items-center bg-violet-50 px-3 pt-40 pb-20 lg:pb-50"
    >
      <InViewWrapper>
        <div className="flex flex-col gap-5 lg:max-w-[1260px]">
          <div className="pt-5">
            <Label color="light" size="sm">
              {content.about.subtitle}
            </Label>
            <h2 className="text-xl lg:text-3xl">{content.about.title}</h2>
          </div>
          <div className="rounded-3xl bg-white p-5 md:w-2/3 md:p-8">
            <p className="lg:text-lg">{content.about.companyDesc}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {content.about.tags.map((tag, index) => {
                const Icon = Lucide[tag.icon];
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center gap-1 md:flex-row md:gap-2"
                  >
                    <Icon color="#7f22fe" />
                    <span className="text-center text-xs font-bold md:text-start lg:text-sm">
                      {tag.title} <p className="font-medium">{tag.desc}</p>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative mt-50 rounded-3xl bg-violet-950 p-5 text-white md:mt-10 md:w-1/2 md:self-end md:p-8">
            <Image
              className="absolute top-[-150] right-3 rounded-3xl lg:top-[-220] lg:w-[200px]"
              href={"#"}
              src={"/images/portrait.JPG"}
              alt="Portrait of founder"
              height={150}
              width={150}
            />
            <span className="text-2xl font-bold text-violet-600">
              {content.about.greeting}
            </span>
            <p className="lg:text-lg">{content.about.personalDesc}</p>
          </div>
        </div>
      </InViewWrapper>
    </section>
  );
}

export default AboutSection;
