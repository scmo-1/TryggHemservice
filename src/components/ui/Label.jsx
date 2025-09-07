import React from "react";
import clsx from "clsx";

function Label({ children, color, size, className }) {
  const base = "w-fit rounded-sm px-2 py-0.5 text-center text-white";
  const sizes = {
    sm: "text-xs",
    lg: "text-md text-indigo-400 md:text-lg",
  };
  const colors = {
    light: "bg-violet-600",
    dark: "bg-violet-950",
  };
  return (
    <div className={clsx(base, sizes[size], colors[color], className)}>
      {children}
    </div>
  );
}

export default Label;
