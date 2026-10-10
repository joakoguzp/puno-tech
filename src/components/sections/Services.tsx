"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    type: "computer",
    image: "/images/services/computadoras-laptops.svg",
    imageAlt: "Ilustración tecnológica de una laptop abierta en mantenimiento con herramienta de precisión",
    title: "Computadoras y Laptops",
    description:
      "Diagnóstico, mantenimiento, reparación, optimización y solución de problemas de hardware y software, además de recuperación de archivos cuando sea técnicamente posible.",
    tags: ["Diagnóstico", "Mantenimiento", "Reparación", "Recuperación de archivos"],
  },
  {
    number: "02",
    type: "printer",
    image: "/images/services/impresoras.svg",
    imageAlt: "Ilustración de una impresora y hojas, representando mantenimiento y configuración",
    title: "Impresoras",
    description:
      "Mantenimiento, configuración y solución de problemas de impresión, conectividad y funcionamiento.",
    tags: ["Mantenimiento", "Configuración", "Soporte"],
  },
  {
    number: "03",
    type: "wifi",
    image: "/images/services/redes-wifi.svg",
    imageAlt: "Ilustración de un router con señal inalámbrica y dispositivos conectados",
    title: "Redes y WiFi",
    description:
      "Configuración y optimización de routers, redes WiFi y conectividad para hogares, negocios y empresas.",
    tags: ["WiFi", "Routers", "Redes"],
  },
  {
    number: "04",
    type: "support",
    image: "/images/services/soporte-tecnico.svg",
    imageAlt: "Ilustración de una pantalla de diagnóstico y una herramienta técnica",
    title: "Soporte Técnico",
    description:
      "Asistencia técnica para resolver problemas informáticos, configurar programas y mantener tus equipos funcionando correctamente.",
    tags: ["Soporte", "Software", "Asistencia"],
  },
];

export default function Services() {
  const [highlightedService, setHighlightedService] = useState<string | null>(null);

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
            Soluciones tecnológicas
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
              para tus necesidades.
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
            Diagnóstico, reparación y soporte especializado para que tu
            tecnología funcione correctamente, sin complicaciones.
          </p>
        </div>

        {/* ========================================
            TARJETAS
        ======================================== */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-14
            lg:grid-cols-4
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
                min-h-[470px]
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
              {/* Línea superior */}

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

              {/* Resplandor */}

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

              {/* ====================================
                  CABECERA TARJETA
              ==================================== */}

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

              {/* ====================================
                  ICONO ANIMADO
              ==================================== */}

              <button
                type="button"
                aria-label={`${isHighlighted ? "Reducir" : "Destacar"} imagen de ${service.title}`}
                aria-expanded={isHighlighted}
                onClick={() => setHighlightedService(isHighlighted ? null : service.type)}
                className={`group/image relative mt-8 block w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-cyan-400/[0.07] via-sky-400/[0.025] to-fuchsia-400/[0.06] text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${isHighlighted ? "h-64 border-cyan-300/50 shadow-[0_0_35px_rgba(34,211,238,0.18)] sm:h-72" : "h-44 border-white/[0.07] hover:border-cyan-400/35 hover:shadow-[0_18px_45px_rgba(34,211,238,0.12)] sm:h-48"}`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.75,0.25,1)] ${isHighlighted ? "scale-[1.16]" : "group-hover/image:scale-[1.08]"}`}
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152d]/95 via-[#06152d]/15 to-[#06152d]/10 transition-opacity duration-500 group-hover/image:from-[#06152d]/80" />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#06152d]/75 px-3 py-1.5 text-[10px] font-semibold text-white/90 shadow-lg backdrop-blur-md transition-colors group-hover/image:border-cyan-200/40 group-hover/image:text-cyan-100">
                  <span aria-hidden="true">{isHighlighted ? "−" : "+"}</span>
                  {isHighlighted ? "Reducir imagen" : "Ver imagen"}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-[#06152d]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-100 shadow-lg backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                  {isHighlighted ? "Vista destacada" : "PUNO TECH"}
                </span>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 transition-transform duration-700 group-hover/image:scale-x-100" />
              </button>

              {/* ====================================
                  CONTENIDO
              ==================================== */}

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

              {/* ====================================
                  ETIQUETAS
              ==================================== */}

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
                href={`https://wa.me/51915210525?text=${encodeURIComponent(`Hola, PUNO TECH. Quisiera consultar por el servicio de ${service.title}.`) }`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por WhatsApp el servicio de ${service.title}`}
                className="relative mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.045] px-4 py-2 text-xs font-bold text-cyan-100 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-cyan-300"
              >
                Consultar servicio
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
                ¿No sabes qué necesita tu equipo?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Podemos comenzar con un diagnóstico y orientarte hacia la mejor
                solución.
              </p>
            </div>

            <a
              href="https://wa.me/51915210525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar diagnóstico por WhatsApp"
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
              Solicitar diagnóstico
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
