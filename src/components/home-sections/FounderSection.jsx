"use client";

import { motion } from "motion/react";
import { BtnGold } from "../ui/Button";
import SectionTag from "../ui/SectionHeader";

export default function FounderSection() {
  return (
    <section className="py-24 px-14 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-3/4 bg-[#161616] border border-white/8 overflow-hidden">
            {/* Replace with actual founder image */}
            <div className="absolute inset-0 flex items-center justify-center text-white/10 text-sm uppercase tracking-widest">
              Founder Photo
            </div>
            <div className="absolute bottom-0 left-0 bg-amber-400 px-5 py-3.5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-black font-bold">
                Principal Geophysicist
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SectionTag label="The Founder" />
          <h2
            className="text-black font-black leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 4vw, 58px)",
            }}
          >
            Meet the Geophysicist Behind FAPOS.
          </h2>
          <blockquote className="border-l-2 border-amber-400 pl-5 mb-5">
            <p className="text-black/80 text-lg italic font-light leading-relaxed">
              "Understanding the ground is not optional — it is the foundation
              of everything we build in Africa."
            </p>
          </blockquote>
          <p className="text-black/55 text-[15px] leading-relaxed mb-6">
            With over a decade of fieldwork across Nigeria, he has studied
            aquifer systems from Lagos Island to the Niger Delta — translating
            complex subsurface data into actionable intelligence for developers
            and engineers.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {[
              "Society of Exploration Geophysicists",
              "American Association of Petroleum Geologists",
              "Nigerian Mining & Geosciences Society",
            ].map((a) => (
              <div key={a} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-amber-400 shrink-0" />
                <span className="text-[12px] uppercase tracking-widest text-black/50">
                  {a}
                </span>
              </div>
            ))}
          </div>
          <BtnGold href="/founder">Full Profile</BtnGold>
        </motion.div>
      </div>
    </section>
  );
}
