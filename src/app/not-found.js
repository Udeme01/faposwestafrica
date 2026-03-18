import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <p
          className="text-[120px] md:text-[160px] font-bold leading-none text-white/5 select-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          404
        </p>

        <div className="flex items-center justify-center gap-3 mb-4 -mt-6">
          <div className="w-8 h-px bg-yellow-500" />
          <span
            className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Page Not Found
          </span>
          <div className="w-8 h-px bg-yellow-500" />
        </div>

        <h1
          className="text-white text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          This page doesn't exist.
        </h1>

        <p
          className="text-white/40 text-sm leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The page you're looking for may have been moved, deleted, or never
          existed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-yellow-500 hover:bg-yellow-400 text-black text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/assessment"
            className="border border-white/20 hover:border-white/40 text-white/60 hover:text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 no-underline transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Take Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
