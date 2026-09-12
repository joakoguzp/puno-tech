const reasons = [
  {
    number: "01",
    title: "Diagnóstico responsable",
    description:
      "Primero entendemos qué está ocurriendo con tu equipo para identificar la causa y evitar intervenciones innecesarias.",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Comunicación clara",
    description:
      "Te explicamos el problema y las alternativas de solución de forma sencilla, sin tecnicismos que compliquen la decisión.",
    accent: "sky",
  },
  {
    number: "03",
    title: "Solución eficiente",
    description:
      "Buscamos resolver el problema de forma adecuada, reduciendo tiempos innecesarios y devolviendo tu equipo a funcionamiento.",
    accent: "fuchsia",
  },
  {
    number: "04",
    title: "Confianza y seguimiento",
    description:
      "Trabajamos con responsabilidad y transparencia, procurando que recibas una atención profesional antes, durante y después del servicio.",
    accent: "violet",
  },
];

function ReasonIcon({ index }: { index: number }) {
  const common =
    "h-5 w-5 transition-transform duration-500 group-hover:scale-110";

  if (index === 0) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={common}
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m16 16 4.2 4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8.5 11h5M11 8.5v5"
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
        className={common}
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
    );
  }

  if (index === 2) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={common}
        aria-hidden="true"
      >
        <path
          d="M13 2.8 5.5 13h5.8L11 21.2 18.5 11h-5.8L13 2.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M12 21s6-5.1 6-10.2a6 6 0 1 0-12 0C6 15.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="10.5"
        r="2.1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m9.2 18.3 2.8-1.5 2.8 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        <div className="absolute -left-48 top-[18%] h-[480px] w-[480px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute -right-48 top-[35%] h-[480px] w-[480px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent" />
      </div>

      {/* =========================
          CONTENEDOR
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.045] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Por qué PUNO TECH
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Tecnología con criterio.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Servicio con confianza.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            No se trata solamente de reparar un equipo. Se trata de entender el
            problema, encontrar una solución adecuada y darte la confianza de
            estar en buenas manos.
          </p>
        </div>

        {/* =========================
            RAZONES
        ========================== */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className="
                group
                relative
                min-h-[330px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.07]
                bg-[#0a213d]/80
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/20
                hover:bg-[#0c2747]
                hover:shadow-[0_28px_70px_rgba(0,0,0,0.24)]
              "
            >
              {/* Glow interno */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.055] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.10]" />

              {/* Línea superior */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Número */}
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.22em] text-slate-500 transition-colors duration-300 group-hover:text-cyan-400/80">
                  {reason.number}
                </span>

                {/* Icono */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.065]
                    text-cyan-300
                    shadow-[0_8px_25px_rgba(34,211,238,0.05)]
                    transition-all
                    duration-500
                    group-hover:border-cyan-400/35
                    group-hover:bg-cyan-400/[0.11]
                    group-hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)]
                  "
                >
                  <ReasonIcon index={index} />
                </div>
              </div>

              {/* Línea decorativa */}
              <div className="mt-8">
                <AccentLine accent={reason.accent} />
              </div>

              {/* Título */}
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-white">
                {reason.title}
              </h3>

              {/* Descripción */}
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {reason.description}
              </p>

              {/* Indicador inferior */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-slate-500">
                  PUNO TECH
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.06] text-xs text-slate-600 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BLOQUE DE CONFIANZA
        ========================== */}
        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.055] via-white/[0.018] to-fuchsia-400/[0.045] p-[1px]">
          <div className="relative overflow-hidden rounded-[25px] bg-[#081d37]/90 px-6 py-7 sm:px-8 lg:px-10">
            {/* Decoración */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-400/[0.035] to-transparent" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-start gap-4">
                  {/* Check */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12.5 4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-base font-extrabold leading-6 text-white sm:text-lg">
                      Una buena solución comienza con un buen diagnóstico.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Cuéntanos qué está ocurriendo con tu equipo y te
                      orientaremos hacia la alternativa más adecuada.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/cta
                  inline-flex
                  h-12
                  shrink-0
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
                Hablar con PUNO TECH
                <span className="ml-2 transition-transform duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Frase inferior */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
            Tecnología al instante · Soluciones con calidad · Puno, Perú
          </p>
        </div>
      </div>
    </section>
  );
}
