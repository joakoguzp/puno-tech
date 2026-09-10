const solutions = [
  {
    number: "01",
    title: "Diagnóstico técnico",
    description:
      "Identificamos el problema de tu equipo y te orientamos hacia la solución más adecuada.",
    icon: "⌕",
    label: "Diagnóstico",
  },
  {
    number: "02",
    title: "Soporte tecnológico",
    description:
      "Asistencia para computadoras, laptops, impresoras, software, redes y conectividad.",
    icon: "⚙",
    label: "Soporte",
  },
  {
    number: "03",
    title: "Soluciones para negocios",
    description:
      "Ayudamos a pequeños negocios y empresas a mantener su tecnología funcionando correctamente.",
    icon: "▣",
    label: "Empresas",
  },
  {
    number: "04",
    title: "Atención inteligente",
    description:
      "Una visión preparada para integrar diagnóstico, atención digital, WhatsApp y automatización.",
    icon: "✦",
    label: "Tecnología",
  },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-[#06152d] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================
          FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[25%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.05] blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      {/* =========================
          CONTENEDOR
      ========================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">
              Soluciones tecnológicas
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Una tecnología más
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              simple para ti.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Desde resolver un problema puntual hasta acompañar las necesidades
            tecnológicas de tu negocio.
          </p>
        </div>

        {/* =========================
            SOLUCIONES
        ========================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-cyan-400/25
                hover:bg-white/[0.045]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.20)]
                sm:p-7
              "
            >
              {/* Línea superior */}

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Número */}

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/70">
                  {solution.number}
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {solution.label}
                </span>
              </div>

              {/* Icono + título */}

              <div className="mt-7 flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.08]
                    text-xl
                    text-cyan-300
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:border-cyan-400/40
                  "
                >
                  {solution.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Indicador */}

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400/60 transition-all duration-300 group-hover:text-cyan-300">
                <span className="h-px w-6 bg-cyan-400/30 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-400/60" />
                Conoce esta solución
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BLOQUE FUTURO
        ========================== */}

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.02] to-fuchsia-400/[0.06] p-6 sm:p-8 lg:p-10">
          {/* Decoración */}

          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Próxima evolución
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
                Tecnología que también puede
                <span className="text-cyan-300"> trabajar por ti.</span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                PUNO TECH está pensado para evolucionar hacia una atención
                tecnológica más inteligente, donde el cliente pueda recibir
                orientación, diagnóstico y seguimiento de manera rápida y
                organizada.
              </p>
            </div>

            {/* Visual tecnológico */}

            <div className="relative mx-auto flex h-32 w-32 items-center justify-center lg:mx-0">
              <div className="absolute inset-0 rounded-full border border-cyan-400/10" />

              <div className="absolute inset-3 rounded-full border border-cyan-400/10" />

              <div className="absolute inset-6 rounded-full bg-cyan-400/[0.08] shadow-[0_0_50px_rgba(34,211,238,0.15)]" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#071a33] text-2xl text-cyan-300">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
