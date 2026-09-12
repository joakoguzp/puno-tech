import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#06152d]"
    >
      {/* =====================================================
          FONDOS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/[0.08]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-[10%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-fuchsia-500/[0.08]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            left-[35%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/[0.08]
            blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          CONTENEDOR
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
        <div
          className="
            grid
            min-h-[calc(100vh-104px)]
            items-center
            py-12
            sm:py-14
            lg:grid-cols-[0.76fr_1.24fr]
            lg:py-6
          "
        >
          {/* =================================================
              TEXTO
          ================================================== */}
          <div className="relative z-30 flex flex-col justify-center">
            {/* ETIQUETA */}
            <div
              className="
                mb-6
                flex
                w-fit
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
                  shadow-[0_0_16px_rgba(34,211,238,0.9)]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300
                "
              >
                Servicio técnico profesional
              </span>
            </div>

            {/* TITULAR */}
            <h1
              className="
                max-w-[650px]
                text-[3.3rem]
                font-black
                leading-[0.92]
                tracking-[-0.05em]
                text-white
                sm:text-[4.4rem]
                lg:text-[4.6rem]
                xl:text-[5.1rem]
              "
            >
              Soporte
              <br />
              Técnico
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

            {/* DESCRIPCIÓN */}
            <p
              className="
                mt-7
                max-w-[580px]
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

            {/* BOTONES */}
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
                  shadow-[0_12px_35px_rgba(34,211,238,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(34,211,238,0.35)]
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
                  bg-fuchsia-400/[0.04]
                  px-7
                  text-sm
                  font-bold
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

            {/* CONFIANZA */}
            <div
              className="
                mt-8
                grid
                max-w-[620px]
                grid-cols-1
                gap-4
                border-t
                border-white/[0.08]
                pt-6
                sm:grid-cols-3
              "
            >
              <div className="flex items-center gap-3">
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
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Atención profesional
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Hogares y empresas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
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
                  ◆
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Garantía de servicio
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Soluciones duraderas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
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
                    border-sky-400/20
                    bg-sky-400/10
                    text-sky-300
                  "
                >
                  ⚡
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Respuesta rápida
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Soluciones eficientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              IMAGEN
          ================================================== */}
          <div
            className="
              relative
              flex
              min-h-[480px]
              items-center
              justify-center
              lg:min-h-[680px]
            "
          >
            {/* RESPLANDOR CYAN */}
            <div
              className="
                absolute
                left-[55%]
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.16]
                blur-[120px]
                sm:h-[550px]
                sm:w-[550px]
              "
            />

            {/* RESPLANDOR MAGENTA */}
            <div
              className="
                absolute
                left-[68%]
                top-[45%]
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-fuchsia-500/[0.10]
                blur-[120px]
                sm:h-[500px]
                sm:w-[500px]
              "
            />

            {/* CÍRCULO CYAN */}
            <div
              className="
                absolute
                left-[58%]
                top-1/2
                h-[390px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-400/[0.10]
                sm:h-[540px]
                sm:w-[540px]
              "
            />

            {/* CÍRCULO MAGENTA */}
            <div
              className="
                absolute
                left-[58%]
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-fuchsia-400/[0.05]
                sm:h-[650px]
                sm:w-[650px]
              "
            />

            {/* =================================================
                IMAGEN

                AQUÍ ESTÁ EL CAMBIO IMPORTANTE:
                SCALE AUMENTA EL CONTENIDO VISIBLE.
            ================================================== */}
            <div
              className="
                relative
                z-10
                ml-10
                w-[110%]
                sm:ml-12
                sm:w-[115%]
                lg:ml-16
                lg:w-[120%]
                xl:ml-20
                xl:w-[125%]
              "
            >
              <Image
                src="/images/hero.png"
                alt="PUNO TECH - Servicio técnico profesional"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="
                  h-auto
                  w-full
                  scale-[1.18]
                  object-contain
                  drop-shadow-[0_30px_90px_rgba(0,210,255,0.30)]
                  sm:scale-[1.25]
                  lg:scale-[1.38]
                  xl:scale-[1.45]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* LÍNEA INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/30
          to-transparent
        "
      />
    </section>
  );
}
