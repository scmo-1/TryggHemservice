import React from "react";
import Label from "../ui/Label";
import ImageCard from "../ui/ImageCard";
import IconCard from "../ui/IconCard";
import { Puzzle, Hourglass } from "lucide-react";
import AppLink from "../ui/AppLink";
import Wave from "../ui/Wave";

function ServicesSection({ content }) {
  return (
    <section className="p-auto relative flex flex-col items-center gap-5 bg-violet-50 px-5 py-10 lg:py-40">
      <Wave color="light" className="top-[-5%]" />
      <div className="flex max-w-[480px] flex-col gap-5 lg:max-w-[1024px]">
        <div className="self-start">
          <Label size="sm" color="light">
            {content.subtitle}
          </Label>
          <h2 className="w-2/3 text-xl text-wrap lg:text-2xl">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          <ImageCard
            className="lg:col-span-1"
            img={content.cleaning.src}
            title={content.cleaning.title}
            description={content.cleaning.desc}
          />
          <ImageCard
            className="lg:col-span1"
            img={content.keyholding.src}
            title={content.keyholding.title}
            description={content.keyholding.desc}
          />
          <ImageCard
            className="lg:col-span-1"
            img={content.how.src}
            title={content.how.title}
            description={content.how.desc}
          />

          <div className="flex flex-col gap-5 lg:col-span-1">
            <IconCard
              className=""
              title={content.solutions.title}
              description={content.solutions.desc}
            >
              <Puzzle className="h-10 w-10" />
            </IconCard>
            <IconCard
              className=""
              title={content.answer.title}
              description={content.answer.desc}
            >
              <Hourglass className="h-10 w-10" />
            </IconCard>
            <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-5">
              <h3 className="text-center">{content.cta.title}</h3>
              <AppLink primary href={"#"}>
                {content.cta.button}
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
