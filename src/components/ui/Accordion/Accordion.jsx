"use client";
import React from "react";
import * as Lucide from "lucide-react";
import { Plus, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import AccordionItem from "./AccordionItem";

function Accordion({ content }) {
  return (
    <section className="flex flex-col gap-3">
      {content.map((item, idx) => (
        <AccordionItem key={idx} content={item} />
      ))}
    </section>
  );
}

export default Accordion;
