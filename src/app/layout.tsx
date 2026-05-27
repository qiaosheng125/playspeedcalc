import type { Metadata } from "next";
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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Playback Speed Calculator",
    description:
      "Calculate media duration, time saved, and finish time for audiobooks, podcasts, courses, and videos.",
    url: siteUrl,
    siteName: "PlaySpeedCalc",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
