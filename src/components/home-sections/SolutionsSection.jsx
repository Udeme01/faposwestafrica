"use client";
import { motion } from "motion/react";
import { BtnGhost } from "../ui/Button";
import SectionTag from "../ui/SectionHeader";
import Link from "next/link";
import { SOLUTIONS } from "@/data/solutions";

export default function SolutionsSection() {
  return (
    <section className="py-24 px-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <SectionTag label="Scientific Solutions" />
            <h2
              className="text-black font-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(36px, 4vw, 58px)",
              }}
            >
              Our Scientific Solutions.
            </h2>
          </div>
          <BtnGhost href="/solutions">All Services</BtnGhost>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#161616] hover:bg-[#1a1a1a] p-10 relative overflow-hidden transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <h3
                className="text-white font-black mb-3"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  letterSpacing: "0.06em",
                }}
              >
                {s.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed mb-5">
                {s.desc}
              </p>
              <div className="flex flex-col gap-2 mb-6">
                {s.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[12px] text-white/40"
                  >
                    <div className="w-1 h-1 bg-amber-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-200"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
