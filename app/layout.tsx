import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skill Up & Earn | Learn. Build. Earn Online.",
    template: "%s | Skill Up & Earn",
  },
  description:
    "Join Catherine Anthony Ikono's academy and learn five in-demand digital skills — Virtual Assistance, Graphic Design, Social Media Management, Content Writing, and AI Video Editing. Start earning online in just six weeks.",
  keywords: [
    "online academy",
    "digital skills",
    "earn online",
    "virtual assistance",
    "graphic design",
    "social media management",
    "content writing",
    "AI video editing",
    "skill monetization",
    "Catherine Anthony Ikono",
    "work from home",
    "freelancing for beginners",
  ],};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full `}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

