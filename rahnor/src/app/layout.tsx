import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahnor — Web, Mobile & AI Development",
  description:
    "Premium freelance development studio specializing in web apps, mobile apps, AI integrations, and vibe coding. Top Rated on Upwork, Level 2 on Fiverr.",
  keywords: [
    "web development",
    "mobile development",
    "AI development",
    "Next.js",
    "React Native",
    "SaaS",
    "freelance developer",
  ],
  authors: [{ name: "Rahnor" }],
  openGraph: {
    title: "Rahnor — Web, Mobile & AI Development",
    description:
      "Premium freelance development studio. From web apps to AI agents — production-grade software, fast.",
    url: "https://rahnor.com",
    siteName: "Rahnor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahnor — Web, Mobile & AI Development",
    description:
      "Premium freelance development studio. From web apps to AI agents — production-grade software, fast.",
  },
  metadataBase: new URL("https://rahnor.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A1A] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
