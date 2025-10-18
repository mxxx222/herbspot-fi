import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics, PlausibleAnalytics } from "@/components/Analytics";
import { trackPageView } from "@/lib/analytics";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { MobileOptimizations } from "@/components/MobileOptimizations";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { ErrorBoundary } from "@/components/ErrorHandling";

export const metadata: Metadata = {
  title: "HerbSpot — Premium 510 & Aromatherapy",
  description: "Premium 510-patruunat, AIO-laitteet ja tarvikkeet.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <OrganizationStructuredData />
      </head>
      <body className="min-h-screen flex flex-col">
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
      </body>
    </html>
  );
}