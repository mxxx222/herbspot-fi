import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics, PlausibleAnalytics } from "@/components/Analytics";
import { trackPageView } from "@/lib/analytics";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { MobileOptimizations } from "@/components/MobileOptimizations";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { ErrorBoundary } from "@/components/ErrorHandling";
import { Chatbot } from "@/components/Chatbot";

// Typography setup with preload
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
  preload: true,
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HerbSpot — Premium 510 & Aromatherapy",
  description: "Premium 510-patruunat, AIO-laitteet ja tarvikkeet.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <head>
        <OrganizationStructuredData />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/CormorantGaramond-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col font-body">
        <GoogleAnalytics />
        <PlausibleAnalytics />
        <PerformanceOptimizations />
        <MobileOptimizations />
        <Nav />
        <main className="flex-1">
          <ErrorBoundary>
            <AnalyticsProvider>
              {children}
            </AnalyticsProvider>
          </ErrorBoundary>
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}