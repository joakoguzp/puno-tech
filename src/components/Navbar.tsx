import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06152d]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* LOGO */}
        <a
          href="#"
          aria-label="PUNO TECH - Inicio"
          className="flex h-[82px] w-[300px] shrink-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="PUNO TECH"
            width={1200}
            height={433}
            priority
            sizes="300px"
            className="block h-auto w-full object-contain"
          />
        </a>

        {/* NAVEGACIÓN */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Navegación principal"
        >
          <a
            href="#"
            className="text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:text-cyan-400"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:text-cyan-400"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:text-cyan-400"
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:text-cyan-400"
          >
            Contacto
          </a>
        </nav>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/51915210525"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a PUNO TECH por WhatsApp"
          className="
            inline-flex
            h-12
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-sky-500
            px-7
            text-sm
            font-bold
            text-white
            shadow-[0_8px_30px_rgba(6,182,212,0.25)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_12px_35px_rgba(6,182,212,0.4)]
          "
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
