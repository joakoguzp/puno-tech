export default function About() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#06152d] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          FONDOS DECORATIVOS
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.055] blur-[130px]" />
        <div className="absolute -right-40 bottom-[8%] h-[460px] w-[460px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =====================================================
              CONTENIDO PRINCIPAL
          ====================================================== */}
          <div>
            {/* Etiqueta */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.045] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                Sobre PUNO TECH
              </span>
            </div>

            {/* Título */}
            <h2 id="about-heading" className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Soporte técnico en Puno.
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                Tecnología atendida con cuidado.
              </span>
            </h2>

            {/* Texto principal */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Cada equipo recibe una revisión cuidadosa y una explicación sencilla antes de cualquier intervención.
            </p>

            {/* =================================================
                PILARES
            ================================================== */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {/* Pilar 01 */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]">
                <p className="text-2xl font-extrabold tracking-tight text-cyan-300">
                  01
                </p>

                <div className="mt-4 h-px w-8 bg-cyan-400/40 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-400" />

                <h3 className="mt-4 text-sm font-bold text-white">
                  Claridad
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Recibes una explicación antes de autorizar cualquier trabajo.
                </p>
              </div>

              {/* Pilar 02 */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-sky-400/[0.035]">
                <p className="text-2xl font-extrabold tracking-tight text-sky-300">
                  02
                </p>

                <div className="mt-4 h-px w-8 bg-sky-400/40 transition-all duration-300 group-hover:w-12 group-hover:bg-sky-400" />

                <h3 className="mt-4 text-sm font-bold text-white">Cuidado</h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Manipulamos cada equipo con atención durante la revisión.
                </p>
              </div>

              {/* Pilar 03 */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/20 hover:bg-fuchsia-400/[0.035]">
                <p className="text-2xl font-extrabold tracking-tight text-fuchsia-300">
                  03
                </p>

                <div className="mt-4 h-px w-8 bg-fuchsia-400/40 transition-all duration-300 group-hover:w-12 group-hover:bg-fuchsia-400" />

                <h3 className="mt-4 text-sm font-bold text-white">Responsabilidad</h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Te explicamos cuándo conviene reparar y cuándo no.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              BLOQUE VISUAL
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Resplandor */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[110px]" />

            {/* Marco exterior */}
            <div className="relative rounded-[30px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.065] via-white/[0.018] to-fuchsia-400/[0.055] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
              {/* Panel */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#071a33]/95 p-6 backdrop-blur-xl sm:p-8">
                {/* Líneas decorativas */}
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <div className="absolute right-0 top-0 h-px w-40 bg-gradient-to-l from-cyan-400/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-px w-40 bg-gradient-to-r from-fuchsia-400/40 to-transparent" />
                </div>

                {/* Cabecera del panel */}
                <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                      PUNO TECH
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white">
                      Soluciones tecnológicas
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Atención profesional en Puno
                    </p>
                  </div>

                  {/* Acento visual de marca */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-fuchsia-400/10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-cyan-200" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 19 6v5.2c0 4.4-2.8 7.4-7 9.3-4.2-1.9-7-4.9-7-9.3V6l7-2.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>

                {/* =================================================
                    SERVICIOS / CAPACIDADES
                ================================================== */}
                <div className="relative mt-5 space-y-3">
                  {/* Diagnóstico */}
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="m16 16 4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">
                        Atención técnica
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Primero evaluamos; después recomendamos.
                      </p>
                    </div>

                    <span className="text-cyan-300/70">✓</span>
                  </div>

                  {/* Calidad */}
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.025]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.07]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-sky-300 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3.5 14.6 9l5.9.7-4.3 4 1.1 5.8L12 16.7l-5.3 2.8 1.1-5.8-4.3-4L9.4 9 12 3.5Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">
                        Trabajo responsable
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Evitamos intervenciones innecesarias.
                      </p>
                    </div>

                    <span className="text-sky-300/70">✓</span>
                  </div>

                  {/* Puno */}
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-fuchsia-400/20 hover:bg-fuchsia-400/[0.025]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-400/15 bg-fuchsia-400/[0.07]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-fuchsia-300 transition-transform duration-300 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 21s6-5.2 6-10.2a6 6 0 1 0-12 0C6 15.8 12 21 12 21Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <circle
                          cx="12"
                          cy="10.5"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">
                        Servicio local
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Atención cercana y directa.
                      </p>
                    </div>

                    <span className="text-fuchsia-300/70">✓</span>
                  </div>
                </div>

                {/* =================================================
                    FRASE DE MARCA
                ================================================== */}
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.045] to-fuchsia-400/[0.035] p-5">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-fuchsia-400" />

                  <p className="pl-3 text-sm font-bold leading-6 text-slate-200">
                    Atención directa, con criterio técnico,
                    <span className="text-cyan-300">
                      {" "}
                      con transparencia en cada etapa.
                    </span>
                  </p>

                  <p className="mt-2 pl-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    PUNO TECH · PUNO, PERÚ
                  </p>
                </div>
              </div>
            </div>

            {/* Elementos decorativos externos */}
            <div className="absolute -right-3 top-10 hidden h-16 w-16 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] backdrop-blur-sm sm:block" />

            <div className="absolute -bottom-3 -left-3 hidden h-12 w-12 rounded-xl border border-fuchsia-400/10 bg-fuchsia-400/[0.025] backdrop-blur-sm sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
