const services = [
  {
    number: "01",
    type: "computer",
    title: "Computadoras y Laptops",
    description:
      "Diagnóstico, mantenimiento, reparación, optimización y solución de problemas de hardware y software.",
    tags: ["Diagnóstico", "Mantenimiento", "Reparación"],
  },
  {
    number: "02",
    type: "printer",
    title: "Impresoras",
    description:
      "Mantenimiento, configuración y solución de problemas de impresión, conectividad y funcionamiento.",
    tags: ["Mantenimiento", "Configuración", "Soporte"],
  },
  {
    number: "03",
    type: "wifi",
    title: "Redes y WiFi",
    description:
      "Configuración y optimización de routers, redes WiFi y conectividad para hogares, negocios y empresas.",
    tags: ["WiFi", "Routers", "Redes"],
  },
  {
    number: "04",
    type: "support",
    title: "Soporte Técnico",
    description:
      "Asistencia técnica para resolver problemas informáticos, configurar programas y mantener tus equipos funcionando correctamente.",
    tags: ["Soporte", "Software", "Asistencia"],
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "computer") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="12"
          y="10"
          width="40"
          height="30"
          rx="4"
          className="transition-all duration-500 group-hover:stroke-cyan-200"
        />

        <path d="M24 52h16" />

        <path d="M32 40v12" />

        <path
          d="M20 18h24"
          className="origin-center transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-40"
        />

        <path
          d="M20 24h13"
          className="origin-left transition-all duration-500 group-hover:scale-x-125"
        />

        <path
          d="M20 30h8"
          className="origin-left transition-all duration-500 group-hover:scale-x-150"
        />

        <circle
          cx="45"
          cy="18"
          r="2"
          className="fill-current opacity-50 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
        />
      </svg>
    );
  }

  if (type === "printer") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="17"
          y="24"
          width="30"
          height="21"
          rx="4"
          className="transition-all duration-500 group-hover:stroke-cyan-200"
        />

        <path d="M22 24V13h20v11" />

        <path
          d="M23 13h18"
          className="transition-all duration-500 group-hover:opacity-50"
        />

        <rect
          x="22"
          y="38"
          width="20"
          height="15"
          rx="2"
          className="origin-top transition-all duration-500 group-hover:-translate-y-2"
        />

        <path
          d="M27 43h10"
          className="transition-all duration-300 group-hover:translate-x-1"
        />

        <path
          d="M27 47h7"
          className="transition-all duration-500 group-hover:translate-x-2"
        />

        <circle
          cx="42"
          cy="31"
          r="1.8"
          className="fill-current opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
        />
      </svg>
    );
  }

  if (type === "wifi") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        aria-hidden="true"
        className="h-9 w-9"
      >
        <path
          d="M13 25a28 28 0 0 1 38 0"
          className="origin-center transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />

        <path
          d="M20 32a18 18 0 0 1 24 0"
          className="origin-center transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />

        <path
          d="M27 39a8 8 0 0 1 10 0"
          className="origin-center transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
        />

        <circle
          cx="32"
          cy="47"
          r="2.5"
          className="fill-current transition-all duration-500 group-hover:scale-150"
        />

        <circle
          cx="32"
          cy="47"
          r="7"
          className="origin-center opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-20"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path
        d="M39 14a12 12 0 0 0-15 15L12 41l11 11 12-12a12 12 0 0 0 15-15l-7 7-7-2-2-7 7-7Z"
        className="origin-center transition-transform duration-700 group-hover:rotate-[12deg]"
      />

      <path
        d="m38 38 13 13"
        className="origin-left transition-all duration-500 group-hover:translate-x-1"
      />

      <path
        d="M14 14 8 8"
        className="opacity-0 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-70"
      />

      <path
        d="M50 14l6-6"
        className="opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-70"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="
        relative
        overflow-hidden
        bg-[#071a33]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ========================================
          FONDO
      ======================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-[8%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.055]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-fuchsia-500/[0.045]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />
      </div>

      {/* ========================================
          CONTENEDOR
      ======================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ========================================
            ENCABEZADO
        ======================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.045]
              px-4
              py-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-cyan-300
              "
            >
              Nuestros servicios
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Soluciones tecnológicas
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-sky-300
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              para tus necesidades.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Diagnóstico, reparación y soporte especializado para que tu
            tecnología funcione correctamente, sin complicaciones.
          </p>
        </div>

        {/* ========================================
            TARJETAS
        ======================================== */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-14
            lg:grid-cols-4
          "
        >
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                relative
                flex
                min-h-[430px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-cyan-400/25
                hover:bg-white/[0.045]
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.25)]
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
                  origin-center
                  scale-x-0
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400
                  to-transparent
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:scale-x-100
                  group-hover:opacity-100
                "
              />

              {/* Resplandor */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-400/[0.05]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.10]
                "
              />

              {/* ====================================
                  CABECERA TARJETA
              ==================================== */}

              <div className="relative flex items-center justify-between">
                <span
                  className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-300
                  "
                >
                  Servicio {service.number}
                </span>

                <span
                  className="
                    text-base
                    text-slate-600
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-400
                  "
                >
                  →
                </span>
              </div>

              {/* ====================================
                  ICONO ANIMADO
              ==================================== */}

              <div
                className="
                  relative
                  mt-8
                  h-40
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-gradient-to-br
                  from-cyan-400/[0.07]
                  via-sky-400/[0.025]
                  to-fuchsia-400/[0.06]
                  transition-all
                  duration-500
                  group-hover:border-cyan-400/20
                  group-hover:shadow-[0_18px_45px_rgba(34,211,238,0.08)]
                "
              >
                {/* Escenario visual preparado para futuras imágenes */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-40
                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:22px_22px]
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-cyan-400/[0.10]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-cyan-400/[0.16]
                  "
                />

                <div className="relative flex h-full items-center justify-center">
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-[#071a33]/80
                      text-cyan-300
                      shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-cyan-400/40
                      group-hover:text-cyan-200
                    "
                  >
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-[-6px]
                        rounded-[22px]
                        border
                        border-cyan-400/0
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-cyan-400/20
                      "
                    />
                    <ServiceIcon type={service.type} />
                  </div>
                </div>

                <span className="absolute bottom-3 left-3 rounded-full border border-white/[0.08] bg-[#06152d]/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 backdrop-blur-sm">
                  PUNO TECH
                </span>
              </div>

              {/* ====================================
                  CONTENIDO
              ==================================== */}

              <h3
                className="
                  relative
                  mt-6
                  text-center
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-50
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  relative
                  mt-4
                  text-center
                  text-sm
                  leading-6
                  text-slate-400
                  transition-colors
                  duration-300
                  group-hover:text-slate-300
                "
              >
                {service.description}
              </p>

              {/* ====================================
                  ETIQUETAS
              ==================================== */}

              <div
                className="
                  relative
                  mt-auto
                  flex
                  flex-wrap
                  justify-center
                  gap-2
                  pt-6
                "
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/10
                      group-hover:text-slate-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ========================================
            CTA
        ======================================== */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-cyan-400/10
            bg-gradient-to-r
            from-cyan-400/[0.035]
            via-white/[0.015]
            to-fuchsia-400/[0.035]
            px-6
            py-6
            sm:mt-10
            sm:px-8
            sm:py-7
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-1/3
              bg-gradient-to-l
              from-cyan-400/[0.04]
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
            "
          >
            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                ¿No sabes qué necesita tu equipo?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Podemos comenzar con un diagnóstico y orientarte hacia la mejor
                solución.
              </p>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar diagnóstico por WhatsApp"
              className="
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-400
                px-6
                text-sm
                font-bold
                text-slate-950
                shadow-[0_8px_25px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-300
                hover:shadow-[0_12px_35px_rgba(34,211,238,0.22)]
                active:translate-y-0
              "
            >
              Solicitar diagnóstico
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
