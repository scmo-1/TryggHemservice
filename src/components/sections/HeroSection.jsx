import React from 'react';
import Label from '../ui/Label';

function HeroSection({ content }) {
  return (
    <section className="h-screen w-screen bg-neutral-100 p-3 pt-30">
      <article className="">
        <Label text={content.hero.subtitle} primary />
        <h1 className="text-3xl"> {content.hero.title} </h1>
        <p className="w- mt-2 text-base"> {content.hero.desc} </p>
      </article>
    </section>
  );
}

export default HeroSection;
