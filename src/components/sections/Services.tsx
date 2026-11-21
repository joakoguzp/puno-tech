"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    type: "computer",
    accent: "#01DAFD",
    secondary: "#0095FD",
    glow: "rgba(1,218,253,0.28)",
    image: "/images/services/computadoras-laptops.png",
    imageAlt:
      "Mantenimiento técnico de computadoras y laptops.",
    title: "Computadoras y Laptops",
    description:
      "Reparación, mantenimiento y recuperación de archivos (sujeta a evaluación).",
    tags: [],
  },
  {
    number: "02",
    type: "printer",
    accent: "#F808F8",
    secondary: "#9808F8",
    glow: "rgba(248,8,248,0.25)",
    image: "/images/services/impresoras.png",
    imageAlt:
      "Impresora Epson de sistema continuo abierta para mantenimiento y limpieza de cabezales.",
    title: "Impresoras",
    description: "Limpieza de cabezales, mantenimiento y configuración.",
    tags: [],
  },
  {
    number: "03",
    type: "wifi",
    accent: "#0095FD",
    secondary: "#01DAFD",
    glow: "rgba(0,149,253,0.28)",
    image: "/images/services/redes-wifi.png",
    imageAlt:
      "Configuración de routers y redes WiFi.",
    title: "Redes y WiFi",
    description: "Instalación y configuración de routers y redes WiFi.",
    tags: [],
  },
  {
    number: "04",
    type: "support",
    accent: "#9808F8",
    secondary: "#01DAFD",
    glow: "rgba(152,8,248,0.28)",
    image: "/images/services/soporte-tecnico.png",
    imageAlt:
      "Diagnóstico y soporte técnico de equipos informáticos.",
    title: "Soporte Técnico",
    description: "Revisión y solución de fallas de hardware y software.",
    tags: [],
  },
];

