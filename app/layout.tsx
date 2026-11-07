import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vesla Jobs | Buscador de Empleos Tech",
  description: "Encuentra las mejores oportunidades laborales en tecnología, desarrollo y diseño en Latinoamérica y Remoto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased light">
      <body className="min-h-full flex flex-col bg-[#f3f2ef] text-[#191919] font-sans">
        {children}
      </body>
    </html>
  );
}
