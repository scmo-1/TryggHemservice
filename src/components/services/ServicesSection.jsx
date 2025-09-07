import React from "react";
import Label from "../ui/Label";
import ImageCard from "../ui/ImageCard";
import IconCard from "../ui/IconCard";
import { Puzzle, Hourglass } from "lucide-react";
import AppLink from "../ui/AppLink";

function ServicesSection({ content }) {
  const iconSize = "h-10 w-10";
  return (
    <div className="flex h-fit w-screen flex-col gap-5 bg-violet-50 px-3 pt-20">
      <div>
        <Label primary>{content.subtitle}</Label>
        <h2 className="w-2/3 text-xl text-wrap">{content.title}</h2>
      </div>
      <ImageCard
        className=""
        img={content.cleaning.src}
        title={content.cleaning.title}
        description={content.cleaning.desc}
      />
      <ImageCard
        className=""
        img={content.keyholding.src}
        title={content.keyholding.title}
        description={content.keyholding.desc}
      />
      <ImageCard
        className=""
        img={content.how.src}
        title={content.how.title}
        description={content.how.desc}
      />
      <IconCard
        title={content.solutions.title}
        description={content.solutions.desc}
      >
        <Puzzle className={`${iconSize}`} />
      </IconCard>
      <IconCard title={content.answer.title} description={content.answer.desc}>
        <Hourglass className={`${iconSize}`} />
      </IconCard>
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-5">
        <h3 className="text-center">{content.cta.title}</h3>
        <AppLink primary href={"#"}>
          {content.cta.button}
        </AppLink>
      </div>
    </div>
  );
}

export default ServicesSection;
