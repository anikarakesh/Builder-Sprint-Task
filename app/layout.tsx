import type { Metadata } from "next";

import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../lib/context/AppContext";
import { AppShell } from "../components/layout/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Platform - Find Your Dream Property",
  description: "Discover luxury apartments and premium homes from verified builders across India's top cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <AppShell>
            {children}
          </AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
