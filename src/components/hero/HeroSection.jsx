import React from "react";
import Label from "../ui/Label";
import AppLink from "../ui/AppLink";
import Image from "next/image";
import HeroContent from "./HeroContent";
import { motion } from "motion/react";
import HeroVisuals from "./HeroVisuals";

function HeroSection({ content }) {
  return (
    <section className="flex h-screen w-screen flex-col gap-10 bg-neutral-100 px-3 pt-35">
      <HeroContent content={content} />
      <div className="flex flex-col gap-3">
        <AppLink href={"#"}>{content.hero.ctaPrimary}</AppLink>
        <AppLink href={"#"} variant="outlined">
          {content.hero.ctaSecondary}
        </AppLink>
      </div>
      <HeroVisuals content={content} />
    </section>
  );
}

export default HeroSection;
