"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { geoMercator, geoPath } from "d3-geo";
import type { Feature, FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import worldGeoJson from "geojson-world-map";
import { mapPins } from "@/data/map-pins";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 480;
function getCountryName(properties: GeoJsonProperties | null) {
  if (!properties) {
    return "Unknown country";
  }

  const candidates = [
    properties.name,
    properties.NAME,
    properties.admin,
    properties.ADMIN,
    properties.sovereignt,
    properties.SOVEREIGNT,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.length > 0) {
      return candidate;
    }
  }

  return "Unknown country";
}

export function WorkMap() {
  const [countries] = useState<
    Feature<Geometry, GeoJsonProperties>[]
  >((worldGeoJson as FeatureCollection<Geometry, GeoJsonProperties>).features);
  const [selectedCountryKey, setSelectedCountryKey] = useState<string | null>(
    null,
  );
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [tooltip, setTooltip] = useState("");
  const projection = useMemo(
    () =>
      geoMercator()
        .scale(155)
        .center([10, 18])
        .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]),
    [],
  );
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    if (!selectedCountryKey) {
      setSelectedCountryName("");
    }
  }, [selectedCountryKey]);

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
          {(tooltip || selectedCountryName) && (
            <div className="pointer-events-none absolute left-1/2 top-5 z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0F172A]/95 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_40px_rgba(2,6,23,0.5)]">
              {tooltip || selectedCountryName}
            </div>
          )}

          <div className="relative mx-auto aspect-2.25/1 w-full max-w-6xl overflow-hidden rounded-3xl bg-[#0B1223] shadow-[0_30px_120px_rgba(2,6,23,0.7)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.03)_100%)]" />
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="absolute inset-0 h-full w-full opacity-95"
              aria-hidden="true"
            >
              {countries.map((country, index) => {
                const d = pathGenerator(country);
                const key = String(country.id ?? index);
                const isSelected = selectedCountryKey === key;

                if (!d) {
                  return null;
                }

                return (
                  <path
                    key={`${country.id ?? "country"}-${index}`}
                    d={d}
                    fill={isSelected ? "#8B5CF6" : "#0F172A"}
                    stroke={isSelected ? "#A78BFA" : "#334155"}
                    strokeWidth={isSelected ? 1.1 : 0.75}
                    className="cursor-pointer transition-all duration-200 hover:fill-[#1E293B] hover:stroke-[#64748B]"
                    role="button"
                    tabIndex={0}
                    aria-label={getCountryName(country.properties)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedCountryKey(key);
                        setSelectedCountryName(getCountryName(country.properties));
                      }
                    }}
                    onClick={() => {
                      setSelectedCountryKey(key);
                      setSelectedCountryName(getCountryName(country.properties));
                    }}
                  />
                );
              })}
            </svg>

            {mapPins.map((pin) => {
              const projected = projection(pin.coordinates);

              if (!projected) {
                return null;
              }

              const [x, y] = projected;
              const left = (x / MAP_WIDTH) * 100;
              const top = (y / MAP_HEIGHT) * 100;

              return (
                <button
                  key={pin.name}
                  type="button"
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                  onMouseEnter={() => setTooltip(pin.name)}
                  onMouseLeave={() => setTooltip("")}
                  onFocus={() => setTooltip(pin.name)}
                  onBlur={() => setTooltip("")}
                  aria-label={pin.name}
                >
                  <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/35 blur-[1px] animate-ping-slow" />
                  <span className="relative block h-3.5 w-3.5 rounded-full border border-[#0A0A1A] bg-[#8B5CF6] shadow-[0_0_18px_rgba(139,92,246,0.8)] transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125" />
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
            <span className="text-2xl font-bold" aria-label="4.9 star rating">
              4.9★
            </span>
            <p className="text-white">Avg Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
