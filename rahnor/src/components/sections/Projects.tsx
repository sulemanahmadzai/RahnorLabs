"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-[#0A0A1A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Work We&apos;re Proud Of
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-[#334155] bg-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Image placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-[#1E293B] to-[#111827]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#334155]">
                    {project.name[0]}
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-[#8B5CF6]/15 px-2.5 py-0.5 text-xs font-medium text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors group-hover:text-[#8B5CF6]"
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="mt-1 text-sm text-white">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#1E293B] px-2.5 py-0.5 text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
