import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ppayglobal.com"),
  icons: { icon: "/ppay.PNG", apple: "/ppay.PNG" },
  title: "PPAY | Simplicity in Payments",
  description:
    "Gift cards, airtime & data, virtual numbers, send money, virtual & physical cards, savings, and offline payments | one premium app.",
  keywords: "ppay, payments, gift cards, virtual card, send money, savings, airtime, fintech Nigeria",
  openGraph: {
    title: "PPAY | Simplicity in Payments",
    description: "All-in-one financial super-app. Payments, cards, savings, and more.",
    type: "website",
    images: [{ url: "/ppay.PNG", width: 1200, height: 630, alt: "PPAY" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased bg-[#02040f]">{children}</body>
    </html>
  );
}
