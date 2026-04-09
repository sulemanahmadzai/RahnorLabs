import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://rahnor.com";
const SITE_NAME = "Rahnor";
const SITE_TITLE =
  "Rahnor — Web Development, AI Development & Mobile App Development Company";
const SITE_DESCRIPTION =
  "Rahnor is a top-rated freelance development studio specializing in web development, AI development, mobile app development, AI agents, SaaS platforms, and custom software. Hire expert developers for your next project. Top Rated on Upwork, Level 2 on Fiverr. 50+ projects delivered worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Rahnor",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "web development company",
    "web developer for hire",
    "hire web developer",
    "freelance web developer",
    "custom web application development",
    "web app development services",
    "full stack web development",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MERN stack developer",
    "AI development company",
    "AI development services",
    "hire AI developer",
    "AI agent development",
    "AI agents for business",
    "custom AI chatbot development",
    "AI automation services",
    "GPT integration services",
    "LLM integration developer",
    "RAG pipeline development",
    "AI chatbot developer",
    "mobile app development company",
    "mobile app developer for hire",
    "hire mobile app developer",
    "React Native developer",
    "cross-platform mobile app development",
    "iOS and Android app development",
    "mobile app development services",
    "SaaS development company",
    "SaaS platform development",
    "custom SaaS development",
    "MVP development services",
    "rapid MVP development",
    "startup software development",
    "freelance software developer",
    "hire freelance developer",
    "top rated Upwork developer",
    "Fiverr developer",
    "e-commerce development",
    "API development services",
    "software development agency",
    "vibe coding",
    "AI-assisted development",
    "production-grade software development",
  ],
  authors: [
    { name: "Rahnor", url: SITE_URL },
    { name: "Suleman Ahmadzai", url: "https://www.linkedin.com/in/sulemanahmadzai/" },
  ],
  creator: "Rahnor",
  publisher: "Rahnor",
  category: "technology",
  openGraph: {
    title: SITE_TITLE,
    description:
      "Hire Rahnor for web development, AI development, mobile app development, and AI agent development. Top Rated on Upwork & Fiverr. 50+ projects delivered. Production-grade software, fast.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahnor — Web, AI & Mobile App Development Studio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Hire Rahnor for web development, AI development, mobile app development, and AI agents. Top Rated on Upwork & Fiverr. 50+ projects shipped.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "48x48" },
      { url: "/assets/Rahnor%20Mark.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-icon", type: "image/png", sizes: "180x180" },
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
  alternates: {
    canonical: SITE_URL,
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
      className={`${inter.variable} ${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A1A] text-white">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
