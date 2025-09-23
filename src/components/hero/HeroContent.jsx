import React from "react";
import Label from "../ui/Label";
import AppLink from "../ui/AppLink";
import { motion } from "motion/react";

function HeroContent({ content }) {
  return (
    <article className="self-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          duration: 0.3,
          mass: 1,
          damping: 10,
        }}
      >
        <Label color="light" size="sm">
          {content.hero.subtitle}
        </Label>
        <h1 className="text-3xl lg:text-6xl"> {content.hero.title} </h1>
        <p className="mt-2 text-base"> {content.hero.desc} </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
          type: "spring",
          duration: 0.3,
          mass: 1,
          damping: 10,
        }}
        className="mt-12 flex flex-col gap-3 self-start md:flex-row"
      >
        <AppLink href={"#contact"}>{content.hero.ctaPrimary}</AppLink>
        <AppLink href={"#services"} variant="outlined">
          {content.hero.ctaSecondary}
        </AppLink>
      </motion.div>
    </article>
  );
}

export default HeroContent;
