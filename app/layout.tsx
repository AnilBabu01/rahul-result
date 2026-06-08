import type { Metadata } from "next";
import "./globals.css";

import Providers from "./Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://sattamatkadpb.net"),

  title: {
    default: "SATTA MATKA | KALYAN MATKA | DPBOSS",
    template: "%s | SATTA MATKA",
  },

  description:
    "Get fast satta matka results, kalyan matka charts, panel charts, jodi charts and DPBoss updates.",

  keywords: [
    "satta matka",
    "kalyan matka",
    "dpboss",
    "matka result",
    "satta result",
    "panel chart",
    "jodi chart",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SATTA MATKA | DPBOSS",
    description: "Fast satta matka results and charts.",
    url: "https://sattamatkadpb.net",
    siteName: "SATTA MATKA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SATTA MATKA",
    description: "Daily satta matka charts",
    images: ["/og.png"],
  },

  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}