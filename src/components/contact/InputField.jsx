"use client";
import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

function InputField({ type, label }) {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative flex h-12 flex-col">
      <motion.label
        htmlFor={type}
        className="absolute top-2 left-4 bg-white p-0.5"
        animate={{
          y: focus ? -23 : 0,
        }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {label}
      </motion.label>
      <input
        type={type}
        id={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="h-full w-full rounded-2xl border-2 border-violet-950 ps-4 focus:outline-violet-500"
      />
    </div>
  );
}

export default InputField;
