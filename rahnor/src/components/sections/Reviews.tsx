"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[350px] flex-shrink-0 rounded-2xl border border-[#334155] bg-[#111827] p-5">
      <div className="flex items-center gap-0.5">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-[#8B5CF6] text-[#8B5CF6]"
          />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">
            {review.name}{" "}
            <span className="ml-1">{review.flag}</span>
          </p>
          <p className="text-xs text-white">{review.country}</p>
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            review.platform === "Fiverr"
              ? "bg-[#1DBF73]/10 text-[#1DBF73]"
              : "bg-[#14A800]/10 text-[#14A800]"
          }`}
        >
          {review.platform}
        </span>
      </div>
    </div>
  );
}

export function Reviews() {
  const firstRow = reviews.slice(0, 5);
  const secondRow = reviews.slice(5);

  return (
    <section id="reviews" className="overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mt-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(to right, #0A0A1A, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(to left, #0A0A1A, transparent)",
          }}
        />
        <div className="animate-marquee-left flex gap-6">
          {[...firstRow, ...firstRow].map((review, i) => (
            <ReviewCard key={`row1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mt-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(to right, #0A0A1A, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(to left, #0A0A1A, transparent)",
          }}
        />
        <div className="animate-marquee-right flex gap-6">
          {[...secondRow, ...secondRow].map((review, i) => (
            <ReviewCard key={`row2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
