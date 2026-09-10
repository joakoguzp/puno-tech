"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué servicios ofrece PUNO TECH?",
    answer:
      "Ofrecemos servicios de mantenimiento, diagnóstico y reparación de computadoras y laptops, soporte para impresoras, configuración de redes y WiFi, instalación y configuración de software y otras soluciones tecnológicas.",
  },
  {
    question: "¿Realizan primero un diagnóstico?",
    answer:
      "Sí. Antes de realizar un trabajo buscamos identificar el problema y determinar qué solución necesita el equipo. Esto nos permite orientarte de manera más clara antes de realizar el servicio.",
  },
  {
    question: "¿Atienden a hogares y empresas?",
    answer:
      "Sí. PUNO TECH está orientado tanto a usuarios particulares como a pequeños negocios y empresas que necesitan soporte y soluciones tecnológicas.",
  },
  {
    question: "¿Puedo consultar mi problema por WhatsApp?",
    answer:
      "Sí. Puedes comunicarte directamente por WhatsApp para explicarnos tu problema y recibir una orientación inicial sobre cómo podemos ayudarte.",
  },
  {
    question: "¿Cuánto demora una reparación?",
    answer:
      "El tiempo depende del tipo de problema, del estado del equipo y del trabajo que sea necesario realizar. Después del diagnóstico podremos orientarte mejor sobre el tiempo estimado.",
  },
  {
    question: "¿Los servicios tienen garantía?",
    answer:
      "Los servicios que correspondan contarán con las condiciones de garantía que se indiquen al momento de realizar el trabajo. La cobertura dependerá del servicio realizado y de sus condiciones específicas.",
  },
  {
    question: "¿Qué debo hacer si no sé cuál es el problema?",
    answer:
      "No necesitas conocer el diagnóstico técnico. Puedes explicarnos qué comportamiento presenta tu equipo y nosotros te ayudaremos a identificar qué puede estar ocurriendo y qué pasos seguir.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#06152d] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================
          FONDO
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            ENCABEZADO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Preguntas frecuentes
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Todo más claro
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              antes de comenzar.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Algunas de las preguntas más comunes antes de solicitar un servicio.
          </p>
        </div>

        {/* =========================
            FAQ
        ========================== */}

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-cyan-400/25 bg-cyan-400/[0.035]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14]"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="text-sm font-semibold leading-6 text-white sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-lg
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/[0.08] bg-white/[0.03] text-slate-400"
                      }
                    `}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/[0.06] px-6 pb-6 pt-5 text-sm leading-7 text-slate-400 sm:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            CTA
        ========================== */}

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            ¿No encuentras la respuesta que buscas?
          </p>

          <a
            href="#contacto"
            className="
              mt-4
              inline-flex
              h-11
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/25
              bg-cyan-400/[0.06]
              px-6
              text-sm
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-400/40
              hover:bg-cyan-400/[0.1]
              hover:text-white
            "
          >
            Cuéntanos tu caso
          </a>
        </div>
      </div>
    </section>
  );
}
