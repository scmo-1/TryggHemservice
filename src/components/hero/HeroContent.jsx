import React from "react";
import Label from "../ui/Label";
import AppLink from "../ui/AppLink";

function HeroContent({ content }) {
  return (
    <div>
      <article>
        <Label primary> {content.hero.subtitle}</Label>
        <h1 className="text-3xl"> {content.hero.title} </h1>
        <p className="w- text-md mt-2 text-base"> {content.hero.desc} </p>
      </article>
    </div>
  );
}

export default HeroContent;
