"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { mapPins } from "@/data/map-pins";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [20, 20] }}
            className="mx-auto w-full max-w-4xl"
            height={400}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#111827"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#1E293B" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {mapPins.map((pin) => (
              <Marker
                key={pin.name}
                coordinates={pin.coordinates}
                onMouseEnter={() => setTooltip(pin.name)}
                onMouseLeave={() => setTooltip("")}
              >
                {/* Ping ring */}
                <circle
                  r={6}
                  fill="#8B5CF6"
                  opacity={0.2}
                  className="animate-ping-slow"
                />
                {/* Dot */}
                <circle
                  r={3}
                  fill="#8B5CF6"
                  stroke="#0A0A1A"
                  strokeWidth={1}
                  style={{ cursor: "pointer" }}
                />
              </Marker>
            ))}
          </ComposableMap>
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
