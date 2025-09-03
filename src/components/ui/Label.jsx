import React from "react";
import clsx from "clsx";

function Label({ children, primary }) {
  return (
    <div
      className={clsx(
        "w-fit rounded-sm px-2 py-0.5 text-center text-xs text-white",
        primary ? "bg-violet-600" : "bg-indigo-950",
      )}
    >
      <span> {children} </span>
    </div>
  );
}

export default Label;
