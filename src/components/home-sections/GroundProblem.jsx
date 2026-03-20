"use client";

import { motion } from "motion/react";
import { BtnGold } from "../ui/Button";
import SectionTag from "../ui/SectionHeader";
import { STATS } from "@/data/stats";

export default function GroundProblemSection() {
  return (
    <section className="bg-white pb-24 px-14">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="py-20 md:py-32 lg:py-40 xl:py-60 tracking-wide"
      >
        <h2
          className="text-black leading-11 md:leading-14 lg:leading-20 mb-5 max-w-7xl mx-auto"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 6vw, 65px)",
          }}
        >
          Foundations are Failing, Boreholes are Collapsing — West Africa
          Deserves Better Ground Intelligence.
        </h2>
      </motion.section>
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTag label="The Ground Problem" />

          <p className="text-black/55 text-[15px] leading-relaxed mb-4">
            Rapid urbanisation across Lagos, Abuja and beyond is outpacing our
            understanding of the ground beneath. Unverified boreholes fail.
            Foundations shift. Infrastructure collapses.
          </p>
          <p className="text-black/55 text-[15px] leading-relaxed mb-8">
            FAPOS exists to change that. We bring geophysical science directly
            to developers, engineers and government planners who need ground
            truth before they build.
          </p>
          <BtnGold href="/solutions">See Our Solutions</BtnGold>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-px bg-black/8 border border-black/8"
        >
          {STATS.map((s, i) => (
            <div key={i} className="bg-black p-9">
              <div
                className="font-black leading-none text-amber-400 mb-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "52px",
                }}
              >
                {s.num}
              </div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
