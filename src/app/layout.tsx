import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { SkipToContent } from "@/components/layouts/SkipToContent";
import "./globals.css";
import { Hanken_Grotesk, Source_Sans_3 } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Escuela de Posgrado UNSAAC",
    template: "%s | Escuela de Posgrado UNSAAC",
  },
  description: "Escuela de Posgrado de la Universidad Nacional de San Antonio Abad del Cusco",
  metadataBase: new URL("https://posgrado.unsaac.edu.pe"),
  openGraph: {
    title: "Escuela de Posgrado UNSAAC",
    description: "Formación académica de excelencia para profesionales del futuro",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        "font-sans",
        hankenGrotesk.variable,
        sourceSans3.variable
      )}>
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
