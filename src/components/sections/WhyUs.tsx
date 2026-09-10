const reasons = [
  {
    number: "01",
    title: "Experiencia técnica",
    description:
      "Analizamos cada problema antes de intervenir para encontrar una solución adecuada y evitar gastos innecesarios.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Atención clara",
    description:
      "Te explicamos qué sucede con tu equipo y qué solución recomendamos, sin complicaciones ni tecnicismos innecesarios.",
    icon: "✓",
  },
  {
    number: "03",
    title: "Soluciones rápidas",
    description:
      "Nuestro objetivo es reducir el tiempo de espera y devolver tus equipos a funcionamiento lo antes posible.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Garantía y confianza",
    description:
      "Trabajamos con responsabilidad y transparencia para que recibas un servicio profesional y confiable.",
    icon: "◆",
  },
];

export default function WhyUs() {
  return (
    <section
      id="porque"
      className="relative overflow-hidden bg-[#071a33] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================
          EFECTOS DE FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.05] blur-[130px]" />

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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Por qué PUNO TECH
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tecnología con criterio.
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Servicio con confianza.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            No se trata solamente de reparar un equipo. Se trata de entender el
            problema, encontrar la solución correcta y darte la confianza de
            estar en buenas manos.
          </p>
        </div>

        {/* =========================
            RAZONES
        ========================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0a213d]/80
                p-6
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-cyan-400/25
                hover:bg-[#0c2747]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.20)]
              "
            >
              {/* Línea superior */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Número + icono */}

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/70">
                  {reason.number}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.08]
                    text-lg
                    text-cyan-300
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:border-cyan-400/40
                    group-hover:bg-cyan-400/[0.12]
                  "
                >
                  {reason.icon}
                </div>
              </div>

              {/* Título */}

              <h3 className="mt-7 text-lg font-bold text-white sm:text-xl">
                {reason.title}
              </h3>

              {/* Descripción */}

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {reason.description}
              </p>

              {/* Indicador */}

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400/70 transition-colors duration-300 group-hover:text-cyan-300">
                <span className="h-px w-6 bg-cyan-400/30 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-400/60" />
                PUNO TECH
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BLOQUE DE CONFIANZA
        ========================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-cyan-400/10
            bg-gradient-to-r
            from-cyan-400/[0.06]
            via-white/[0.02]
            to-fuchsia-400/[0.05]
            px-6
            py-7
            sm:px-8
            lg:px-10
          "
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  ✓
                </div>

                <p className="text-base font-bold text-white sm:text-lg">
                  Una solución comienza con un buen diagnóstico.
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:pl-[52px]">
                Cuéntanos qué está ocurriendo con tu equipo y te orientaremos
                hacia la alternativa más adecuada.
              </p>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-sky-400
                px-6
                text-sm
                font-bold
                text-slate-950
                shadow-[0_10px_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(34,211,238,0.25)]
              "
            >
              Hablar con PUNO TECH
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
