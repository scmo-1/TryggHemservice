import React from "react";

function TabPanel({ content }) {
  return (
    <div className="flex gap-10">
      <p className="flex-1 text-lg">{content.desc}</p>
      <div className="flex-1">
        {content.subtitle && (
          <span className="text-lg font-bold">{content.subtitle}</span>
        )}
        <ul>
          {content.list.map((item, idx) => (
            <li className="text-lg" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TabPanel;
