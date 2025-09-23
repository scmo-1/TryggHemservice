"use client";
import clsx from "clsx";
import React from "react";

function AppButton({ children, type, color }) {
  const colors = {
    purple:
      "bg-violet-600 text-white hover:text-violet-950 hover:bg-violet-300",
    white: "bg-white text-violet-950  hover:bg-violet-950 hover:text-white",
  };
  const base =
    "text-md flex gap-2 rounded-3xl p-3 text-md font-bold w-full items-center justify-center transition-colors duration-400 ease-in-out cursor-pointer ";
  return (
    <div>
      <button type={type} className={clsx(base, colors[color])}>
        {children}
      </button>
    </div>
  );
}

export default AppButton;
