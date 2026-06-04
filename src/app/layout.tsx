import type { Metadata } from "next";
import { AnalyticsScripts } from "./analytics";
import "./globals.css";

const siteUrl = "https://www.playspeedcalc.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Playback Speed Calculator - Calculate Time Saved at Any Speed",
    template: "%s | PlaySpeedCalc"
  },
  description:
    "Calculate how long an audiobook, podcast, course, or video will take at 1.25x, 1.5x, 2x, or any playback speed. See time saved and finish time instantly.",
  openGraph: {
    title: "Playback Speed Calculator",
    description:
      "Calculate media duration, time saved, and finish time for audiobooks, podcasts, courses, and videos.",
    url: siteUrl,
    siteName: "PlaySpeedCalc",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PlaySpeedCalc playback speed calculator preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Playback Speed Calculator",
    description:
      "Calculate media duration, time saved, and finish time for audiobooks, podcasts, courses, and videos.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
