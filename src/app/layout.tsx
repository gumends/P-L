import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "P&L AGROLOGÍSTICA | Refino de óleo de soja e processamento de soja",
  description:
    "Refino de óleo de soja e processamento de soja no Paraná. Controle de qualidade, tecnologia industrial e produção em escala.",
  keywords: [
    "P&L AGROLOGÍSTICA",
    "refino de óleo de soja",
    "processamento de soja",
    "óleo de soja refinado",
    "agronegócio",
    "Paraná",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} h-full scroll-smooth overflow-x-hidden antialiased`}>
      <body className="min-h-full overflow-x-hidden bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
