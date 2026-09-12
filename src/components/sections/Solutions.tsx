const solutions = [
  {
    number: "01",
    title: "Tu equipo presenta fallas",
    description:
      "Si tu computadora o laptop está lenta, se apaga, presenta errores o dejó de funcionar correctamente, empezamos identificando qué está ocurriendo.",
    label: "Computadoras",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Necesitas poner todo a funcionar",
    description:
      "Configuramos sistemas, programas, impresoras, routers y conexiones para que puedas utilizar tu tecnología de manera correcta.",
    label: "Configuración",
    accent: "sky",
  },
  {
    number: "03",
    title: "Tu negocio necesita soporte",
    description:
      "Ayudamos a mantener funcionando la tecnología que utilizas diariamente en tu negocio, desde equipos hasta conectividad.",
    label: "Negocios",
    accent: "fuchsia",
  },
  {
    number: "04",
    title: "No sabes qué está fallando",
    description:
      "No necesitas conocer la causa del problema. Cuéntanos qué sucede y te orientaremos sobre el siguiente paso.",
    label: "Orientación",
    accent: "violet",
  },
];

function SolutionIcon({ index }: { index: number }) {
  const className =
    "h-6 w-6 transition-transform duration-500 group-hover:scale-110";

  if (index === 0) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="4"
          width="17"
          height="12"
          rx="1.8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 20h8M10 16v4M14 16v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m13.8 11.8 1.7 1.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="m6 6 2.1 2.1M15.9 15.9 18 18M18 6l-2.1 2.1M8.1 15.9 6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M4 20V9.5L12 4l8 5.5V20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 20v-5h8v5M8 10h8M10 10v2M14 10v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m16 16 4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 8.2v5.2M8.4 10.8h5.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AccentLine({ accent }: { accent: string }) {
  const classes = {
    cyan: "from-cyan-400 to-sky-400",
    sky: "from-sky-400 to-blue-400",
    fuchsia: "from-fuchsia-400 to-pink-400",
    violet: "from-violet-400 to-fuchsia-400",
  };

  return (
    <div
      className={`h-[2px] w-8 rounded-full bg-gradient-to-r ${
        classes[accent as keyof typeof classes]
      } transition-all duration-500 group-hover:w-14`}
    />
  );
}

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
        <div className="absolute -left-48 top-[20%] h-[460px] w-[460px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute -right-48 bottom-[8%] h-[460px] w-[460px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      {/* =========================
          CONTENEDOR
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.045] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.8)]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-fuchsia-300">
              Soluciones tecnológicas
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            ¿Tienes un problema?
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Busquemos la solución.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            No necesitas saber exactamente qué está fallando. Cuéntanos qué
            ocurre y PUNO TECH te ayuda a encontrar el camino adecuado.
          </p>
        </div>

        {/* =========================
            SOLUCIONES
        ========================== */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <article
              key={solution.number}
              className="
                group
                relative
                min-h-[285px]
                overflow-hidden
                rounded-[26px]
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/20
                hover:bg-white/[0.045]
                hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
                sm:p-7
                lg:p-8
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.045] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.09]" />

              {/* Línea superior */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Cabecera */}
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.22em] text-slate-500 transition-colors duration-300 group-hover:text-cyan-400/80">
                  {solution.number}
                </span>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 transition-all duration-300 group-hover:border-cyan-400/15 group-hover:text-slate-300">
                  {solution.label}
                </span>
              </div>

              {/* Icono */}
              <div className="relative mt-7 flex items-start gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.065]
                    text-cyan-300
                    shadow-[0_10px_30px_rgba(34,211,238,0.05)]
                    transition-all
                    duration-500
                    group-hover:border-cyan-400/35
                    group-hover:bg-cyan-400/[0.10]
                    group-hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)]
                  "
                >
                  <SolutionIcon index={index} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    {solution.title}
                  </h3>

                  <div className="mt-4">
                    <AccentLine accent={solution.accent} />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-[15px]">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Indicador */}
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-slate-500">
                  PUNO TECH
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.06] text-sm text-slate-600 transition-all duration-300 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.05] group-hover:text-cyan-300">
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BLOQUE DE ACCIÓN
        ========================== */}
        <div className="relative mt-10 overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.065] via-white/[0.018] to-fuchsia-400/[0.055] p-[1px]">
          <div className="relative overflow-hidden rounded-[27px] bg-[#071a33]/95 px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
            {/* Decoraciones */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.07] blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 left-[35%] h-52 w-52 rounded-full bg-fuchsia-400/[0.045] blur-[90px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.045] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Empecemos por tu problema
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Cuéntanos qué está
                  <span className="text-cyan-300"> ocurriendo.</span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Puedes escribirnos por WhatsApp y explicarnos qué problema
                  presenta tu equipo. Te orientaremos sobre el siguiente paso.
                </p>
              </div>

              {/* Visual */}
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center lg:mx-0">
                <div className="absolute inset-0 rounded-full border border-cyan-400/10" />

                <div className="absolute inset-3 rounded-full border border-cyan-400/10" />

                <div className="absolute inset-6 rounded-full bg-cyan-400/[0.07] shadow-[0_0_55px_rgba(34,211,238,0.14)]" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-[#06152d] text-cyan-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5h-4.2L8 19v-4H7.5A2.5 2.5 0 0 1 5 12.5v-6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8.5 8.5h7M8.5 11.5h4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium text-slate-500">
                Atención tecnológica para hogares, negocios y empresas.
              </p>

              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/cta
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-300/20
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-400
                  px-6
                  text-sm
                  font-extrabold
                  text-slate-950
                  shadow-[0_10px_30px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-200/40
                  hover:shadow-[0_16px_40px_rgba(34,211,238,0.28)]
                  active:translate-y-0
                "
              >
                Consultar por WhatsApp
                <span className="ml-2 transition-transform duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Frase */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
            Entender · Orientar · Solucionar · Acompañar
          </p>
        </div>
      </div>
    </section>
  );
}
