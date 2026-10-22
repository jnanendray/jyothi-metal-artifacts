import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-amber-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
