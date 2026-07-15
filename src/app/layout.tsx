import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "P&L AGROLOGÍSTICA | Logística inteligente para o agronegócio",
  description:
    "Soluções logísticas completas para o agronegócio: transporte de grãos, armazenagem, exportação e rastreabilidade em tempo real.",
  keywords: [
    "P&L AGROLOGÍSTICA",
    "agrologística",
    "logística agrícola",
    "transporte de grãos",
    "agronegócio",
    "exportação",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
