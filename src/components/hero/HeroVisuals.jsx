import React from "react";
import Label from "../ui/Label";
import Image from "next/image";
import { motion } from "motion/react";

function HeroVisuals({ content }) {
  return (
    <div className="relative mt-10 h-64 w-full overflow-hidden rounded-3xl">
      <Image
        src={"/images/beach.png"}
        alt="Beach in Torrevieja"
        fill
        priority
        className="z-0 object-cover"
      />
      <Label className="absolute top-5 left-10 z-10">
        {content.hero.labels[0]}
      </Label>
      <Label className="absolute top-10 right-5 z-10">
        {content.hero.labels[1]}
      </Label>
      <Label className="absolute top-35 left-1 z-10">
        {content.hero.labels[2]}
      </Label>
      <Label className="absolute right-10 bottom-5 z-10">
        {content.hero.labels[3]}
      </Label>
    </div>
  );
}

export default HeroVisuals;
