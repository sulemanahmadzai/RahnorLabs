"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, categories, type Service } from "@/data/services";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-[#334155] bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40"
    >
      {/* Icon + Arrow */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E293B]">
          <service.icon size={22} className="text-[#8B5CF6]" />
        </div>
        <ArrowUpRight
          size={18}
          className="text-white transition-colors group-hover:text-[#8B5CF6]"
        />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-white">
        {service.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#1E293B] px-2.5 py-0.5 text-xs text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-3 text-white">
            From rapid prototypes to production SaaS — pick your category.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#8B5CF6] text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                  : "border border-[#334155] bg-[#111827] text-white hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
