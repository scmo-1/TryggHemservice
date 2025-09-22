import React from "react";
import { Menu } from "lucide-react";
import AppLink from "./AppLink";

function Header({ content }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-99 flex justify-between border-b-2 border-violet-300 bg-violet-600/80 p-5 text-white">
      <a href="/"> Trygg </a>
      <nav>
        <Menu className="lg:hidden" size={48} />
        <ul className="hidden gap-4 lg:flex">
          {content.links.map((link, index) => (
            <AppLink key={index} size="md" variant="ghost" href={link.link}>
              {link.title}
            </AppLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
