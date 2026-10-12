import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#06152d] text-white"
    >
      {/* Fondo ambiental */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        <div className="absolute right-[-180px] top-[8%] h-[620px] w-[620px] rounded-full bg-fuchsia-500/[0.06] blur-[170px]" />
        <div className="absolute bottom-[-260px] left-[38%] h-[520px] w-[520px] rounded-full bg-sky-500/[0.05] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[min(700px,calc(100svh-88px))] items-center gap-10 py-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-8 xl:gap-10">
          {/* Contenido */}
          <div className="relative z-20 max-w-[650px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              PUNO TECH · Puno, Perú
            </p>

            <h1 className="text-[clamp(2.45rem,8.8vw,3.35rem)] font-black leading-[0.98] tracking-[-0.055em] sm:text-[4rem] md:text-[4.25rem] lg:text-[clamp(3rem,4.2vw,4rem)] xl:text-[4.35rem]">
              Soporte técnico
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                que sí resuelve.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Reparamos y damos mantenimiento a computadoras, laptops, impresoras y redes. Atención técnica en Puno.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex h-13 items-center justify-center rounded-xl bg-cyan-400 px-7 text-sm font-bold text-slate-950 shadow-[0_14px_38px_rgba(34,211,238,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_18px_45px_rgba(34,211,238,0.30)]"
              >
                Ver servicios
              </a>

              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a PUNO TECH por WhatsApp"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-7 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07]"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 sm:text-sm">
              <a
                href="tel:+51915210525"
                className="transition-colors hover:text-cyan-300"
              >
                Tel. 915 210 525
              </a>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <a
                href="mailto:solucionespc804@gmail.com"
                className="break-all transition-colors hover:text-cyan-300"
              >
                solucionespc804@gmail.com
              </a>
            </div>


          </div>

          {/* Imagen principal */}
          <div className="relative z-10 min-w-0 w-full">
            <div aria-hidden="true" className="absolute left-[50%] top-[50%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.12] blur-[110px] sm:h-[560px] sm:w-[560px]" />

            <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[30px] border border-white/[0.10] bg-white/[0.02] shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/hero.png"
                  alt="Técnico de PUNO TECH realizando mantenimiento a una laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 760px"
                  className="object-contain object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#06152d]/15 via-transparent to-[#06152d]/20"
                />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="rounded-2xl border border-white/10 bg-[#06152d]/75 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                      Atención profesional
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Computación · Redes · Impresoras
                    </p>
                  </div>

                  <div className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-200 backdrop-blur-md sm:block">
                    PUNO TECH
                  </div>
                </div>
              </div>
            </div>

            {/* Detalle visual mínimo */}
            <div aria-hidden="true" className="absolute -bottom-4 left-[12%] h-px w-[76%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
