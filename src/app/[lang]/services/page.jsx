"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ServicesPage from "@/components/services/ServicesPage";

function page() {
  const { content } = useLanguage();
  return (
    <div className="">
      <ServicesPage content={content} />
    </div>
  );
}

export default page;
