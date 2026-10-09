import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "MathSign",
  description: "Platform pembelajaran materi pecahan yang visual, interaktif, dan inklusif.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}