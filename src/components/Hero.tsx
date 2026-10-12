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
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:min-h-[min(680px,calc(100svh-88px))] lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-8 xl:gap-10">
          {/* Contenido */}
          <div className="relative z-20 max-w-[650px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              PUNO TECH · Puno, Perú
            </p>

            <h1 className="text-[clamp(2.35rem,8.5vw,3.25rem)] font-black leading-[0.98] tracking-[-0.05em] sm:text-[3.75rem] md:text-[4rem] lg:text-[clamp(2.85rem,3.6vw,3.7rem)] xl:text-[4rem]">
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
              <div className="relative aspect-[4/3] bg-[#06152d] sm:aspect-[3/2]">
                <Image
                  src="/images/hero.png"
                  alt="Técnico de PUNO TECH realizando mantenimiento a una laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 760px"
                  className="object-contain object-center p-0 sm:p-1"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#06152d]/15 via-transparent to-[#06152d]/20"
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="max-w-full rounded-2xl border border-white/10 bg-[#06152d]/85 px-3 py-2.5 backdrop-blur-md sm:px-4 sm:py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                      Atención profesional
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
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
