"use client";
import React from "react";
import AppLink from "./AppLink";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";

function Header({ content }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-99 flex justify-between border-b-2 border-violet-300 bg-violet-600/80 p-5 text-white">
        <a href="/"> Trygg </a>
        <nav className="hidden lg:block">
          <ul className="flex gap-5">
            {content.links.map((link, index) => (
              <AppLink key={index} size="md" variant="ghost" href={link.link}>
                {link.title}
              </AppLink>
            ))}
          </ul>
        </nav>
        <MenuButton open={open} setOpen={setOpen} />
      </header>
      <MobileMenu content={content} open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
