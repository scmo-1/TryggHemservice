import { getContent } from "@/lib/getContent";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata = {};

const nunito = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <html lang={lang} className={nunito.className}>
      <body>
        <Header content={content} />
        <main> {children} </main>
        <Footer content={content} />
      </body>
    </html>
  );
}
