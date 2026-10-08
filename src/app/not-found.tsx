import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06152d] px-6 py-16 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-8rem] h-96 w-96 rounded-full bg-cyan-500/[0.10] blur-[120px]" />
        <div className="absolute -right-32 bottom-[-8rem] h-96 w-96 rounded-full bg-fuchsia-500/[0.08] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <section className="relative w-full max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
          PUNO TECH
        </p>
        <p className="mt-8 bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Parece que esta ruta se perdió.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-300">
          La página que buscas no está disponible o la dirección puede tener un error.
          No te preocupes: podemos llevarte de vuelta al inicio.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/51915210525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            Contactar por WhatsApp
          </a>
        </div>
        <p className="mt-12 text-xs text-slate-500">
          Tecnología al instante, soluciones con calidad.
        </p>
      </section>
    </main>
  );
}
