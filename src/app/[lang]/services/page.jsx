"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

function page() {
  const content = useLanguage();
  return (
    <section>
      <h1></h1>
    </section>
  );
}

export default page;
