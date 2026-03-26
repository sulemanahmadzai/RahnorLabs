"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

export function Badges() {
  return (
    <section className="border-y border-[#334155] bg-[#111827]/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Fiverr */}
          <motion.div
            className="group rounded-2xl border border-[#334155] bg-[#111827] p-8 transition-all duration-300 hover:border-[#8B5CF6]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
            <div className="mt-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#8B5CF6] text-[#8B5CF6]"
                />
              ))}
              <span className="ml-2 text-sm font-medium">5.0 Rating</span>
            </div>
            <p className="mt-3 text-sm text-white">
              Consistent 5-star delivery across 50+ orders
            </p>
          </motion.div>

          {/* Upwork */}
          <motion.div
            className="group rounded-2xl border border-[#334155] bg-[#111827] p-8 transition-all duration-300 hover:border-[#8B5CF6]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#14A800]/10">
                <span className="text-lg font-bold text-[#14A800]">U</span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#14A800]">
                  Upwork
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold">Top Rated</p>
                  <span className="rounded-full bg-[#14A800]/10 px-2 py-0.5 text-xs font-medium text-[#14A800]">
                    Top 10%
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#14A800]" />
              <span className="text-sm font-medium">
                100% Job Success Score
              </span>
            </div>
            <p className="mt-3 text-sm text-white">
              Trusted by clients in US, UK, AU, CA & more
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
