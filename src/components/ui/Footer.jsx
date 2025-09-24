import React from "react";
import AppLink from "./AppLink";

function Footer({ content }) {
  return (
    <footer className="p-auto flex flex-col items-center bg-violet-950 text-white">
      <div className="flex w-full max-w-[480px] flex-col items-center p-5">
        <div className="mb-10 h-30 w-40">
          <img
            src="/images/TryggLogo.svg"
            alt="Company logo"
            className="h-full w-full"
          />
        </div>
        <div className="flex w-full justify-between">
          <ul className="flex flex-col gap-4">
            {content.links.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4">
            <li>{content.contact.phone}</li>
            <li>{content.contact.email}</li>
          </ul>
        </div>
        <span className="mt-15 text-sm">Copyright © 2025</span>
        <span className="text-sm">
          Designed and built by: <a href="https://scmo.dev">scmo.</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
