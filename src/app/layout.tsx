// Next Imports
import type { Metadata } from "next";

// Analytics and Speed Insights
import { Analytics } from "@vercel/analytics/next";
 import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Global Styles
import "./globals.css";
import { getBrandMetadata } from "@/data/getMetadata";
import ObserverProvider from "@/lib/ObserverProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <ObserverProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-background font-mono`}>
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ObserverProvider>
  );
}
