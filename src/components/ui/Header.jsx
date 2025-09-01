import React from "react";
import { Menu } from "lucide-react";

function Header({ content }) {
  return (
    <header className="bg-violet-600/80 text-white fixed top-0 left-0 right-0 flex justify-between p-5 border-b-2 border-violet-300">
      <a href="#"> LOGO </a>
      <nav>
        <Menu className="xl:hidden" size={48} />
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
