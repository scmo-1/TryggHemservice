import { getContent } from "@/lib/getContent";
import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/ui/Header";

export const metadata = {};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const content = await getContent(lang);

  return (
    <html lang={lang} className={nunito.className}>
      <body>
        <Header content={content.nav} />
        <main> {children} </main>
      </body>
    </html>
  );
}
