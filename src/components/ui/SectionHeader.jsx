export default function SectionTag({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-amber-400" />
      <span className="text-amber-400 text-[10px] uppercase tracking-[0.2em] font-semibold">
        {label}
      </span>
    </div>
  );
}
