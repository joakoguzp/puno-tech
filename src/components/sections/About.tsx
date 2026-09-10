export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#06152d] py-16 sm:py-20 lg:py-24"
    >
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.05] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =========================
              CONTENIDO
          ========================== */}

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Sobre PUNO TECH
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tecnología que funciona.
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                Soluciones que generan confianza.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              En PUNO TECH ayudamos a personas, hogares y empresas a resolver
              sus problemas tecnológicos de manera clara, profesional y
              eficiente.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Nuestro objetivo no es solamente reparar un equipo. Buscamos
              encontrar la causa del problema, ofrecer una solución adecuada y
              ayudarte a mantener tu tecnología funcionando correctamente.
            </p>

            {/* Indicadores */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-extrabold text-cyan-300">01</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Diagnóstico
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Entendemos el problema antes de actuar.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-extrabold text-sky-300">02</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Solución
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Aplicamos la alternativa más adecuada.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-extrabold text-fuchsia-300">03</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Confianza
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Buscamos soluciones duraderas.
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              BLOQUE VISUAL
          ========================== */}

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="relative rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.025] to-fuchsia-400/[0.06] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-8">
              <div className="rounded-2xl border border-white/[0.08] bg-[#081d38]/80 p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      PUNO TECH
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Tecnología al instante
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                    ✓
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      ⚙
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Atención profesional
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Diagnóstico y soporte especializado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-400/10 text-fuchsia-300">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Soluciones con calidad
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Pensadas para durar y funcionar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                      ◉
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Atención en Puno
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Hogares, negocios y empresas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                  <p className="text-sm font-semibold text-cyan-300">
                    Tecnología al instante, soluciones con calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
