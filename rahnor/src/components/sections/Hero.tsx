"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

const rotatingWords = ["Web Apps", "AI Agents", "Mobile Apps", "SaaS Products"];

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const projectCount = useCounter(50, 2000);
  const rating = useCounter(49, 2000);
  const successRate = useCounter(100, 2000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    type Dot = {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
    };

    let dots: Dot[] = [];
    let raf = 0;
    const spacing = 34;
    const radius = 180;
    const pullStrength = 0.28;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          dots.push({ baseX: x, baseY: y, x, y });
        }
      }
    };

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let influence = 0;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - dot.baseX;
          const dy = mouseRef.current.y - dot.baseY;
          const distance = Math.hypot(dx, dy);
          influence = Math.max(0, 1 - distance / radius);

          targetX = dot.baseX + dx * influence * pullStrength;
          targetY = dot.baseY + dy * influence * pullStrength;
        }

        dot.x += (targetX - dot.x) * 0.14;
        dot.y += (targetY - dot.y) * 0.14;

        const alpha = 0.22 + influence * 0.55;
        ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.25 + influence * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    setup();
    animate();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          active: true,
        };
      }}
      onMouseLeave={() => {
        mouseRef.current.active = false;
      }}
    >
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 px-4 py-1.5 text-sm font-medium text-white">
            Top Rated on Fiverr & Upwork
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We Build Digital Products
          <br />
          That Actually Ship.
        </motion.h1>

        {/* Rotating subtitle */}
        <motion.div
          className="mt-6 text-lg text-white sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>We build </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[wordIndex]}
              className="inline-block font-semibold text-[#8B5CF6]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Body */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Rahnor delivers production-grade software, fast. From idea to deployed
          product — no fluff, no delays.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#7C3AED] hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
          >
            Send Your Requirements
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full border border-[#334155] px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:text-white"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trust checkmarks */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {["Vibe Coding", "Full Stack Dev", "AI Integrations"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check size={14} className="text-[#8B5CF6]" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div>
            <span className="text-2xl font-bold">{projectCount}+</span>
            <p className="text-white">Projects Delivered</p>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-2xl font-bold">
              {(rating / 10).toFixed(1)}&#9733;
            </span>
            <p className="text-white">Avg Rating</p>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-2xl font-bold">2</span>
            <p className="text-white">Platforms</p>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-2xl font-bold">{successRate}%</span>
            <p className="text-white">Job Success</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-2 pb-8 text-xs text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
