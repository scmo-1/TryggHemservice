import React from "react";
import AppLink from "../ui/AppLink";
import HeroContent from "./HeroContent";
import { motion } from "motion/react";
import HeroVisuals from "./HeroVisuals";

function HeroSection({ content }) {
  return (
    <section className="bg-white pt-35 pb-30 md:py-40 lg:py-60 2xl:pb-100">
      <div className="container mx-auto flex h-max max-w-[420px] flex-col gap-5 px-3 lg:max-w-[1024px] lg:flex-row">
        <HeroContent content={content} />
        <HeroVisuals content={content} />
      </div>
    </section>
  );
}

export default HeroSection;
