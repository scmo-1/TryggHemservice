import { getContent } from "@/lib/getContent";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default async function Home({ params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <div className="flex flex-col">
      <HeroSection content={content} />
    </div>
  );
}
