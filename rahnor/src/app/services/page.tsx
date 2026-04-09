import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Web Development, AI Development & Mobile App Services",
  description:
    "Explore Rahnor's development services: custom web applications, AI chatbots, AI agents, mobile apps, SaaS platforms, e-commerce, API development, and rapid MVP development. Hire expert developers today.",
  keywords: [
    "web development services",
    "AI development services",
    "mobile app development services",
    "SaaS development",
    "AI chatbot development",
    "AI agent development",
    "custom web application",
    "React Native development",
    "Next.js development",
    "MVP development",
    "e-commerce development",
    "API development",
  ],
  alternates: { canonical: "https://rahnor.com/services" },
  openGraph: {
    title: "Development Services | Rahnor",
    description:
      "Web apps, AI agents, mobile apps, SaaS, and more. Hire Rahnor for production-grade development.",
    url: "https://rahnor.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-28" />
      <Services />
      <Contact />
    </>
  );
}
