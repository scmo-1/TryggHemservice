import React from "react";
import Label from "../ui/Label";
import AppLink from "../ui/AppLink";

function HeroSection({ content }) {
  return (
    <section className="h-screen w-screen bg-neutral-100 p-3 pt-30">
      <article className="">
        <Label primary> {content.hero.subtitle}</Label>
        <h1 className="text-4xl"> {content.hero.title} </h1>
        <p className="w- mt-2 text-base"> {content.hero.desc} </p>
        <AppLink href="/contact" size="lg">
          {" "}
          {content.hero.ctaPrimary}
        </AppLink>
        <AppLink href="/services" variant="outlined" size="md">
          {content.hero.ctaSecondary}
        </AppLink>
        <AppLink href="#" variant="ghost" size="sm">
          En länk här
        </AppLink>
      </article>
    </section>
  );
}

export default HeroSection;
