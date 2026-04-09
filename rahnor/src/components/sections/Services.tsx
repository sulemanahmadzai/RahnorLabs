"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, categories, type Service } from "@/data/services";

function ServiceCard({
  service,
  index,
  featured = false,
}: {
  service: Service;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#334155]/90 bg-[#0F172A]/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/60 hover:shadow-[0_10px_40px_rgba(2,6,23,0.35)] ${
        featured ? "md:col-span-2 md:min-h-[280px]" : "min-h-[248px]"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.13),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* Icon + Arrow */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1E293B]">
          <service.icon size={22} className="text-[#8B5CF6]" />
        </div>
        <ArrowUpRight
          size={18}
          className="text-white transition-colors group-hover:text-[#8B5CF6]"
        />
      </div>

      {/* Content */}
      <h3
        className={`relative z-10 mt-4 font-semibold ${
          featured ? "text-2xl leading-tight" : "text-lg"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`relative z-10 mt-2 text-white/90 ${
          featured ? "max-w-xl text-base leading-relaxed" : "line-clamp-3 text-sm leading-relaxed"
        }`}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {service.tags.slice(0, featured ? 3 : 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-[#1E293B] px-2.5 py-1 text-xs text-white"
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
  const [featuredService, ...restServices] = filteredServices;

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5CF6]">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Web Development, AI Development & Mobile App Services
          </h2>
          <p className="mt-3 text-balance text-white/75">
            From rapid MVPs to production SaaS platforms — hire expert developers for any project.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex max-w-full rounded-2xl border border-[#334155] bg-[#0F172A]/80 p-1.5">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-[#8B5CF6] text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                      : "border border-[#334155] bg-[#111827] text-white/85 hover:border-[#8B5CF6]/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {featuredService ? (
              <ServiceCard
                key={featuredService.id}
                service={featuredService}
                index={0}
                featured
              />
            ) : null}
            {restServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i + 1} />
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-sm text-white/55">
          Need a custom combination? We tailor scope, timeline, and stack to
          your exact product goals.
        </p>
      </div>
    </section>
  );
}
