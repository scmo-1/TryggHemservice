import React from "react";
import Label from "../ui/Label";
import AppLink from "../ui/AppLink";

function HeroContent({ content }) {
  return (
    <article className="self-center">
      <div>
        <Label color="light" size="sm">
          {content.hero.subtitle}
        </Label>
        <h1 className="text-3xl lg:text-6xl"> {content.hero.title} </h1>
        <p className="mt-2 text-base"> {content.hero.desc} </p>
      </div>
      <div className="mt-8 flex flex-col gap-3 self-start md:flex-row">
        <AppLink href={"#contact"}>{content.hero.ctaPrimary}</AppLink>
        <AppLink href={"#services"} variant="outlined">
          {content.hero.ctaSecondary}
        </AppLink>
      </div>
    </article>
  );
}

export default HeroContent;
