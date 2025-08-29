import React from "react";
import { Menu } from "lucide-react";

function Header({ content }) {
  return (
    <header className="bg-neutral-200 flex justify-between p-5">
      logo
      <nav>
        <Menu className=" xl:hidden" />
        <ul className="hidden xl:flex gap-4">
          <li>
            <a href="#"> {content.services} </a>
          </li>
          <li>
            <a href="#"> {content.about} </a>
          </li>
          <li>
            <a href="#"> {content.contact} </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
