import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#06152d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* =========================
            LOGO
        ========================== */}
        <a
          href="#"
          aria-label="PUNO TECH - Inicio"
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="PUNO TECH"
            width={250}
            height={90}
            priority
            className="
              h-[62px]
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.02]
            "
          />
        </a>

        {/* =========================
            NAVEGACIÓN
        ========================== */}
        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                py-2
                text-[15px]
                font-medium
                text-slate-200
                transition-colors
                duration-300
                hover:text-cyan-400
                after:absolute
                after:bottom-0
                after:left-1/2
                after:h-[2px]
                after:w-0
                after:-translate-x-1/2
                after:rounded-full
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* =========================
            WHATSAPP
        ========================== */}
        <a
          href="https://wa.me/51915210525"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a PUNO TECH por WhatsApp"
          className="
            inline-flex
            h-11
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/20
            bg-gradient-to-r
            from-cyan-500
            to-sky-500
            px-6
            text-sm
            font-bold
            text-white
            shadow-[0_8px_30px_rgba(6,182,212,0.20)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-cyan-300/40
            hover:shadow-[0_12px_35px_rgba(6,182,212,0.35)]
            active:translate-y-0
          "
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