export default function Services() {
  const [highlightedService, setHighlightedService] = useState<string | null>(
    null,
  );

  return (
    <section
      id="servicios"
      className="
        relative
        overflow-hidden
        bg-[#071a33]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ========================================
          FONDO
      ======================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[-180px]
            top-[8%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.055]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-fuchsia-500/[0.045]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/20
            to-transparent
          "
        />
      </div>

      {/* ========================================
          CONTENEDOR
      ======================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ========================================
            ENCABEZADO
        ======================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.045]
              px-4
              py-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-cyan-300
              "
            >
              Nuestros servicios
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Servicios técnicos
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-sky-300
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              en Puno.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Computadoras, impresoras, redes y soporte especializado.
          </p>
        </div>

        {/* ========================================
            TARJETAS
        ======================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-14
          "
        >
          {services.map((service, index) => {
            const isHighlighted = highlightedService === service.type;

            return (
              <article
                key={service.number}
                style={{ animationDelay: `${index * 110}ms` }}
                className={`animate-[service-reveal_650ms_cubic-bezier(0.2,0.75,0.25,1)_both] 
                group
                relative
                flex
                min-h-[460px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-cyan-400/25
                hover:bg-white/[0.045]
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.25)]
                ${isHighlighted ? "border-cyan-300/40 bg-white/[0.055] shadow-[0_20px_65px_rgba(34,211,238,0.13)]" : ""}
              `}
              >
                <div
                  className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  origin-center
                  scale-x-0
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400
                  to-transparent
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:scale-x-100
                  group-hover:opacity-100
                "
                />

                <div
                  className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-400/[0.05]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.10]
                "
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-300
                  "
                  >
                    Servicio {service.number}
                  </span>

                  <span
                    className="
                    text-base
                    text-slate-600
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-400
                  "
                  >
                    →
                  </span>
                </div>

                <button
                  type="button"
                  aria-label={`${isHighlighted ? "Ocultar" : "Mostrar"} imagen de ${service.title}`}
                  aria-expanded={isHighlighted}
                  onClick={() =>
                    setHighlightedService(isHighlighted ? null : service.type)
                  }
                  className={`group/image relative mt-8 block h-60 w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-cyan-400/[0.07] via-sky-400/[0.025] to-fuchsia-400/[0.06] text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:h-64 ${isHighlighted ? "border-cyan-300/50 shadow-[0_0_35px_rgba(34,211,238,0.18)]" : "border-white/[0.07] hover:border-cyan-400/35 hover:shadow-[0_18px_45px_rgba(34,211,238,0.12)]"}`}
                >
                  {isHighlighted ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.25,1)] scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover/image:scale-[1.06]" style={{ color: service.accent }}>
                      <span aria-hidden="true" className="pointer-events-none absolute h-28 w-28 rounded-full opacity-45 blur-xl transition-all duration-500 group-hover/image:opacity-70" style={{ background: `radial-gradient(circle, ${service.glow} 0%, transparent 68%)`, boxShadow: `0 0 42px ${service.glow}` }} />
                      <svg viewBox="0 0 48 48" fill="none" stroke={`url(#service-icon-gradient-${service.type})`} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="relative h-32 w-32 transition-all duration-500 group-hover/image:scale-110 sm:h-36 sm:w-36" style={{ color: service.accent, filter: `drop-shadow(0 0 1.5px #ffffff) drop-shadow(0 0 4px ${service.accent}) drop-shadow(0 0 9px ${service.glow})` }} aria-hidden="true">
                        <defs>
                          <linearGradient id={`service-icon-gradient-${service.type}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={service.accent} />
                            <stop offset="55%" stopColor={service.secondary} />
                            <stop offset="100%" stopColor="#E8FCFF" />
                          </linearGradient>
                        </defs>
                        {service.type === "computer" && (
                          <>
                            <rect x="6" y="8" width="36" height="25" rx="3" />
                            <path d="M18 40h12M24 33v7M12 40h24" />
                            <path d="m18 20 4 4 8-9" />
                          </>
                        )}
                        {service.type === "printer" && (
                          <>
                            <path d="M14 17V7h20v10M14 34H9a3 3 0 0 1-3-3V21a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v10a3 3 0 0 1-3 3h-5" />
                            <path d="M14 28h20v13H14zM34 23h.01" />
                          </>
                        )}
                        {service.type === "wifi" && (
                          <>
                            <path d="M5 18a29 29 0 0 1 38 0M11 25a20 20 0 0 1 26 0M17 32a11 11 0 0 1 14 0" />
                            <circle cx="24" cy="39" r="2" fill="currentColor" stroke="none" />
                          </>
                        )}
                        {service.type === "support" && (
                          <>
                            <path d="M8 25v-4a16 16 0 0 1 32 0v4M8 25H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5V25H8ZM40 25h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5V25h3Z" />
                            <path d="M35 36c-2 4-6 6-11 6h-3" />
                          </>
                        )}
                      </svg>
                      <span className="relative rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/image:scale-105" style={{ borderColor: `${service.accent}70`, backgroundColor: `${service.accent}16`, boxShadow: `0 0 14px ${service.glow}, inset 0 0 12px ${service.glow}`, textShadow: `0 0 10px ${service.accent}` }}>Ver imagen del servicio</span>
                    </div>
                  )}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152d]/95 via-[#06152d]/15 to-[#06152d]/10 transition-opacity duration-500 group-hover/image:from-[#06152d]/80" />
                  <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#06152d]/75 px-3 py-1.5 text-[10px] font-semibold text-white/90 shadow-lg backdrop-blur-md transition-colors group-hover/image:border-cyan-200/40 group-hover/image:text-cyan-100">
                    <span aria-hidden="true">{isHighlighted ? "−" : "+"}</span>
                    {isHighlighted ? "Ocultar imagen" : "Mostrar imagen"}
                  </span>
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-[#06152d]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-100 shadow-lg backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                    {isHighlighted ? "Vista destacada" : "PUNO TECH"}
                  </span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 transition-transform duration-700 group-hover/image:scale-x-100" />
                </button>

                <h3
                  className="
                  relative
                  mt-6
                  text-center
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-50
                "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  relative
                  mt-4
                  text-center
                  text-sm
                  leading-6
                  text-slate-400
                  transition-colors
                  duration-300
                  group-hover:text-slate-300
                "
                >
                  {service.description}
                </p>

                <div
                  className="
                  relative
                  mt-auto
                  flex
                  flex-wrap
                  justify-center
                  gap-2
                  pt-6
                "
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/10
                      group-hover:text-slate-300
                    "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/51915210525?text=${encodeURIComponent(`Hola, PUNO TECH. Quisiera consultar por el servicio de ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar por WhatsApp el servicio de ${service.title}`}
                  className="relative mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.045] px-4 py-2 text-xs font-bold text-cyan-100 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-cyan-300"
                >
                  Consultar este servicio
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>

        {/* ========================================
            CTA
        ======================================== */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-cyan-400/10
            bg-gradient-to-r
            from-cyan-400/[0.035]
            via-white/[0.015]
            to-fuchsia-400/[0.035]
            px-6
            py-6
            sm:mt-10
            sm:px-8
            sm:py-7
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-1/3
              bg-gradient-to-l
              from-cyan-400/[0.04]
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
            "
          >
            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                ¿No sabes qué servicio elegir?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Escríbenos y te ayudamos a identificar el servicio adecuado.
              </p>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar qué servicio necesitas por WhatsApp"
              className="
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-400
                px-6
                text-sm
                font-bold
                text-slate-950
                shadow-[0_8px_25px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-300
                hover:shadow-[0_12px_35px_rgba(34,211,238,0.22)]
                active:translate-y-0
              "
            >
              Pedir orientación
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
