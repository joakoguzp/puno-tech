const steps = [
  {
    number: "01",
    title: "Cuéntanos qué sucede",
    description:
      "Explícanos el problema que presenta tu computadora, laptop, impresora, red o sistema.",
  },
  {
    number: "02",
    title: "Analizamos el problema",
    description:
      "Evaluamos la situación para identificar la causa y determinar qué solución necesita.",
  },
  {
    number: "03",
    title: "Te explicamos la solución",
    description:
      "Te orientamos de manera clara sobre el trabajo que debe realizarse antes de comenzar.",
  },
  {
    number: "04",
    title: "Realizamos el servicio",
    description:
      "Ejecutamos el trabajo con criterio técnico, cuidado y atención a cada detalle.",
  },
  {
    number: "05",
    title: "Verificamos el resultado",
    description:
      "Comprobamos que el equipo o sistema funcione correctamente antes de finalizar.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-[#06152d] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================
          FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute right-[5%] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.05] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Cómo trabajamos
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Un proceso claro.
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Una solución profesional.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Desde el primer contacto hasta la entrega del servicio, buscamos que
            sepas qué estamos haciendo y por qué.
          </p>
        </div>

        {/* =========================
            PASOS
        ========================== */}

        <div className="relative mt-16">
          {/* Línea central */}

          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent lg:block" />

          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className="relative grid gap-6 lg:grid-cols-2 lg:gap-16"
                >
                  {/* =========================
                      CONTENIDO
                  ========================== */}

                  <div
                    className={`${
                      isEven ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <article
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
                        hover:-translate-y-1
                        hover:border-cyan-400/25
                        hover:bg-white/[0.04]
                        sm:p-8
                      "
                    >
                      <div className="absolute right-[-70px] top-[-70px] h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                      <div className="relative z-10 flex gap-5">
                        {/* Número */}

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                          <span className="text-sm font-extrabold tracking-wider text-cyan-300">
                            {step.number}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white sm:text-xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* =========================
                      PUNTO CENTRAL
                  ========================== */}

                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#06152d] shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            CTA
        ========================== */}

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm text-slate-500">
            ¿Ya sabes qué problema tienes?
          </p>

          <a
            href="#contacto"
            className="
              mt-4
              inline-flex
              h-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-sky-400
              px-7
              text-sm
              font-bold
              text-slate-950
              shadow-[0_12px_35px_rgba(34,211,238,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(34,211,238,0.28)]
            "
          >
            Solicitar servicio
          </a>
        </div>
      </div>
    </section>
  );
}
