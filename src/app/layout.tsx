import type { Metadata } from "next";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { SkipToContent } from "@/components/layouts/SkipToContent";
import "./globals.css";

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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
