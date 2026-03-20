"use client";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="bg-[#050505] font-inter">
      <section className="border-t border-white/5 py-12 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-w-[90vw] mx-auto">
        <div>
          <Link href="/" className="flex flex-col gap-0.5 mb-4">
            <span className="text-white font-black tracking-[0.3em] text-2xl">
              FAPOS
            </span>
            <span className="text-[10px] tracking-[0.2em] text-amber-400 uppercase font-medium">
              West Africa
            </span>
          </Link>
          <p className="text-white/45 text-[13px] leading-relaxed max-w-[240px]">
            Geophysical science and groundwater intelligence powering
            sustainable infrastructure across West Africa.
          </p>
        </div>
        {[
          {
            title: "Solutions",
            links: [
              "Groundwater Intelligence",
              "Geotechnical Investigation",
              "Infrastructure Risk",
            ],
          },
          {
            title: "Company",
            links: [
              "The Founder",
              "Field Projects",
              "Ground Lab",
              "Field Journal",
            ],
          },
          {
            title: "Contact",
            links: ["Lagos, Nigeria", "info@fapos.com", "LinkedIn"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-amber-400 text-[10px] uppercase tracking-[0.2em] mb-4 font-playfair">
              {col.title}
            </h4>
            {col.links.map((l) => (
              <a
                key={l}
                href="#"
                className="block text-white/45 hover:text-white text-[13px] mb-2.5 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </section>
      <div className="bg-[#050505] border-t border-white/5 px-14 py-5 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[11px] text-white/20 tracking-[0.1em]">
          © 2025 FAPOS West Africa. All rights reserved.
        </p>
        <p className="text-[11px] text-white/20 tracking-[0.1em]">
          Geophysical Science for Africa's Future.
        </p>
      </div>
    </footer>
  );
}
