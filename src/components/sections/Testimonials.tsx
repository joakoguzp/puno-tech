const testimonials = [
  {
    name: "Tu próximo cliente",
    role: "Experiencia de servicio",
    text: "Aquí podremos mostrar la experiencia real de nuestros clientes después de recibir el servicio.",
  },
  {
    name: "Cliente PUNO TECH",
    role: "Soporte tecnológico",
    text: "Esta sección estará preparada para incorporar testimonios reales y verificables.",
  },
  {
    name: "Cliente PUNO TECH",
    role: "Servicio técnico",
    text: "Cuando tengamos experiencias reales, reemplazaremos estos textos por las opiniones de nuestros clientes.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-[#071a33] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================
          FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Experiencias
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            La confianza se construye
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              con resultados.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Las experiencias de nuestros clientes serán parte fundamental de la
            historia de PUNO TECH.
          </p>
        </div>

        {/* =========================
            TESTIMONIOS
        ========================== */}

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/25
                hover:bg-white/[0.04]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              "
            >
              {/* Línea superior */}

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Estrellas */}

              <div className="flex gap-1 text-sm text-cyan-400">★ ★ ★ ★ ★</div>

              {/* Texto */}

              <p className="mt-6 text-sm leading-7 text-slate-300">
                “{testimonial.text}”
              </p>

              {/* Cliente */}

              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] text-sm font-bold text-cyan-300">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            NOTA
        ========================== */}

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs leading-5 text-slate-500">
            Los testimonios de esta sección serán reemplazados por experiencias
            reales de clientes de PUNO TECH.
          </p>
        </div>
      </div>
    </section>
  );
}
