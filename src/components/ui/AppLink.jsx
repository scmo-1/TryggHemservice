"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";

export default function AppLink({
  href,
  children,
  variant = "filled",
  size = "lg",
}) {
  const base =
    "relative inline-flex items-center justify-center w-fit overflow-hidden whitespace-nowrap rounded-full px-4 py-1 ";
  const variants = {
    filled: "bg-violet-600 text-white hover:bg-violet-500 hover:bg-violet-300",
    outlined: "border-2 border-indigo-950 text-indigo-950",
    ghost: "text-violet-600",
  };
  const sizes = {
    lg: "text-lg px-10 py-3",
    md: "text-lg",
    sm: "text-md",
  };

  return (
    <Link href={href} passHref>
      <motion.span
        initial="initial"
        whileHover="hovered"
        className={clsx(base, variants[variant], sizes[size])}
      >
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-110%" },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: "110%" },
            hovered: { y: 0 },
          }}
        >
          {children}
        </motion.div>
      </motion.span>
    </Link>
  );
}
