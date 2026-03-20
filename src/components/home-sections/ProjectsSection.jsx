"use client";
import { motion } from "motion/react";
import { BtnGhost } from "../ui/Button";
import SectionTag from "../ui/SectionHeader";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div>
        <section className="flex items-end justify-between mb-12 max-w-7xl mx-auto px-14">
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
        </section>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full mx-auto">
          {PROJECTS.map((p, i) => {
            return (
              <motion.section
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative w-full h-[460px] overflow-hidden group cursor-pointer bg-[#161616] mb-px`}
              >
                {/* Replace src with actual project images */}
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-400 text-[9px] uppercase tracking-[0.2em] mb-1.5">
                    {p.tag}
                  </div>
                  <div
                    className="text-white font-black leading-tight tracking-widest text-2xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    {p.title}
                  </div>
                  <div className="text-white text-[11px] mt-1">
                    {p.location}
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-bg-transparent to-transparent" />
              </motion.section>
            );
          })}
        </section>
      </div>
    </section>
  );
}
