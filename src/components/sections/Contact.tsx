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
        <div className="absolute left-[-180px] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.05] blur-[130px]" />
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

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Cuéntanos qué está ocurriendo con tu equipo o servicio tecnológico y
            te orientaremos sobre el siguiente paso.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
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
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.07] blur-[100px]" />

            <div className="relative">
              {/* Encabezado de tarjeta */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-2xl border border-cyan-400/20
                    bg-cyan-400/10 text-cyan-300
                    shadow-[0_8px_25px_rgba(34,211,238,0.08)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.5a8.2 8.2 0 0 1-8.3 8.2 8.3 8.3 0 0 1-4.1-1.1L4 19.7l1.1-3.4A8.1 8.1 0 0 1 3.5 12 8.2 8.2 0 1 1 21 11.5Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 9.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.3-2.8-.5-5.4-3.1-5.9-5.9-.1-.5 0-1.1.4-1.5Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                    PUNO TECH
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Hablemos de tu problema.
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                No necesitas conocer exactamente qué está fallando. Cuéntanos
                qué sucede con tu computadora, impresora, red, WiFi o software y
                te ayudaremos a orientar el caso.
              </p>

              {/* Áreas de atención */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {/* Computadoras */}
                <div
                  className="
                    group rounded-xl border border-white/[0.07]
                    bg-white/[0.025] p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="13" rx="1.5" />
                        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Computadoras
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Diagnóstico y reparación
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impresoras */}
                <div
                  className="
                    group rounded-xl border border-white/[0.07]
                    bg-white/[0.025] p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-fuchsia-400/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-fuchsia-400/15 bg-fuchsia-400/[0.06] text-fuchsia-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9V4h12v5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18H4.5A1.5 1.5 0 0 1 3 16.5v-5A1.5 1.5 0 0 1 4.5 10h15a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H18"
                        />
                        <rect x="6" y="15" width="12" height="6" rx="1" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Impresoras
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Mantenimiento y configuración
                      </p>
                    </div>
                  </div>
                </div>

                {/* Redes */}
                <div
                  className="
                    group rounded-xl border border-white/[0.07]
                    bg-white/[0.025] p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-sky-400/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/15 bg-sky-400/[0.06] text-sky-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          d="M5 9.5a10.2 10.2 0 0 1 14 0"
                        />
                        <path strokeLinecap="round" d="M8 12.5a6 6 0 0 1 8 0" />
                        <path
                          strokeLinecap="round"
                          d="M10.8 15.3a2.2 2.2 0 0 1 2.4 0"
                        />
                        <circle cx="12" cy="18" r="0.8" fill="currentColor" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Redes y WiFi
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Conectividad y configuración
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soporte */}
                <div
                  className="
                    group rounded-xl border border-white/[0.07]
                    bg-white/[0.025] p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-violet-400/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-400/[0.06] text-violet-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v4M12 17v4M3 12h4M17 12h4"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
                        />
                        <circle cx="12" cy="12" r="3.2" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Soporte técnico
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Software y asistencia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp principal */}
              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hablar con PUNO TECH por WhatsApp"
                className="
                  group mt-8 inline-flex h-13 w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-gradient-to-r from-cyan-400 to-sky-400
                  px-7 text-sm font-bold text-slate-950
                  shadow-[0_12px_35px_rgba(34,211,238,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(34,211,238,0.30)]
                  active:translate-y-0
                  sm:w-auto
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.5 11.4a8.3 8.3 0 0 1-8.4 8.3 8.4 8.4 0 0 1-4.1-1.1L4 19.7l1.1-3.5a8.2 8.2 0 1 1 15.4-4.8Z"
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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* WhatsApp */}
            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:bg-white/[0.04]
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.5 11.4a8.3 8.3 0 0 1-8.4 8.3 8.4 8.4 0 0 1-4.1-1.1L4 19.7l1.1-3.5a8.2 8.2 0 1 1 15.4-4.8Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 9.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.3-2.8-.5-5.4-3.1-5.9-5.9-.1-.5 0-1.1.4-1.5Z"
                    />
                  </svg>
                </div>

                <span className="text-xs text-slate-600 transition-colors group-hover:text-cyan-400">
                  →
                </span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                WhatsApp
              </p>

              <p className="mt-2 text-xl font-bold text-white">915 210 525</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Escríbenos para contarnos qué necesitas.
              </p>
            </a>

            {/* Correo */}
            <a
              href="mailto:solucionespc804@gmail.com"
              className="
                group rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-fuchsia-400/20
                hover:bg-white/[0.04]
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </svg>
                </div>

                <span className="text-xs text-slate-600 transition-colors group-hover:text-fuchsia-400">
                  →
                </span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Correo electrónico
              </p>

              <p className="mt-2 break-all text-base font-bold text-white sm:text-lg">
                solucionespc804@gmail.com
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Para consultas y solicitudes de servicio.
              </p>
            </a>

            {/* Ubicación formal */}
            <div
              className="
                group rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:border-sky-400/20
                hover:bg-white/[0.04]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 10.2c0 5.3-8 10.3-8 10.3s-8-5-8-10.3a8 8 0 1 1 16 0Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Ubicación
              </p>

              <p className="mt-2 text-lg font-bold text-white">Puno, Perú</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jr.+Revoluci%C3%B3n+359%2C+Puno%2C+Per%C3%BA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-start gap-2 text-sm leading-6 text-slate-400 transition-colors hover:text-cyan-300"
                aria-label="Ver ubicación de PUNO TECH en Google Maps"
              >
                <span>Jr. Revolución N° 359, Puno, Perú, 21002</span>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                  <path d="M11 3h6v6M17 3l-8 8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Atención */}
            <div
              className="
                rounded-2xl border border-white/[0.08]
                bg-white/[0.025] p-6
                transition-all duration-300
                hover:border-violet-400/20
                hover:bg-white/[0.04]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <path strokeLinecap="round" d="M12 7.5v5l3.2 1.8" />
                </svg>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Atención
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Clara y profesional
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Primero entendemos el problema. Después buscamos la solución
                adecuada para tu caso.
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
