import { getContent } from "@/lib/getContent";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ContactSection from "@/components/contact/ContactSection";

export default async function Home({ params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <div className="flex flex-col">
      <HeroSection content={content} />
      <ServicesSection content={content.services} />
      <AboutSection content={content.about} />
      <ContactSection content={content.contact} />
    </div>
  );
}
