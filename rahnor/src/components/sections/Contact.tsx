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
  return (
    <section id="contact" className="border-t border-[#334155] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[#8B5CF6]">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-3 text-white">
            Free 30-minute discovery call. No commitment.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">What to expect</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/15">
                  <MessageSquare size={18} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="font-medium">Discuss your idea</p>
                  <p className="text-sm text-white">
                    Walk us through your project vision and goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/15">
                  <Target size={18} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="font-medium">Get a rough timeline</p>
                  <p className="text-sm text-white">
                    We&apos;ll map out milestones and delivery estimates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/15">
                  <DollarSign size={18} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="font-medium">Understand the cost</p>
                  <p className="text-sm text-white">
                    Transparent pricing with no hidden fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm text-white">
                <Mail size={16} className="text-[#8B5CF6]" />
                <a
                  href="mailto:hello@rahnor.com"
                  className="transition-colors hover:text-white"
                >
                  hello@rahnor.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Clock size={16} className="text-[#8B5CF6]" />
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://fiverr.com/rahnor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#334155] px-4 py-2 text-sm text-white transition-all hover:border-[#1DBF73]/40 hover:text-[#1DBF73]"
              >
                Hire on Fiverr
              </a>
              <a
                href="https://upwork.com/freelancers/rahnor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#334155] px-4 py-2 text-sm text-white transition-all hover:border-[#14A800]/40 hover:text-[#14A800]"
              >
                Hire on Upwork
              </a>
            </div>
          </motion.div>

          {/* Right — Calendly */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-[#334155]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InlineWidget
              url={CALENDLY_URL}
              pageSettings={pageSettings}
              styles={{ height: "650px" }}
              iframeTitle="Schedule a call"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
