import React from "react";

function IconCard({ title, description, children }) {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-3xl bg-white p-5">
      <div className="mb-2 h-fit w-fit">{children}</div>
      <h3>{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default IconCard;
