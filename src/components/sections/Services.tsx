const services = [
  {
    number: "01",
    icon: "💻",
    title: "Computadoras y Laptops",
    description:
      "Diagnóstico, mantenimiento y reparación de equipos. Solucionamos problemas de hardware, software, rendimiento y sistema.",
    tags: ["Diagnóstico", "Mantenimiento", "Reparación"],
  },
  {
    number: "02",
    icon: "🖨️",
    title: "Impresoras",
    description:
      "Mantenimiento, configuración y solución de problemas de impresión, conectividad y funcionamiento.",
    tags: ["Mantenimiento", "Configuración", "Soporte"],
  },
  {
    number: "03",
    icon: "📡",
    title: "Redes y WiFi",
    description:
      "Configuración y optimización de routers, redes WiFi y conectividad para hogares, negocios y empresas.",
    tags: ["WiFi", "Routers", "Redes"],
  },
  {
    number: "04",
    icon: "🛠️",
    title: "Soporte Técnico",
    description:
      "Asistencia para resolver problemas informáticos, configurar programas y mantener tus equipos funcionando correctamente.",
    tags: ["Soporte", "Software", "Asistencia"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#071a33] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          FONDO TECNOLÓGICO
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Resplandor cyan */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[130px]
          "
        />

        {/* Resplandor magenta */}
        <div
          className="
            absolute
            -right-40
            bottom-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-fuchsia-500/[0.06]
            blur-[130px]
          "
        />

        {/* Línea decorativa */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENEDOR
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* ===================================================
            ENCABEZADO
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Etiqueta */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_14px_rgba(34,211,238,0.9)]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-cyan-300
                sm:text-sm
              "
            >
              Nuestros servicios
            </span>
          </div>

          {/* Título */}

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.03em]
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
              hechas para funcionar.
            </span>
          </h2>

          {/* Descripción */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-300
              sm:text-lg
              sm:leading-8
            "
          >
            Desde una reparación puntual hasta la configuración completa de tu
            tecnología. Diagnóstico profesional, soluciones claras y atención
            personalizada.
          </p>
        </div>

        {/* ===================================================
            TARJETAS DE SERVICIOS
        ==================================================== */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                relative
                flex
                min-h-[390px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-[#0a203b]/80
                p-6
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:bg-[#0c2745]
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
              "
            >
              {/* Brillo interno */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-cyan-400/[0.08]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.15]
                "
              />

              {/* Línea superior */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400
                  to-fuchsia-500
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Número + indicador */}

              <div className="relative flex items-center justify-between">
                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-cyan-400/70
                  "
                >
                  SERVICIO {service.number}
                </span>

                <span
                  className="
                    text-sm
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-300
                  "
                >
                  →
                </span>
              </div>

              {/* Icono */}

              <div
                className="
                  relative
                  mt-8
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-gradient-to-br
                  from-cyan-400/10
                  to-fuchsia-500/10
                  text-2xl
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:border-cyan-400/40
                  group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              >
                {service.icon}
              </div>

              {/* Título */}

              <h3
                className="
                  relative
                  mt-6
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-200
                "
              >
                {service.title}
              </h3>

              {/* Descripción */}

              <p
                className="
                  relative
                  mt-4
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {service.description}
              </p>

              {/* Tags */}

              <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-400
                      transition-colors
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

        {/* ===================================================
            CTA DIAGNÓSTICO
        ==================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-cyan-400/15
            bg-gradient-to-r
            from-cyan-400/[0.07]
            via-white/[0.025]
            to-fuchsia-500/[0.06]
            px-6
            py-8
            sm:px-8
            lg:px-10
          "
        >
          {/* Brillo */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              h-40
              w-40
              -translate-y-1/2
              rounded-full
              bg-cyan-400/10
              blur-[80px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-6
              lg:flex-row
              lg:items-center
            "
          >
            {/* Texto */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  ?
                </span>

                <p className="text-lg font-bold text-white sm:text-xl">
                  ¿No sabes qué necesita tu equipo?
                </p>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Cuéntanos qué problema tienes. Podemos comenzar con un
                diagnóstico y orientarte hacia la solución adecuada.
              </p>
            </div>

            {/* Botón */}

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-12
                w-full
                shrink-0
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
                shadow-[0_10px_35px_rgba(34,211,238,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_45px_rgba(34,211,238,0.30)]
                sm:w-auto
              "
            >
              Solicitar diagnóstico
              <span className="ml-2 text-base">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
