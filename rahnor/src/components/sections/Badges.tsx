"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

export function Badges() {
  return (
    <section className="border-y border-[#334155] bg-[#111827]/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Proof of Quality
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Across Top Freelance Platforms
          </h2>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Verified performance on Fiverr and Upwork with consistent delivery,
            ratings, and long-term client satisfaction.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Fiverr */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-[#334155] bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#8B5CF6]/15 blur-2xl" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1DBF73]/10">
                  <span className="text-lg font-bold text-[#1DBF73]">F</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#1DBF73]">
                    Fiverr
                  </p>
                  <p className="text-lg font-bold">Level 2 Seller</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                50+ Orders
              </span>
            </div>
            <div className="relative z-10 mt-5 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#8B5CF6] text-[#8B5CF6]"
                />
              ))}
              <span className="ml-2 text-sm font-medium">5.0 Rating</span>
            </div>
            <p className="relative z-10 mt-3 text-sm text-white/90">
              Consistent 5-star delivery across 50+ orders
            </p>
            <div className="relative z-10 mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/80">
                Fast Delivery
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/80">
                Clear Communication
              </span>
            </div>
          </motion.div>

          {/* Upwork */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-[#334155] bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#8B5CF6]/15 blur-2xl" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1DBF73]/10">
                <span className="text-lg font-bold text-[#14A800]">U</span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#14A800]">
                  Upwork
                </p>
                <p className="text-lg font-bold">Top Rated</p>
              </div>
              <span className="rounded-full bg-[#14A800]/15 px-2.5 py-1 text-xs font-medium text-[#14A800]">
                Top 10%
              </span>
            </div>
            <div className="relative z-10 mt-5 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#14A800]" />
              <span className="text-sm font-medium">100% Job Success Score</span>
            </div>
            <p className="relative z-10 mt-3 text-sm text-white/90">
              Trusted by clients in US, UK, AU, CA & more
            </p>
            <div className="relative z-10 mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/80">
                Long-Term Clients
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/80">
                Product Delivery
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
