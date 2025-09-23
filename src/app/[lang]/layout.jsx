import { getContent } from "@/lib/getContent";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollHandler from "@/components/ScrollHandler";

export const metadata = {};

const Bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <html lang={lang} className={Bricolage.className}>
      <body>
        <LanguageProvider content={content}>
          <ScrollHandler />
          <Header content={content} />
          <main> {children} </main>
          <Footer content={content} />
        </LanguageProvider>
      </body>
    </html>
  );
}
