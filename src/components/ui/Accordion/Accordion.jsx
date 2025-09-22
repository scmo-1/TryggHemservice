"use client";
import React from "react";
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
