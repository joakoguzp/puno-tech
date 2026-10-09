import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Cómo trabajamos", href: "#como-trabajamos" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Por qué PUNO TECH", href: "#porque" },
  { name: "Soluciones", href: "#soluciones" },
  { name: "Preguntas frecuentes", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

const services = [
  "Computadoras y laptops",
  "Recuperación de archivos",
  "Impresoras",
  "Redes y WiFi",
  "Soporte técnico",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#06152d]">
      {/* Brillo superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Luces ambientales */}
      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[-120px] h-[350px] w-[350px] rounded-full bg-fuchsia-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================================================
            BLOQUE PRINCIPAL
        ========================================================= */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-20">
          {/* =======================================================
              MARCA
          ======================================================= */}
          <div>
            <a
              href="#inicio"
              aria-label="PUNO TECH - Inicio"
              className="group inline-flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="PUNO TECH"
                width={250}
                height={90}
                className="h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Soluciones tecnológicas profesionales para computadoras, laptops,
              recuperación de archivos, impresoras, redes y soporte técnico en Puno.
            </p>

            <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-slate-300">
              Tecnología al instante,
              <span className="text-cyan-300"> soluciones con calidad.</span>
            </p>

            {/* Línea decorativa */}
            <div className="mt-7 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />

            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-600">
              Atención tecnológica en Puno, Perú
            </p>
          </div>

          {/* =======================================================
              NAVEGACIÓN
          ======================================================= */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navegación
            </h3>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Navegación del pie de página"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-2 group-hover:bg-cyan-400"
                  />

                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* =======================================================
              SERVICIOS + CONTACTO
          ======================================================= */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Servicios
            </h3>

            <div className="mt-5 space-y-2.5">
              {services.map((service) => (
                <a
                  key={service}
                  href="#servicios"
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-2 group-hover:bg-cyan-400"
                  />

                  {service}
                </a>
              ))}
            </div>

            {/* Contacto rápido */}
            <div className="mt-7 border-t border-white/[0.07] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Contacto
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51915210525"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a PUNO TECH por WhatsApp"
                className="group mt-4 flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.12]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.2 6.1A8.2 8.2 0 0 1 20 13.2a8.1 8.1 0 0 1-8.1 8.1 8.3 8.3 0 0 1-4-.99L3.8 21l.7-3.88a8.2 8.2 0 0 1-.99-3.92A8.2 8.2 0 0 1 7.2 6.1Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.8 9.3c.2-.45.4-.46.74-.47h.42c.14 0 .3.05.4.34l.58 1.42c.07.18.05.33-.05.48l-.42.56c-.1.13-.2.27-.08.5.13.23.56.92 1.2 1.48.83.73 1.53.96 1.76 1.07.23.12.37.1.51-.06l.64-.75c.14-.17.3-.15.5-.08l1.36.64c.2.1.34.15.39.24.05.1.05.55-.13 1.08-.18.53-1.03 1.02-1.42 1.07-.36.05-.81.07-1.31-.09-.3-.1-.69-.23-1.19-.45-2.1-.9-3.48-3.05-4.68-5.22-.2-.37-.82-1.46-.82-2.78 0-1.32.68-1.97.92-2.24Z"
                    />
                  </svg>
                </span>

                <span className="text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                  915 210 525
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:solucionespc804@gmail.com"
                className="group mt-3 flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/[0.07] text-fuchsia-300 transition-all duration-300 group-hover:border-fuchsia-400/40 group-hover:bg-fuchsia-400/[0.12]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </svg>
                </span>

                <span className="break-all text-sm text-slate-400 transition-colors duration-300 group-hover:text-fuchsia-300">
                  solucionespc804@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            FRANJA DE CONTACTO
        ========================================================= */}
        <div className="border-t border-white/[0.07] py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Atención en Puno
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jr.+Revoluci%C3%B3n+359%2C+Puno%2C+Per%C3%BA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                aria-label="Ver dirección de PUNO TECH en Google Maps"
              >
                Jr. Revolución N° 359, Puno, Perú, 21002
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 w-fit items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_14px_35px_rgba(34,211,238,0.22)] active:translate-y-0"
            >
              Contactar ahora
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* =========================================================
            LÍNEA INFERIOR
        ========================================================= */}
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PUNO TECH. Todos los derechos
            reservados.
          </p>

          <p>
            Tecnología al instante,
            <span className="text-slate-500"> soluciones con calidad.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
