import React from "react";

function HeroSection({ content }) {
  return (
    <section className="bg-neutral-100 w-screen h-screen pt-30 p-3">
      <article className="">
        <span className="text-xs"> {content.hero.subtitle} </span>
        <h1 className="text-3xl"> {content.hero.title} </h1>
        <p className="text-base mt-2 w-"> {content.hero.desc} </p>
      </article>
    </section>
  );
}

export default HeroSection;
