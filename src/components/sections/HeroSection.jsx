import React from "react";
import Label from "../ui/Label";

function HeroSection({ content }) {
  return (
    <section className="bg-neutral-100 w-screen h-screen pt-30 p-3">
      <article className="">
        <Label text={content.hero.subtitle} primary />
        <h1 className="text-3xl"> {content.hero.title} </h1>
        <p className="text-base mt-2 w-"> {content.hero.desc} </p>
      </article>
    </section>
  );
}

export default HeroSection;
