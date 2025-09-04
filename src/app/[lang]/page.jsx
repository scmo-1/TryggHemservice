import { getContent } from "@/lib/getContent";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

export default async function Home({ params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <div className="flex flex-col">
      <HeroSection content={content} />
    </div>
  );
}
