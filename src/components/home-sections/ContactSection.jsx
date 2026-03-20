"use client";
import { motion } from "motion/react";
import SectionTag from "../ui/SectionHeader";

export default function ContactSection() {
  return (
    <section className="relative py-24 px-14 overflow-hidden bg-white font-inter">
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTag label="Work With Us" />
          <h2
            className="text-black font-black leading-[0.95] mb-6 font-playfair"
            style={{
              fontSize: "clamp(52px, 6vw, 80px)",
            }}
          >
            Start Your
            <br />
            <span className="text-amber-400">Ground</span>
            <br />
            Investigation.
          </h2>
          <p className="text-black/50 text-[14px] leading-relaxed max-w-[360px]">
            Tell us about your project. We will assess your ground investigation
            needs and get back to you within 48 hours.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Adeyemi"
                  className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Organisation
                </label>
                <input
                  type="text"
                  placeholder="Acme Developers Ltd"
                  className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors placeholder:text-black/20"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+234 801 000 0000"
                  className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@acme.com"
                  className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors placeholder:text-black/20"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                Project Type
              </label>
              <select className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors appearance-none">
                <option value="">Select project type</option>
                <option>Borehole Siting</option>
                <option>Aquifer Mapping</option>
                <option>Geotechnical Investigation</option>
                <option>Infrastructure Risk Analysis</option>
                <option>Estate Development Study</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Lagos, Nigeria"
                  className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                  Timeline
                </label>
                <select className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors appearance-none">
                  <option value="">Select timeline</option>
                  <option>Urgent (within 2 weeks)</option>
                  <option>1 month</option>
                  <option>1–3 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                Brief Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe your project and what you need..."
                className="bg-black/4 border border-black/8 focus:border-amber-400 text-black text-[13px] px-3.5 py-3 outline-none transition-colors resize-none placeholder:text-black/20"
              />
            </div>
            <button
              type="submit"
              className="w-fit bg-amber-400 hover:bg-amber-300 text-black text-[11px] font-bold uppercase tracking-[0.18em] px-8 py-4 mt-2 transition-colors"
            >
              Submit Investigation Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
