"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare, Target, DollarSign } from "lucide-react";
import { InlineWidget } from "react-calendly";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/YOUR_CALENDLY_USERNAME";

const pageSettings = {
  backgroundColor: "0A0A1A",
  textColor: "E9D5FF",
  primaryColor: "8B5CF6",
  hideGdprBanner: true,
};

export function Contact() {
  const contactSteps = [
    {
      icon: MessageSquare,
      title: "Share your idea",
      description: "Walk us through your product vision, audience, and goals.",
    },
    {
      icon: Target,
      title: "Get a practical roadmap",
      description: "We outline key milestones, priorities, and delivery flow.",
    },
    {
      icon: DollarSign,
      title: "Understand budget clearly",
      description: "Transparent pricing ranges with no hidden surprises.",
    },
  ] as const;

  return (
    <section
      id="contact"
      className="border-t border-[#334155] bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.12),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.08),transparent_45%)] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#CBD5E1]">
            Free 30-minute discovery call. No commitment.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — Info */}
          <motion.div
            className="rounded-3xl border border-[#334155] bg-[#0F172A]/70 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.5)] backdrop-blur-sm md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white">What to expect</h3>
            <div className="mt-6 space-y-4">
              {contactSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3 rounded-2xl border border-[#1E293B] bg-[#020617]/45 p-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15 ring-1 ring-[#8B5CF6]/35">
                    <step.icon size={18} className="text-[#A78BFA]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-sm leading-relaxed text-[#CBD5E1]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-[#1E293B] pt-6">
              <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                <Mail size={16} className="text-[#A78BFA]" />
                <a
                  href="mailto:suleman.atworkalways@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  suleman.atworkalways@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                <Clock size={16} className="text-[#A78BFA]" />
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.fiverr.com/s/jjz8vxm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#334155] bg-[#0B1120] px-4 py-2 text-sm text-white transition-all hover:border-[#1DBF73]/40 hover:bg-[#1DBF73]/10 hover:text-[#1DBF73]"
              >
                Hire on Fiverr
              </a>
              <a
                href="https://www.upwork.com/freelancers/umara40?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#334155] bg-[#0B1120] px-4 py-2 text-sm text-white transition-all hover:border-[#14A800]/40 hover:bg-[#14A800]/10 hover:text-[#14A800]"
              >
                Hire on Upwork
              </a>
            </div>
          </motion.div>

          {/* Right — Calendly */}
          <motion.div
            className="overflow-hidden rounded-3xl border border-[#334155] bg-[#020617]/60 p-1 shadow-[0_20px_60px_rgba(2,6,23,0.6)]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-[1.35rem] border border-[#1E293B]">
              <InlineWidget
                url={CALENDLY_URL}
                pageSettings={pageSettings}
                styles={{ height: "650px" }}
                iframeTitle="Schedule a call"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
