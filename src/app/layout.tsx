// Base Imports
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Get Brand Metadata
import { getBrandMetadata } from "@/data/getMetadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const brandId = process.env.BRAND_ID;

  if (!brandId) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  const brandMetadata = await getBrandMetadata(brandId);
  return brandMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
