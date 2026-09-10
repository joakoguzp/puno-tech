import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#06152d]"
    >
      {/* =========================
          FONDO Y EFECTOS
      ========================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Resplandor superior izquierdo */}
        <div className="absolute left-[15%] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Resplandor principal */}
        <div className="absolute right-[5%] top-[25%] h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-[150px]" />

        {/* Resplandor inferior */}
        <div className="absolute bottom-[-200px] right-[20%] h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      {/* =========================
          CONTENEDOR PRINCIPAL
      ========================== */}

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          className="
            grid
            min-h-[calc(100vh-104px)]
            items-center
            gap-8
            pt-16
            pb-12
            lg:grid-cols-2
            lg:gap-4
            lg:pt-20
            lg:pb-14
          "
        >
          {/* =========================
              COLUMNA IZQUIERDA
          ========================== */}

          <div className="relative z-20 flex flex-col justify-center">
            {/* Etiqueta */}

            <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
                Servicio técnico profesional
              </span>
            </div>

            {/* =========================
                TÍTULO
            ========================== */}

            <h1
              className="
                max-w-[650px]
                text-[3.5rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.035em]
                text-white
                sm:text-[4.2rem]
                lg:text-[4.5rem]
                xl:text-[5rem]
              "
            >
              Soporte Técnico
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-300
                  to-fuchsia-400
                  bg-clip-text
                  text-transparent
                "
              >
                Profesional
              </span>
            </h1>

            {/* =========================
                DESCRIPCIÓN
            ========================== */}

            <p
              className="
                mt-7
                max-w-[570px]
                text-base
                leading-7
                text-slate-300
                sm:text-lg
                sm:leading-8
              "
            >
              Reparación y soporte especializado para computadoras, laptops,
              impresoras y redes. Soluciones rápidas, garantía y atención
              profesional para hogares y empresas en Puno.
            </p>

            {/* =========================
                BOTONES
            ========================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#servicios"
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
                  hover:shadow-[0_18px_45px_rgba(34,211,238,0.30)]
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
                  border-fuchsia-400/50
                  bg-white/[0.03]
                  px-7
                  text-sm
                  font-semibold
                  text-fuchsia-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-fuchsia-400
                  hover:bg-fuchsia-400/10
                  hover:text-white
                "
              >
                WhatsApp
              </a>
            </div>

            {/* =========================
                INDICADORES DE CONFIANZA
            ========================== */}

            <div
              className="
                mt-9
                grid
                max-w-[600px]
                grid-cols-1
                gap-5
                border-t
                border-white/10
                pt-6
                sm:grid-cols-2
              "
            >
              {/* Atención */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Atención profesional
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Hogares y empresas
                  </p>
                </div>
              </div>

              {/* Garantía */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-fuchsia-400/20
                    bg-fuchsia-400/10
                    text-fuchsia-300
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Garantía de servicio
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Soluciones duraderas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              COLUMNA DERECHA
          ========================== */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >
            {/* Resplandor */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/20
                blur-[110px]
                sm:h-[440px]
                sm:w-[440px]
              "
            />

            {/* Anillo tecnológico */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-400/10
                sm:h-[480px]
                sm:w-[480px]
              "
            />

            {/* =========================
                IMAGEN HERO — AUMENTADA
            ========================== */}

            <div
              className="
                relative
                z-10
                w-full
                max-w-[760px]
                lg:scale-110
                xl:scale-115
              "
            >
              <Image
                src="/images/hero.png"
                alt="PUNO TECH - Servicio técnico profesional"
                width={980}
                height={820}
                priority
                sizes="(max-width: 1024px) 95vw, 55vw"
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_25px_80px_rgba(0,210,255,0.28)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
