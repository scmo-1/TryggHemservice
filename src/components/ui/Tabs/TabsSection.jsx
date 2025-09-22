import React, { act } from "react";
import { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

function TabsSection({ content }) {
  const [active, setActive] = useState(content[0]);

  return (
    <section className="flex flex-col items-center gap-5 px-10 lg:gap-10">
      <ul className="flex w-full justify-around rounded-2xl bg-violet-950">
        {content.map((item) => (
          <li key={item.title}>
            <Tab
              active={active}
              content={item}
              onClick={() => setActive(item)}
            />
          </li>
        ))}
      </ul>
      <div className="mb-20">
        <TabPanel content={active} />
      </div>
    </section>
  );
}

export default TabsSection;
