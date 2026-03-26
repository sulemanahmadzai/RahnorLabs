"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mapPins } from "@/data/map-pins";

function projectToPercent([longitude, latitude]: [number, number]) {
  const x = ((longitude + 180) / 360) * 100;
  const y = ((90 - latitude) / 180) * 100;

  return {
    x: Math.min(98, Math.max(2, x)),
    y: Math.min(90, Math.max(8, y)),
  };
}

export function WorkMap() {
  const [tooltip, setTooltip] = useState("");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Global Reach
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Built For Clients Across The Globe
          </h2>
          <p className="mt-3 text-white">
            We collaborate across time zones — from California to Riyadh.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Tooltip */}
          {tooltip && (
            <div className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-lg bg-[#111827] px-3 py-1.5 text-sm text-white shadow-lg">
              {tooltip}
            </div>
          )}

          <div className="relative mx-auto aspect-[2.1/1] w-full max-w-4xl overflow-hidden rounded-3xl border border-[#334155] bg-[#111827]/70">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.16),transparent_45%)]" />
            <svg
              viewBox="0 0 1000 480"
              className="absolute inset-0 h-full w-full opacity-35"
              aria-hidden="true"
            >
              <path
                d="M120,185 C200,120 310,120 390,165 C450,198 520,183 575,156 C668,110 800,123 890,176"
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M95,295 C170,250 305,250 390,283 C470,315 565,305 655,264 C738,227 860,236 930,285"
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M185,84 C240,65 300,65 352,86 C420,113 496,103 558,79 C635,48 733,54 805,91"
                fill="none"
                stroke="#334155"
                strokeWidth="1.5"
              />
            </svg>

            {mapPins.map((pin) => {
              const { x, y } = projectToPercent(pin.coordinates);

              return (
                <button
                  key={pin.name}
                  type="button"
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onMouseEnter={() => setTooltip(pin.name)}
                  onMouseLeave={() => setTooltip("")}
                  onFocus={() => setTooltip(pin.name)}
                  onBlur={() => setTooltip("")}
                  aria-label={pin.name}
                >
                  <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/35 blur-[1px] animate-ping-slow" />
                  <span className="relative block h-3 w-3 rounded-full border border-[#0A0A1A] bg-[#8B5CF6] shadow-[0_0_18px_rgba(139,92,246,0.8)] transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125" />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Stats below map */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-8 text-center text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-2xl font-bold">10+</span>
            <p className="text-white">Countries</p>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-2xl font-bold">50+</span>
            <p className="text-white">Projects</p>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-2xl font-bold">4.9\u2605</span>
            <p className="text-white">Avg Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
