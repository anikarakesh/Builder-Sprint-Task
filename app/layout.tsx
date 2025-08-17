import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../lib/context/AppContext";
import { AppShell } from "../components/layout/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "Real Estate Platform - Find Your Dream Property",
  description: "Discover luxury apartments and premium homes from verified builders across India's top cities.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Real Estate Platform - Find Your Dream Property",
    description: "Discover luxury apartments and premium homes from verified builders across India's top cities.",
    url: "https://www.example.com/",
    siteName: "Real Estate Platform",
    images: [
      { url: "/vercel.svg", width: 1200, height: 630, alt: "Real Estate Platform" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Platform - Find Your Dream Property",
    description: "Discover luxury apartments and premium homes from verified builders across India's top cities.",
    images: ["/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Real Estate Platform",
            url: "https://www.example.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.example.com/buyers?query={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <AppProvider>
          <AppShell>
            {children}
          </AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
