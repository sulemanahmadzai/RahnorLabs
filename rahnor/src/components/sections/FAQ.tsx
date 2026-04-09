"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Rahnor offer?",
    answer:
      "Rahnor offers web development (custom web apps, SaaS platforms, e-commerce, APIs), AI development (AI chatbots, AI agents, RAG pipelines, LLM integrations), mobile app development (React Native cross-platform apps, App Store deployment), and rapid MVP development using AI-assisted tools like Cursor and Claude.",
  },
  {
    question: "How do I hire Rahnor for web development?",
    answer:
      "You can hire Rahnor through Upwork (Top Rated), Fiverr (Level 2 Seller), or directly via rahnor.com. Book a free 30-minute discovery call to discuss your project requirements, get a practical roadmap, and understand transparent pricing.",
  },
  {
    question: "Does Rahnor build AI agents and AI chatbots?",
    answer:
      "Yes. Rahnor specializes in AI agent development and AI chatbot development using OpenAI GPT, Anthropic Claude, LangChain, RAG pipelines with Pinecone, and n8n for workflow automation. We build custom AI solutions trained on your business data that handle thousands of queries daily.",
  },
  {
    question: "Can Rahnor build mobile apps for iOS and Android?",
    answer:
      "Yes. Rahnor builds cross-platform mobile apps using React Native and Expo, delivering native-quality iOS and Android apps from a single codebase. We handle everything from development to Apple App Store and Google Play submission.",
  },
  {
    question: "What technologies does Rahnor use?",
    answer:
      "Rahnor uses React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Express, GraphQL, Stripe, React Native, Expo, OpenAI GPT, Anthropic Claude, LangChain, Pinecone, n8n, and modern full-stack technologies. We specialize in the MERN stack and Next.js for production-grade applications.",
  },
  {
    question: "How fast can Rahnor deliver a project?",
    answer:
      "Rahnor delivers MVPs in days and full production apps in weeks. With AI-accelerated development and a proven track record of 50+ projects, we ship fast without compromising code quality. SaaS MVPs have been delivered in under 2 weeks, and mobile apps have gone from concept to app stores in 3 weeks.",
  },
  {
    question: "What is Rahnor's track record?",
    answer:
      "Rahnor has delivered 50+ projects with a 4.9-star average rating across Upwork and Fiverr. Top Rated on Upwork with 100% Job Success Score. Level 2 Seller on Fiverr. Clients span the United States, United Kingdom, Canada, Germany, Australia, UAE, Saudi Arabia, and Netherlands.",
  },
  {
    question: "Does Rahnor build SaaS platforms?",
    answer:
      "Yes. Rahnor builds custom SaaS platforms with multi-role dashboards, Stripe subscription billing, authentication systems, real-time WebSocket features, and scalable architecture. We've built SaaS products for EdTech, operations management, wellness tracking, and more.",
  },
  {
    question: "Where is Rahnor located?",
    answer:
      "Rahnor is based in Islamabad, Pakistan and works with clients worldwide. We communicate in English, provide daily updates, and work effectively across all time zones. Our clients are in the US, UK, Canada, Australia, Germany, Saudi Arabia, UAE, Netherlands, and beyond.",
  },
  {
    question: "What makes Rahnor different from other developers?",
    answer:
      "Rahnor combines AI-native development with production-grade engineering standards. We ship fast (MVPs in days, not months), use AI tooling from day one, maintain clear daily communication, deliver clean TypeScript code with proper architecture, and provide ongoing support after launch. Our 100% Job Success on Upwork and 4.9-star rating reflect consistent quality.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-[#334155]/60"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-medium text-white sm:text-lg">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-[#8B5CF6]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-[#334155] bg-[radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.08),transparent_45%)] py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#CBD5E1]">
            Everything you need to know about hiring Rahnor for your web, AI, or
            mobile development project.
          </p>
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
