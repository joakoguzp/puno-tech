export default function FinalCTA() {
  return (
    <section
      id="solicitar-servicio"
      className="relative overflow-hidden bg-[#071a33] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================
          EFECTOS DE FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[150px]" />

        <div className="absolute left-[5%] top-[-120px] h-[280px] w-[280px] rounded-full bg-sky-500/[0.05] blur-[110px]" />

        <div className="absolute right-[3%] bottom-[-120px] h-[300px] w-[300px] rounded-full bg-fuchsia-500/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            CONTENEDOR PRINCIPAL
        ========================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-cyan-400/15
            bg-gradient-to-br
            from-cyan-400/[0.08]
            via-white/[0.025]
            to-fuchsia-400/[0.05]
            px-6
            py-12
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.25)]
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Líneas decorativas */}

          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />

          {/* Brillo central */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl" />

          {/* =========================
              ETIQUETA
          ========================== */}

          <div className="relative inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              PUNO TECH
            </span>
          </div>

          {/* =========================
              TÍTULO
          ========================== */}

          <h2 className="relative mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Listo para solucionar
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              tu problema tecnológico?
            </span>
          </h2>

          {/* =========================
              DESCRIPCIÓN
          ========================== */}

          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Cuéntanos qué está ocurriendo con tu equipo o servicio tecnológico.
            Te orientamos y buscamos la solución adecuada para tu caso.
          </p>

          {/* =========================
              BOTONES
          ========================== */}

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {/* WhatsApp — Acción principal */}

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hablar con PUNO TECH por WhatsApp"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-sky-400
                px-7
                text-sm
                font-bold
                text-slate-950
                shadow-[0_12px_35px_rgba(34,211,238,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.32)]
                active:translate-y-0
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 11.5a8.2 8.2 0 0 1-8.3 8.2 8.3 8.3 0 0 1-4.1-1.1L4 19.7l1.1-3.4A8.1 8.1 0 0 1 3.5 12 8.2 8.2 0 1 1 20 11.5Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.5 9.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.3-2.8-.5-5.4-3.1-5.9-5.9-.1-.5 0-1.1.4-1.5Z"
                />
              </svg>
              Hablar por WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>

            {/* Solicitar servicio — Acción secundaria */}

            <a
              href="#contacto"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.12]
                bg-white/[0.04]
                px-7
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/25
                hover:bg-white/[0.06]
                hover:text-cyan-100
                active:translate-y-0
              "
            >
              Solicitar servicio
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          {/* =========================
              ELEMENTOS DE CONFIANZA
          ========================== */}

          <div className="relative mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Atención profesional
            </span>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="inline-flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Diagnóstico
            </span>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="inline-flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Soluciones tecnológicas
            </span>
          </div>

          {/* =========================
              CIERRE
          ========================== */}

          <div className="relative mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <p className="relative mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
            Tecnología al instante, soluciones con calidad
          </p>
        </div>
      </div>
    </section>
  );
}
