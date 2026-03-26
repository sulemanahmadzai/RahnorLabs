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
    <section className="bg-[#0A0A1A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Why Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Teams Choose Rahnor
          </h2>
          <p className="mt-4 text-sm text-white/75 sm:text-base">
            We do not just ship features. We bring speed, engineering quality, and
            communication discipline so your product keeps moving after launch.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/20 via-[#111827] to-[#111827] p-7 lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
              Core Promise
            </p>
            <h3 className="relative z-10 mt-3 text-2xl font-bold leading-tight">
              Fast execution with
              <br />
              enterprise-grade standards
            </h3>
            <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/80">
              From MVP to scale, every engagement is structured for velocity,
              maintainability, and measurable outcomes. You get direct collaboration,
              clear updates, and production-ready delivery.
            </p>
            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-xl font-bold text-[#A78BFA]">50+</p>
                <p className="text-xs text-white/70">Projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-xl font-bold text-[#A78BFA]">4.9</p>
                <p className="text-xs text-white/70">Avg Rating</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-xl font-bold text-[#A78BFA]">24h</p>
                <p className="text-xs text-white/70">Response</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 lg:col-span-7">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group rounded-2xl border border-[#334155] bg-[#111827]/90 p-5 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:bg-[#111827]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/15">
                    <feature.icon size={18} className="text-[#8B5CF6]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">
                      {feature.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/20 px-2.5 py-0.5 text-xs text-white/85"
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
