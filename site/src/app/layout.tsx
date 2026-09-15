import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";

import { PortfolioNotice, SiteFooter, SiteHeader } from "@/components/global";
import { siteContent } from "@/content/site";

import { MobileBookingAction } from "@/components/global/mobile-booking-action";

import { allowIndexing, publicSiteUrl } from "@/lib/metadata";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl || "http://localhost:3000"),
  robots: { index: allowIndexing, follow: true },
  icons: { icon: "/icon.svg" },
  title: {
    default: siteContent.name,
    template: `%s | ${siteContent.shortName}`,
  },
  description: siteContent.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <PortfolioNotice />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MobileBookingAction />
      </body>
    </html>
  );
}
