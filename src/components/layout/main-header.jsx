"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/data/navLinks";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/50 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-none group">
            <span
              className="text-white font-black tracking-[0.25em] text-xl uppercase"
              style={{
                fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                letterSpacing: "0.3em",
              }}
            >
              FAPOS
            </span>
            <span className="text-[10px] tracking-[0.2em] text-amber-400 uppercase font-medium">
              Ground Intelligence
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-white/80 hover:text-white text-sm tracking-widest uppercase font-medium transition-colors duration-200 group"
                  style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-200"
              style={{ letterSpacing: "0.12em" }}
            >
              Start Investigation
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-10 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-white text-3xl font-black uppercase tracking-widest hover:text-amber-400 transition-colors"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  letterSpacing: "0.2em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08 + 0.1 }}
              className="mt-4 bg-amber-400 text-black font-bold uppercase tracking-widest px-8 py-4 text-sm"
            >
              Start Investigation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
