import React from "react";
import Image from "next/image";

function ImageCard({ img, title, description, className }) {
  return (
    <article
      className={`flex h-full w-full flex-col self-center rounded-3xl bg-white p-5 ${className}`}
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-3xl lg:h-[350px]">
        {img ? (
          <Image
            src={img}
            fill
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
            alt={title}
          />
        ) : (
          <div className="h-full w-full bg-gray-200"></div>
        )}
      </div>
      <div className="mt-5 flex flex-col">
        <h3 className="text-md">{title}</h3>
        <p className="text-md text-violet-950">{description}</p>
      </div>
    </article>
  );
}

export default ImageCard;
