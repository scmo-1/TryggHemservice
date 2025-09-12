"use client";
import React from "react";
import { useContext, createContext } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, content }) {
  return (
    <LanguageContext.Provider value={{ content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
