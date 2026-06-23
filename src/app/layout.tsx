import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { agentSchema, placeSchema, websiteSchema } from "@/lib/schema";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

// Old-style high-contrast display serif, used large with air.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-src",
  display: "swap",
});

// Warm humanist body face (explicitly not Inter/Roboto/Arial).
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Clarksville Austin Homes for Sale | Historic 78703 Real Estate",
    template: "%s | Clarksville Austin Homes",
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2e3d30",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Site-wide identity + place schema: agent, person, brokerage, website, Clarksville. */}
        <JsonLd data={[agentSchema(), websiteSchema(), placeSchema()]} />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
        <Analytics />
      </body>
    </html>
  );
}
