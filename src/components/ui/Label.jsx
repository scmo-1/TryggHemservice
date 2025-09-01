import React from "react";
import clsx from "clsx";

function Label({ text, primary }) {
  return (
    <div
      className={clsx(
        "w-fit px-2 py-1 text-center text-sm text-white rounded-sm",
        primary ? "bg-violet-600" : "bg-indigo-950"
      )}
    >
      <span> {text} </span>
    </div>
  );
}

export default Label;
