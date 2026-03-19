"use client";
import { motion } from "motion/react";
import { BtnGhost } from "../ui/Button";
import SectionTag from "../ui/SectionHeader";
import { PROJECTS } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="py-24 px-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionTag label="Field Projects" />
            <h2
              className="text-black font-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(36px, 4vw, 58px)",
              }}
            >
              Evidence From the Field.
            </h2>
          </div>
          <BtnGhost href="/projects">All Projects</BtnGhost>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-0.5">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer bg-[#161616] ${i === 0 ? "row-span-2" : ""}`}
            >
              {/* Replace src with actual project images */}
              <div
                className={`w-full bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] ${i === 0 ? "h-[460px]" : "h-[225px]"} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-amber-400 text-[9px] uppercase tracking-[0.2em] mb-1.5">
                  {p.tag}
                </div>
                <div
                  className="text-white font-black leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: i === 0 ? "26px" : "18px",
                  }}
                >
                  {p.title}
                </div>
                <div className="text-white/45 text-[11px] mt-1">
                  {p.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
