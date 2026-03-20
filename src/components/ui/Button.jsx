import Link from "next/link";

export function BtnGold({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-bold uppercase tracking-[0.15em] px-7 py-3.5 transition-colors duration-200 font-inter ${className}`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center border border-black/30 hover:border-black text-black text-[10px] font-medium uppercase tracking-[0.15em] px-7 py-3.5 transition-all duration-200 hover:bg-black/5 font-inter ${className}`}
    >
      {children}
    </Link>
  );
}
