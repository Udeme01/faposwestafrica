"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("ACE Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-yellow-500" />
          <span className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase">
            Something went wrong
          </span>
          <div className="w-8 h-px bg-yellow-500" />
        </div>

        <h2 className="text-white text-3xl font-bold mb-4">
          Unexpected error.
        </h2>

        <p className="text-white/40 text-sm leading-relaxed mb-10">
          Something went wrong on our end. Please try again or return home.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-yellow-500 hover:bg-yellow-400 text-black text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 cursor-pointer border-none hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border border-white/20 hover:border-white/40 text-white/60 hover:text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 no-underline transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
