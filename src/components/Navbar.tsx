import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#06152d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-10">
        <a href="#inicio" aria-label="PUNO TECH - Inicio" className="group shrink-0">
          <Image
            src="/images/logo.png"
            alt="PUNO TECH"
            width={250}
            height={90}
            priority
            className="h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[62px]"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-2 text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/51915210525"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a PUNO TECH por WhatsApp"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(6,182,212,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(6,182,212,0.30)] sm:px-6"
          >
            WhatsApp
          </a>

          <details className="relative md:hidden">
            <summary
              aria-label="Abrir menú"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300 [&::-webkit-details-marker]:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </span>
            </summary>

            <nav
              aria-label="Navegación móvil"
              className="absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#071a33]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-400/[0.08] hover:text-cyan-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
