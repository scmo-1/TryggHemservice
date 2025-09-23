import React from "react";
import Label from "../ui/Label";
import Image from "next/image";
import { motion } from "motion/react";

function HeroVisuals({ content }) {
  const initialState = {
    opacity: 0,
    y: 30,
  };
  const animation = {
    opacity: 1,
    y: 0,
  };
  const timing = {
    type: "spring",
    duration: 0.3,
    mass: 1,
    damping: 10,
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, sclae: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="relative mt-10 min-h-80 w-full overflow-hidden rounded-3xl md:h-110"
    >
      <Image
        src={"/images/beach.webp"}
        alt="Beach in Torrevieja"
        fill
        priority
        className="z-0 object-cover"
      />

      <Label
        size="lg"
        color="dark"
        className="absolute top-[5%] left-10 z-10"
        initial={initialState}
        animate={animation}
        transition={{ delay: 0.4, ...timing }}
      >
        {content.hero.labels[0]}
      </Label>

      <Label
        size="lg"
        color="dark"
        className="absolute top-[15%] right-5 z-10"
        initial={initialState}
        animate={animation}
        transition={{ delay: 0.6, ...timing }}
      >
        {content.hero.labels[1]}
      </Label>

      <Label
        size="lg"
        color="dark"
        className="absolute top-[40%] left-1 z-10"
        initial={initialState}
        animate={animation}
        transition={{ delay: 0.8, ...timing }}
      >
        {content.hero.labels[2]}
      </Label>

      <Label
        size="lg"
        color="dark"
        className="absolute right-10 bottom-[5%] z-10"
        initial={initialState}
        animate={animation}
        transition={{ delay: 1, ...timing }}
      >
        {content.hero.labels[3]}
      </Label>
    </motion.div>
  );
}

export default HeroVisuals;
