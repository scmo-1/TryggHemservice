"use client";
import React from "react";
import AppLink from "./AppLink";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";
import { useParams } from "next/navigation";

function Header({ content }) {
  const [open, setOpen] = useState(false);
  const { lang } = useParams();

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-99 flex justify-between border-b-2 border-violet-300 bg-violet-600/80 p-5 text-white">
        <a href="/" className="h-10 w-20">
          <img
            src="/images/TryggLogo.svg"
            alt="Company logo"
            className="h-full w-full"
          />
        </a>
        <nav className="hidden lg:flex lg:flex-row lg:items-center">
          <ul className="flex gap-8">
            {content.links.map((link, index) => (
              <AppLink key={index} size="md" variant="ghost" href={link.link}>
                {link.title}
              </AppLink>
            ))}
          </ul>
          {lang === "se" ? (
            <a href="/en" className="ms-10">
              <img
                src="/images/england.svg"
                alt="english flag"
                className="h-10 w-10"
              />
            </a>
          ) : (
            <a href="/se" className="ms-10">
              <img
                src="/images/sweden.svg"
                alt="swedish flag"
                className="h-10 w-10"
              />
            </a>
          )}
        </nav>
        <MenuButton open={open} setOpen={setOpen} />
      </header>
      <MobileMenu content={content} open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
