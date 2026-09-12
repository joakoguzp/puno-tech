const steps = [
  {
    number: "01",
    title: "Cuéntanos el problema",
    description:
      "Explícanos qué está pasando con tu computadora, laptop, impresora, red o software.",
    type: "message",
  },
  {
    number: "02",
    title: "Diagnosticamos",
    description:
      "Revisamos el problema para identificar su causa y determinar qué necesita realmente tu equipo.",
    type: "search",
  },
  {
    number: "03",
    title: "Proponemos la solución",
    description:
      "Te explicamos qué podemos hacer, qué incluye el servicio y, cuando corresponda, el costo.",
    type: "solution",
  },
  {
    number: "04",
    title: "Solucionamos y verificamos",
    description:
      "Realizamos el servicio, comprobamos que todo funcione correctamente y te damos seguimiento.",
    type: "check",
  },
];

function StepIcon({ type }: { type: string }) {
  if (type === "message") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          d="M15 18.5C15 15.462 17.462 13 20.5 13h23C46.538 13 49 15.462 49 18.5v16C49 37.538 46.538 40 43.5 40H30l-9 8v-8h-.5C17.462 40 15 37.538 15 34.5v-16Z"
          className="transition-all duration-500 group-hover:stroke-cyan-200"
        />

        <path
          d="M23 23h18"
          className="origin-left transition-all duration-500 group-hover:scale-x-110"
        />

        <path
          d="M23 29h12"
          className="origin-left transition-all duration-500 group-hover:scale-x-125"
        />

        <circle
          cx="44"
          cy="46"
          r="4"
          className="fill-current opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <circle
          cx="29"
          cy="29"
          r="13"
          className="transition-all duration-500 group-hover:scale-105 group-hover:stroke-cyan-200"
        />

        <path
          d="m39 39 11 11"
          className="origin-left transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
        />

        <path
          d="M24 29h10"
          className="origin-left opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-70"
        />

        <path
          d="M29 24v10"
          className="origin-center opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-70"
        />
      </svg>
    );
  }

  if (type === "solution") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          d="M32 12a16 16 0 0 0-9.5 28.9c2.4 1.7 3.5 3.7 3.5 6.1h12c0-2.4 1.1-4.4 3.5-6.1A16 16 0 0 0 32 12Z"
          className="transition-all duration-500 group-hover:stroke-cyan-200"
        />

        <path
          d="M27 53h10"
          className="transition-all duration-300 group-hover:translate-y-[-1px]"
        />

        <path
          d="M28 47h8"
          className="transition-all duration-300 group-hover:translate-y-[-1px]"
        />

        <path
          d="M32 20v5"
          className="origin-top transition-all duration-500 group-hover:scale-y-125"
        />

        <path
          d="M25 27h14"
          className="origin-center transition-all duration-500 group-hover:scale-x-110"
        />

        <path
          d="M15 19l-3-3M49 19l3-3M32 8V4"
          className="opacity-0 transition-all duration-500 group-hover:opacity-70"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="20"
        className="transition-all duration-500 group-hover:stroke-cyan-200"
      />

      <path
        d="m22 32 7 7 14-15"
        className="origin-center transition-all duration-700 group-hover:scale-110"
      />

      <path
        d="M32 6v5M32 53v5M6 32h5M53 32h5"
        className="opacity-0 transition-all duration-500 group-hover:opacity-70"
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="como-trabajamos"
      className="relative overflow-hidden bg-[#06152d] py-20 sm:py-24 lg:py-28"
    >
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full bg-sky-500/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-[25%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.025] blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Cómo trabajamos
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Una atención clara,
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              de principio a fin.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Trabajamos con un proceso ordenado para entender el problema,
            encontrar la solución adecuada y comprobar que todo funcione
            correctamente.
          </p>
        </div>

        {/* Proceso */}
        <div className="relative mt-14 lg:mt-16">
          {/* Línea horizontal desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[55px] hidden h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/25 to-fuchsia-400/10 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/25 hover:bg-white/[0.045] hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] lg:min-h-[300px]"
              >
                {/* Línea móvil */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute bottom-[-25px] left-1/2 z-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/25 to-transparent sm:hidden" />
                )}

                {/* Línea tablet */}
                {index === 0 || index === 1 ? (
                  <div className="pointer-events-none absolute bottom-[-25px] left-1/2 z-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 to-transparent sm:hidden" />
                ) : null}

                {/* Línea superior */}
                <div className="absolute left-0 right-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />

                {/* Número */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Paso {step.number}
                  </span>

                  <span className="text-sm font-medium text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>
                </div>

                {/* Icono */}
                <div className="mt-7 flex justify-center">
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.10] via-sky-400/[0.06] to-fuchsia-400/[0.06] text-cyan-300 shadow-[0_10px_35px_rgba(34,211,238,0.06)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/40 group-hover:text-cyan-200 group-hover:shadow-[0_12px_40px_rgba(34,211,238,0.16)]">
                    <span className="pointer-events-none absolute inset-[-6px] rounded-[21px] border border-cyan-400/0 transition-all duration-700 group-hover:scale-110 group-hover:border-cyan-400/20" />

                    <StepIcon type={step.type} />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="mt-6 text-center text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-center text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {step.description}
                </p>

                {/* Indicador inferior */}
                <div className="mt-5 flex justify-center">
                  <span className="h-1 w-8 rounded-full bg-cyan-400/10 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400/40" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.035] via-white/[0.015] to-fuchsia-400/[0.035] px-6 py-6 sm:mt-14 sm:px-8 sm:py-7">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-400/[0.04] to-transparent" />

          <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                ¿Tienes un problema con tu equipo?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Cuéntanos qué está pasando y te orientaremos.
              </p>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a PUNO TECH por WhatsApp"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 shadow-[0_8px_25px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_12px_35px_rgba(34,211,238,0.22)] active:translate-y-0"
            >
              Cuéntanos tu problema
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
