import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Portfolio — Web, AI & Mobile App Projects",
  description:
    "Browse Rahnor's portfolio of 50+ delivered projects including SaaS platforms, AI-powered apps, EdTech platforms, mobile apps, e-commerce solutions, and custom web applications for clients worldwide.",
  keywords: [
    "web development portfolio",
    "AI development projects",
    "mobile app portfolio",
    "SaaS projects",
    "freelance developer portfolio",
    "Next.js projects",
    "React Native projects",
    "AI chatbot projects",
  ],
  alternates: { canonical: "https://rahnor.com/projects" },
  openGraph: {
    title: "Portfolio | Rahnor",
    description:
      "50+ delivered projects — SaaS, AI apps, mobile apps, and web platforms for clients worldwide.",
    url: "https://rahnor.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-28" />
      <Projects />
      <Contact />
    </>
  );
}
