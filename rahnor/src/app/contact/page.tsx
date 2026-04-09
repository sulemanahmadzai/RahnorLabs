import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Rahnor — Hire a Web, AI & Mobile Developer",
  description:
    "Get in touch with Rahnor for your web development, AI development, or mobile app project. Book a free 30-minute discovery call. Available on Upwork and Fiverr, or contact us directly.",
  keywords: [
    "contact Rahnor",
    "hire web developer",
    "hire AI developer",
    "hire mobile app developer",
    "book a developer call",
    "freelance developer contact",
    "web development quote",
    "AI development consultation",
  ],
  alternates: { canonical: "https://rahnor.com/contact" },
  openGraph: {
    title: "Contact | Rahnor",
    description:
      "Book a free 30-minute discovery call. Hire Rahnor for web, AI, or mobile development.",
    url: "https://rahnor.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-28" />
      <Contact />
    </>
  );
}
