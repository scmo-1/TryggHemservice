export const getContent = async (lang) => {
  if (lang === "se") {
    const content = await import("../content/swe.json");
    return content.default;
  }
  const content = await import("../content/eng.json");
  return content.default;
};
