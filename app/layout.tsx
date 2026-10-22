import type { Metadata } from "next";
import { Cinzel, Marcellus, Lora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyothi Metal Artifacts | Copper, Brass & Bronze Handicrafts",
  description:
    "Handcrafted copper, brass and bronze utensils, idols and decor from India's traditional metalware artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${marcellus.variable} ${lora.variable} bg-[#150e09] text-[#f3e6ce] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
