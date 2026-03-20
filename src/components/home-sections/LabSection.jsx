"use client";
import { motion } from "motion/react";
import SectionTag from "../ui/SectionHeader";
import { BtnGhost } from "../ui/Button";
import { ARTICLES } from "@/data/articles";

export default function LabSection() {
  return (
    <section className="py-24 px-14 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionTag label="FAPOS Ground Lab" />
            <h2
              className="text-black font-black leading-none font-playfair"
              style={{
                fontSize: "clamp(36px, 4vw, 58px)",
              }}
            >
              Knowledge From the Ground Up.
            </h2>
          </div>
          <BtnGhost href="/lab">All Articles</BtnGhost>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/8">
          {ARTICLES.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#161616] hover:bg-[#181818] p-9 border-b-2 border-transparent hover:border-amber-400 transition-all duration-300 cursor-pointer"
            >
              <div className="text-amber-400 text-[10px] uppercase tracking-[0.18em] mb-3.5">
                {a.date}
              </div>
              <h3
                className="text-white font-black mb-3 leading-tight font-playfair"
                style={{
                  fontSize: "22px",
                  letterSpacing: "0.04em",
                }}
              >
                {a.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {a.excerpt}
              </p>
              <div className="flex items-center gap-1.5 mt-5 text-amber-400 text-[10px] uppercase tracking-[0.14em]">
                Read Article →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
