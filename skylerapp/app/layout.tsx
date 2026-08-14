import type { Metadata } from "next";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "./globals.css";

const siteUrl = "https://skylerai.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Skyler \u2014 TikTok Video Downloader, No Watermark",
  description:
    "Paste a TikTok link and Skyler grabs the MP4 for you in seconds, watermark-free. Free, no sign-up, no app install.",
  keywords: [
    "tiktok downloader",
    "download tiktok video",
    "tiktok no watermark",
    "save tiktok video",
    "tiktok to mp4",
  ],
  openGraph: {
    title: "Skyler \u2014 TikTok Video Downloader",
    description: "Paste a link, Skyler grabs your TikTok, watermark-free. Free and fast.",
    url: siteUrl,
    siteName: "Skyler",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Skyler \u2014 TikTok Video Downloader",
    description: "Paste a link, Skyler grabs your TikTok, watermark-free. Free and fast.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon-180.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
