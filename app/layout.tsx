import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Stylish Footwear | Online Shoe Store for Men, Women & Kids",
  description:
    "Discover the latest collection of stylish shoes for men, women, and kids at our online shoe store. Shop sneakers, boots, heels, and more with great deals and fast shipping.",
  keywords: [
    "shoes",
    "online shoe store",
    "buy shoes online",
    "sneakers",
    "heels",
    "men shoes",
    "women shoes",
    "kids shoes",
    "footwear",
    "boots",
    "fashion shoes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
