import React from "react";
import { Menu } from "lucide-react";

function Header({ content }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-99 flex justify-between border-b-2 border-violet-300 bg-violet-600/80 p-5 text-white">
      <a href="#"> LOGO </a>
      <nav>
        <Menu className="xl:hidden" size={48} />
        <ul className="hidden gap-4 xl:flex">
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
