import React from "react";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";

function Tab({ content, active, onClick }) {
  const Icon = Lucide[content.icon];
  const isActive = active.title === content.title;
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-3 px-5 py-2 text-xl text-white"
    >
      <Icon size={25} />
      <span>{content.title}</span>
      <div className=""></div>
    </button>
  );
}

export default Tab;
