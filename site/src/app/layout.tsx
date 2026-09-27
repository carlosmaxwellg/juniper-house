import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Manrope, Newsreader } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/global";
import { siteContent } from "@/content/site";

import { MobileBookingAction } from "@/components/global/mobile-booking-action";

import { allowIndexing, publicSiteUrl } from "@/lib/metadata";

import "./globals.css";
import "./home.css";
import "./interior.css";
import "./portfolio.css";
import "./premium.css";

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
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {/* Route changes crossfade page content; header and footer stay anchored. */}
          <ViewTransition default="none" update="page-swap">
            {children}
          </ViewTransition>
        </main>
        <SiteFooter />
        <MobileBookingAction />
      </body>
    </html>
  );
}
