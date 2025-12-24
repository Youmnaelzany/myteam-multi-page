import type { Metadata } from "next";
import { Livvic } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReadyToStart from "@/components/ReadyToStart";

import "./globals.css";

const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MyTeam - Build & Manage Teams",
    template: "%s | MyTeam",
  },
  description:
    "Find the perfect team members to build and manage your next project with MyTeam. We connect you with top talent worldwide.",
  keywords: [
    "team building",
    "talent acquisition",
    "project management",
    "team management",
  ],
  authors: [{ name: "MyTeam" }],
  openGraph: {
    title: "MyTeam - Build & Manage Teams",
    description:
      "Find the perfect team members to build and manage your next project with MyTeam.",
    url: "https://myteam.com",
    siteName: "MyTeam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyTeam - Build & Manage Teams",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTeam - Build & Manage Teams",
    description:
      "Find the perfect team members to build and manage your next project with MyTeam.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#014E56",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/bg-pattern-about-1-mobile-nav-1.svg"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${livvic.className} mx-auto max-w-360 bg-[#014E56] antialiased`}
      >
        <Header />
        <main className="mt-26">{children}</main>
        <ReadyToStart />
        <Footer />
      </body>
    </html>
  );
}
