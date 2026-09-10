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
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[150px]" />

        <div className="absolute left-[10%] top-[-100px] h-[250px] w-[250px] rounded-full bg-sky-500/[0.05] blur-[100px]" />

        <div className="absolute right-[5%] bottom-[-100px] h-[280px] w-[280px] rounded-full bg-fuchsia-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            CONTENEDOR
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

          {/* =========================
              ETIQUETA
          ========================== */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              PUNO TECH
            </span>
          </div>

          {/* =========================
              TÍTULO
          ========================== */}

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tu tecnología debería
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              trabajar para ti.
            </span>
          </h2>

          {/* =========================
              DESCRIPCIÓN
          ========================== */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Si tienes un problema tecnológico, no tienes que resolverlo solo.
            Cuéntanos qué sucede y encontremos juntos la solución adecuada.
          </p>

          {/* =========================
              BOTONES
          ========================== */}

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="
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
                shadow-[0_12px_35px_rgba(34,211,238,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.32)]
              "
            >
              Solicitar servicio
            </a>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-12
                items-center
                justify-center
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
                hover:border-emerald-400/30
                hover:bg-emerald-400/[0.08]
              "
            >
              Hablar por WhatsApp
            </a>
          </div>

          {/* =========================
              CONFIANZA
          ========================== */}

          <div className="mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span>✓ Atención profesional</span>

            <span>✓ Diagnóstico</span>

            <span>✓ Soluciones tecnológicas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
