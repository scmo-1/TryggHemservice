import React from "react";
import Image from "next/image";

function ImageCard({ img, title, description, children }) {
  return (
    <article className="flex w-full flex-col self-center rounded-3xl bg-white p-5">
      <div className="relative h-56 w-full overflow-hidden rounded-3xl">
        {img ? (
          <Image src={img} fill style={{ objectFit: "cover" }} alt={title} />
        ) : (
          <div className="h-full w-full bg-gray-200"></div>
        )}
      </div>
      <div className="mt-5 flex flex-col">
        {children}
        <h3 className="text-md">{title}</h3>
        <p className="text-md text-violet-950">{description}</p>
      </div>
    </article>
  );
}

export default ImageCard;
