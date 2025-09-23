"use client";
import React from "react";
import { motion } from "motion/react";

function templateReveal({ children }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}

export default templateReveal;
