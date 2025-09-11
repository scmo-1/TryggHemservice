import React from "react";
import Label from "../ui/Label";
import Image from "next/image";
import * as Lucide from "lucide-react";

function AboutSection({ content }) {
  return (
    <section
      id="about"
      className="flex flex-col items-center bg-violet-50 px-3 pt-10 pb-40 lg:pb-50"
    >
      <div className="flex max-w-[480px] flex-col gap-5 lg:max-w-[1024px]">
        <div>
          <Label color="light" size="sm">
            {content.subtitle}
          </Label>
          <h2 className="text-xl lg:text-2xl">{content.title}</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 lg:w-2/3">
          <p>{content.companyDesc}</p>
          <ul className="mt-5 flex flex-col gap-3">
            {content.tags.map((tag, index) => {
              const Icon = Lucide[tag.icon];
              return (
                <li
                  key={index}
                  className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2"
                >
                  <Icon className="h-10 w-10 rounded-full bg-violet-950 p-1.5 text-white" />
                  <span className="text-center text-xs font-bold lg:text-start">
                    {tag.title} <p className="font-medium">{tag.desc}</p>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative mt-50 rounded-3xl bg-violet-950 p-5 text-white lg:mt-10 lg:w-1/2 lg:self-end">
          <Image
            className="absolute top-[-150] right-3 rounded-3xl lg:top-[-220] lg:w-[200px]"
            href={"#"}
            src={"/images/portrait.JPG"}
            alt="Portrait of founder"
            height={150}
            width={150}
          />
          <span className="text-2xl font-bold text-violet-600">
            {content.greeting}
          </span>
          <p>{content.personalDesc}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
