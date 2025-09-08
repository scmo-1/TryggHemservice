import React from "react";

function IconCard({ title, description, children, className }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center rounded-3xl bg-white p-5 ${className}`}
    >
      <div className="mb-2">{children}</div>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default IconCard;
