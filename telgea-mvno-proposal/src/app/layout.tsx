import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telgea MVNO Proposal | DSG Digital Mobile Platform",
  description:
    "Proposal for the licensing of the DSG Digital Mobile Platform — a light MVNO arrangement for Telgea. Prepared by Digital Mobile (Pty) Ltd, a DSG Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${sourceSans3.variable}`}>
        {children}
      </body>
    </html>
  );
}
