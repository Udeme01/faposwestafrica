"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SLIDES } from "@/data/heroSlides";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
    }, 15000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setCurrent(i);
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
    }, 15000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* ── VIDEO SLIDER ── */}
      <AnimatePresence mode="sync">
        {SLIDES.map((slide, i) =>
          i === current ? (
            <motion.div
              key={slide.id}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src={slide.video}
                preload="auto"
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* ── HERO CONTENT ── */}
      <section className="absolute inset-0 z-10 flex flex-col justify-end pb-24 md:px-16 max-w-[90vw] mx-auto w-full left-0 right-0">
        {/* Tag */}
        <AnimatePresence mode="wait">
          <motion.span
            key={`tag-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 w-fit"
          >
            <span className="w-8 h-px bg-amber-400" />
            <span
              className="text-amber-400 uppercase text-xs font-bold tracking-[0.25em] font-inter"
              style={{ letterSpacing: "0.2em" }}
            >
              {SLIDES[current].tag}
            </span>
          </motion.span>
        </AnimatePresence>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`h1-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white font-black leading-none mb-4 tracking-wider font-playfair"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              // letterSpacing: "0.02em",
              maxWidth: "800px",
            }}
          >
            {SLIDES[current].headline}
          </motion.h1>
        </AnimatePresence>

        {/* Subheadline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-inter"
          >
            {SLIDES[current].sub}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-widest px-7 py-3.5 transition-all duration-200 hover:scale-105 active:scale-100 font-inter"
            style={{ letterSpacing: "0.15em" }}
          >
            Start Your Investigation
          </a>
          <a
            href="/solutions"
            className="border border-white/40 hover:border-white text-white font-medium uppercase text-xs tracking-widest px-7 py-3.5 transition-all duration-200 hover:bg-white/10 font-inter"
            style={{ letterSpacing: "0.15em" }}
          >
            Our Solutions
          </a>
        </motion.div>
      </section>

      {/* ── SLIDE INDICATORS ── */}
      <div className="absolute bottom-8 right-6 md:right-16 z-20 flex flex-col items-end gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex items-center gap-2 group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className="text-white/40 group-hover:text-white/70 text-[10px] tracking-widest transition-colors">
              0{i + 1}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                i === current
                  ? "w-10 bg-amber-400"
                  : "w-4 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── SCROLL HINT ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-inter">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </div>
  );
}
