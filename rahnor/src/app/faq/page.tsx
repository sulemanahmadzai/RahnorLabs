import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Rahnor",
  description:
    "Get answers to common questions about Rahnor's web development, AI development, mobile app development, pricing, technologies, delivery speed, and how to hire us. Top Rated on Upwork, Level 2 on Fiverr.",
  keywords: [
    "Rahnor FAQ",
    "hire web developer FAQ",
    "AI development questions",
    "mobile app development FAQ",
    "freelance developer questions",
    "how to hire a developer",
    "web development pricing",
    "AI agent development cost",
  ],
  alternates: { canonical: "https://rahnor.com/faq" },
  openGraph: {
    title: "FAQ | Rahnor",
    description:
      "Everything you need to know about hiring Rahnor for web, AI, or mobile development.",
    url: "https://rahnor.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-28" />
      <FAQ />
      <Contact />
    </>
  );
}
