"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Smartphone,
  Rocket,
  Award,
  type LucideIcon,
} from "lucide-react";

interface ServiceBlock {
  icon: LucideIcon;
  title: string;
  tags: string[];
  body: string;
}

const blocks: ServiceBlock[] = [
  {
    icon: Globe,
    title: "Web Development Company",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "MERN"],
    body: "Rahnor is a top-rated web development company that builds custom web applications, SaaS platforms, e-commerce solutions, and APIs using React, Next.js, Node.js, TypeScript, MongoDB, and PostgreSQL. Whether you need a freelance web developer, a full stack developer, or a complete web development team, Rahnor delivers production-grade software fast. Our MERN stack and Next.js expertise has powered 50+ projects for clients in the United States, United Kingdom, Canada, Germany, Australia, and beyond.",
  },
  {
    icon: Bot,
    title: "AI Development Services",
    tags: ["OpenAI", "LangChain", "RAG", "n8n", "Claude"],
    body: "Looking to hire an AI developer? Rahnor specializes in AI development services including custom AI chatbot development, AI agent development, RAG pipeline development, and LLM integration. We build AI solutions using OpenAI GPT, Anthropic Claude, LangChain, Pinecone vector databases, and n8n workflow automation. Our AI agents and chatbots handle thousands of daily queries and save businesses 20+ hours per week through intelligent automation.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tags: ["React Native", "Expo", "iOS", "Android"],
    body: "Rahnor builds cross-platform mobile applications using React Native and Expo for both iOS and Android. Hire a mobile app developer who delivers native-quality apps from a single codebase with faster turnaround. From concept to App Store and Google Play submission, Rahnor handles the entire mobile app development lifecycle including UI/UX design, development, testing, and deployment.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    tags: ["Stripe", "Auth", "Real-time", "Scalable"],
    body: "Need a SaaS development company or rapid MVP development? Rahnor builds custom SaaS platforms with multi-role dashboards, Stripe subscription billing, secure authentication, real-time features, and scalable cloud architecture. Our AI-accelerated development process delivers MVPs in days and production apps in weeks — ideal for startups and businesses that need to ship fast without compromising on quality.",
  },
  {
    icon: Award,
    title: "Why Hire Rahnor",
    tags: ["Top Rated", "100% Success", "4.9★", "50+ Projects"],
    body: "Rahnor is a Top Rated freelancer on Upwork with 100% Job Success Score and a Level 2 Seller on Fiverr with a 4.9-star average rating across 50+ projects. Founded by Suleman Ahmadzai and based in Islamabad, Pakistan, Rahnor serves clients worldwide with production-grade web development, AI development, mobile app development, and custom software solutions. Book a free 30-minute discovery call at rahnor.com to discuss your project.",
  },
];

function ServiceBlockCard({
  block,
  index,
}: {
  block: ServiceBlock;
  index: number;
}) {
  const isWide = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#334155]/80 bg-[#0F172A]/70 p-6 shadow-[0_12px_36px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/40 hover:shadow-[0_16px_48px_rgba(2,6,23,0.55)] sm:p-7 ${
        isWide ? "md:col-span-2" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#8B5CF6]/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15 ring-1 ring-[#8B5CF6]/30">
          <block.icon size={20} className="text-[#A78BFA]" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-white">{block.title}</h2>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {block.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#334155] bg-[#020617]/45 px-2.5 py-0.5 text-[11px] font-medium text-[#CBD5E1]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3.5 text-sm leading-relaxed text-[#94A3B8]">
            {block.body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function SeoContent() {
  return (
    <section
      aria-label="About Rahnor development services"
      className="border-t border-[#334155]/50 bg-[radial-gradient(circle_at_70%_85%,rgba(139,92,246,0.06),transparent_50%)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5CF6]">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Expertise That Ships
          </h2>
          <p className="mt-3 text-[#CBD5E1]">
            Deep capabilities across web, AI, and mobile — built to get your
            product live.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {blocks.map((block, i) => (
            <ServiceBlockCard key={block.title} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
