"use client";

import { motion } from "framer-motion";
import { Zap, Brain, MessageCircle, Shield, Star, Handshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ship Fast",
    description: "Idea to deployed product in days, not months.",
    tags: ["Fast Delivery", "Agile"],
  },
  {
    icon: Brain,
    title: "AI-Native Development",
    description: "Every project uses AI tooling from day one.",
    tags: ["AI-Powered", "Modern Stack"],
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Daily updates. No ghosting. No surprises.",
    tags: ["Async", "Transparent"],
  },
  {
    icon: Shield,
    title: "Production-Grade Code",
    description: "Clean architecture, tested, properly deployed.",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "Top Rated Upwork. Level 2 Fiverr. 50+ projects.",
    tags: ["Verified", "Trusted"],
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "Support & iteration after launch. We don't disappear.",
    tags: ["Ongoing Support"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[radial-gradient(circle_at_12%_25%,rgba(139,92,246,0.1),transparent_42%),#0A0A1A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B5CF6]">
            Why Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Teams Choose Rahnor
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
            We do not just ship features. We bring speed, engineering quality, and
            communication discipline so your product keeps moving after launch.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            className="relative self-start overflow-hidden rounded-3xl border border-[#8B5CF6]/30 bg-linear-to-br from-[#8B5CF6]/20 via-[#0F172A] to-[#0B1120] p-7 shadow-[0_20px_60px_rgba(2,6,23,0.55)] lg:col-span-5 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Core Promise
            </p>
            <h3 className="relative z-10 mt-3 text-2xl font-bold leading-tight sm:text-[2rem]">
              Fast execution with
              <br />
              enterprise-grade standards
            </h3>
            <p className="relative z-10 mt-4 text-sm leading-relaxed text-[#E2E8F0]">
              From MVP to scale, every engagement is structured for velocity,
              maintainability, and measurable outcomes. You get direct collaboration,
              clear updates, and production-ready delivery.
            </p>
            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-[#020617]/35 p-3">
                <p className="text-xl font-bold text-[#C4B5FD]">50+</p>
                <p className="text-xs text-[#CBD5E1]">Projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#020617]/35 p-3">
                <p className="text-xl font-bold text-[#C4B5FD]">4.9</p>
                <p className="text-xs text-[#CBD5E1]">Avg Rating</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#020617]/35 p-3">
                <p className="text-xl font-bold text-[#C4B5FD]">24h</p>
                <p className="text-xs text-[#CBD5E1]">Response</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group h-full min-h-[186px] rounded-2xl border border-[#334155] bg-[#0F172A]/75 p-5 shadow-[0_12px_28px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/55 hover:bg-[#0F172A]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <div className="flex h-full items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15 ring-1 ring-[#8B5CF6]/35">
                    <feature.icon size={18} className="text-[#A78BFA]" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#CBD5E1]">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#334155] bg-[#020617]/40 px-2.5 py-1 text-[11px] text-[#E2E8F0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
