"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/YOUR_CALENDLY_USERNAME";

const pageSettings = {
  backgroundColor: "0A0A1A",
  textColor: "E9D5FF",
  primaryColor: "8B5CF6",
  hideGdprBanner: true,
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });

    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 px-4"
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <motion.div
          className="mx-auto max-w-4xl rounded-full border px-6 py-3"
          animate={
            scrolled
              ? {
                  backgroundColor: "rgba(10, 10, 26, 0.95)",
                  borderColor: "rgba(139, 92, 246, 0.2)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.08)",
                }
              : {
                  backgroundColor: "rgba(17, 24, 39, 0.88)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-white"
            >
              Rahnor
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="hidden items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-[#8B5CF6]/25 md:flex"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              Book a Call
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/95 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:hidden"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-white transition-colors hover:text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => {
                    setIsOpen(false);
                    setIsCalendlyOpen(true);
                  }}
                  className="flex w-fit items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 px-4 py-1.5 text-sm font-medium text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                  Book a Call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Calendly Popup Modal — mounted at root level */}
      <div ref={rootRef} />
      {rootRef.current && (
        <PopupModal
          url={CALENDLY_URL}
          pageSettings={pageSettings}
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootRef.current}
        />
      )}
    </>
  );
}
