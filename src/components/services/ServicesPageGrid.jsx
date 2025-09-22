import React from "react";
import * as Lucide from "lucide-react";

function ServicesPageGrid({ content }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {content.map((item) => {
        const Icon = Lucide[item.icon];
        return (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl bg-violet-50 p-5"
          >
            <span className="w-max self-center rounded-full bg-violet-600 p-3">
              <Icon color="#f5f3ff" size={35} />
            </span>
            <h2 className="mb-2 text-xl">{item.title}</h2>
            {item.desc && <p className="mb-5">{item.desc}</p>}
            {item.subtitle && (
              <span className="font-bold">{item.subtitle}</span>
            )}
            <ul className="">
              {item.list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export default ServicesPageGrid;
