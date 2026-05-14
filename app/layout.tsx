import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "SkilltoIncome | Learn. Build. Earn Online.",
    template: "%s | SkilltoIncome",
  },
  description:
    "Join Catherine Anthony Ikono's academy and learn five in-demand digital skills — Virtual Assistance, Graphic Design, Social Media Management, Content Writing, and AI Video Editing. Start earning online in just six weeks.",
  keywords: [
    "online academy",
    "digital skills",
    "earn online",
    "skill to income",
    "virtual assistance",
    "graphic design",
    "social media management",
    "content writing",
    "AI video editing",
    "skill monetization",
    "Catherine Anthony Ikono",
    "work from home",
    "freelancing for beginners",
  ],
  authors: [
    { name: "Catherine Anthony Ikono" },
    { name: "Uche Godswill", url: "https://github.com/Uche-arch" },
  ],
  creator: "Uche Godswill",
  metadataBase: new URL("https://skilltoincome-neon.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://skilltoincome-neon.vercel.app",
    siteName: "SkilltoIncome",
    title: "SkilltoIncome | Learn. Build. Earn Online.",
    description:
      "Learn five in-demand digital skills and start earning online in six weeks. No laptop, no experience, no excuses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkilltoIncome Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkilltoIncome | Learn. Build. Earn Online.",
    description:
      "Learn five in-demand digital skills and start earning online in six weeks. No laptop, no experience, no excuses.",
    images: ["/og-image.jpg"],
    creator: "@skilltoincome",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
