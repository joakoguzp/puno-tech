import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#06152d]">
      {/* Brillo superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-fuchsia-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Bloque principal */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:py-20">
          {/* Marca */}
          <div>
            <a
              href="#"
              aria-label="PUNO TECH - Inicio"
              className="inline-flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="PUNO TECH"
                width={250}
                height={90}
                className="h-[62px] w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Soluciones tecnológicas profesionales para computadoras, laptops,
              impresoras, redes y soporte técnico en Puno.
            </p>

            <p className="mt-5 text-sm font-semibold text-slate-300">
              Tecnología al instante,
              <span className="text-cyan-300"> soluciones con calidad.</span>
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#inicio"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Servicios
              </a>

              <a
                href="#nosotros"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Nosotros
              </a>

              <a
                href="#porque"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Por qué PUNO TECH
              </a>

              <a
                href="#soluciones"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Soluciones
              </a>

              <a
                href="#contacto"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.08] text-sm text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.12]">
                  ☎
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                    915 210 525
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/[0.08] text-sm text-fuchsia-300">
                  ◉
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Ubicación
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    Puno, Perú
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2 inline-flex h-10 items-center justify-center
                  rounded-lg bg-cyan-400 px-5 text-xs font-bold
                  text-slate-950 transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-cyan-300
                  hover:shadow-[0_10px_25px_rgba(34,211,238,0.20)]
                "
              >
                Contactar ahora
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div
          className="
            flex flex-col gap-4 border-t border-white/[0.08]
            py-6 text-xs text-slate-500
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} PUNO TECH. Todos los derechos
            reservados.
          </p>

          <p>
            Servicio técnico profesional en{" "}
            <span className="text-slate-400">Puno, Perú.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
