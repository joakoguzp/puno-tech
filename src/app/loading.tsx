export default function Loading() {
  return (
    <main
      aria-label="Cargando PUNO TECH"
      className="flex min-h-[55vh] items-center justify-center bg-[#06152d] px-6 py-20 text-white"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-cyan-300/15 border-t-cyan-300 motion-reduce:animate-none" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            PUNO TECH
          </p>
          <p className="mt-2 text-sm text-slate-400">Preparando tus soluciones tecnológicas…</p>
        </div>
      </div>
    </main>
  );
}
