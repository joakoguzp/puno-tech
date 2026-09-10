export default function Contact() {
  return (
    <section
      id="contacto"
      className="
        relative overflow-hidden bg-[#071a33]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Efectos de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.06] blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Contacto
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Necesitas ayuda con tu
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              tecnología?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Cuéntanos qué problema tienes y te orientaremos para encontrar la
            solución más adecuada.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Tarjeta principal */}
          <div
            className="
              relative overflow-hidden rounded-3xl border
              border-cyan-400/10
              bg-gradient-to-br from-cyan-400/[0.07]
              via-white/[0.025] to-fuchsia-400/[0.06]
              p-6 sm:p-8 lg:p-10
            "
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-2xl border border-cyan-400/20
                    bg-cyan-400/10 text-2xl text-cyan-300
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Atención profesional
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Hablemos de tu problema.
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Ya sea una computadora que falla, una impresora que no funciona,
                problemas con tu WiFi o cualquier inconveniente tecnológico,
                podemos ayudarte a identificar qué está ocurriendo.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">
                    💻 Computadoras
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Diagnóstico y reparación
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">
                    🖨️ Impresoras
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Mantenimiento y configuración
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">
                    📡 Redes y WiFi
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Conectividad y configuración
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">⚙️ Soporte</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Software y asistencia técnica
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8 inline-flex h-13 w-full items-center justify-center
                  rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400
                  px-7 text-sm font-bold text-slate-950
                  shadow-[0_12px_35px_rgba(34,211,238,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(34,211,238,0.30)]
                  sm:w-auto
                "
              >
                Hablar por WhatsApp
                <span className="ml-2 text-base">→</span>
              </a>
            </div>
          </div>

          {/* Información */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              className="
                rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:border-cyan-400/20 hover:bg-white/[0.04]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-300">
                ☎
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                WhatsApp
              </p>

              <p className="mt-2 text-xl font-bold text-white">915 210 525</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Escríbenos para contarnos qué necesitas.
              </p>
            </div>

            <div
              className="
                rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:border-fuchsia-400/20 hover:bg-white/[0.04]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 text-lg text-fuchsia-300">
                ◉
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Ubicación
              </p>

              <p className="mt-2 text-xl font-bold text-white">Puno, Perú</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Atención para hogares, negocios y empresas.
              </p>
            </div>

            <div
              className="
                rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:border-sky-400/20 hover:bg-white/[0.04]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-lg text-sky-300">
                ⚡
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Atención
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Rápida y profesional
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Primero entendemos el problema. Después buscamos la solución.
              </p>
            </div>
          </div>
        </div>

        {/* Frase final */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Tecnología al instante,{" "}
            <span className="text-cyan-300">soluciones con calidad.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
