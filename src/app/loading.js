export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning ring */}
        <div className="w-10 h-10 border border-yellow-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
