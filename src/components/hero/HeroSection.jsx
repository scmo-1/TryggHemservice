"use client";
import React from "react";
import HeroContent from "./HeroContent";
import { motion } from "motion/react";
import HeroVisuals from "./HeroVisuals";
import { useLanguage } from "@/context/LanguageContext";

function HeroSection() {
  const { content } = useLanguage();
  return (
    <section
      id="home"
      className="bg-white pt-35 pb-30 md:py-40 lg:py-60 2xl:pb-100"
    >
      <div className="container mx-auto flex h-max max-w-[420px] flex-col gap-5 px-3 lg:max-w-[1260px] lg:flex-row lg:gap-20">
        <HeroContent content={content} />
        <HeroVisuals content={content} />
      </div>
    </section>
  );
}

export default HeroSection;
