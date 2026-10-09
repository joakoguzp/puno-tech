"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué servicios ofrece PUNO TECH?",
    answer:
      "Ofrecemos mantenimiento, diagnóstico y reparación de computadoras y laptops, recuperación de archivos cuando sea técnicamente posible, soporte para impresoras, configuración de redes y WiFi, instalación y configuración de software y otras soluciones tecnológicas según las necesidades de cada cliente.",
  },
  {
    question: "¿Pueden recuperar archivos borrados?",
    answer:
      "Podemos revisar si es posible recuperar archivos según el dispositivo y el estado del almacenamiento. No se puede garantizar la recuperación en todos los casos. Si perdiste archivos importantes, evita guardar nuevos datos o instalar programas en esa unidad y contáctanos para evaluar el caso.",
  },
  {
    question: "¿Realizan primero un diagnóstico?",
    answer:
      "Sí. Antes de realizar un trabajo buscamos identificar qué está ocurriendo y determinar qué solución necesita el equipo. Esto nos permite orientarte de manera más clara y evitar intervenciones innecesarias.",
  },
  {
    question: "¿Puedo conocer el costo antes de realizar el servicio?",
    answer:
      "El costo depende del problema y del trabajo que sea necesario realizar. Después de revisar el caso podremos orientarte sobre el servicio y, cuando corresponda, informarte el costo antes de realizar el trabajo.",
  },
  {
    question: "¿Atienden a hogares y empresas?",
    answer:
      "Sí. Atendemos a usuarios particulares, hogares, pequeños negocios y empresas que necesitan mantenimiento, reparación, configuración o soporte para sus equipos y soluciones tecnológicas.",
  },
  {
    question: "¿Atienden en Puno?",
    answer:
      "Sí. PUNO TECH brinda atención en Puno para servicios tecnológicos según el tipo de necesidad. Puedes comunicarte con nosotros para explicarnos tu caso y conocer la mejor forma de atención.",
  },
  {
    question: "¿Cuánto demora una reparación?",
    answer:
      "El tiempo depende del tipo de problema, del estado del equipo y del trabajo que sea necesario realizar. Una vez identificado el problema podremos orientarte mejor sobre el tiempo estimado del servicio.",
  },
  {
    question: "¿Los servicios tienen garantía?",
    answer:
      "Los servicios que correspondan cuentan con las condiciones de garantía que se indiquen al momento de realizar el trabajo. La cobertura depende del servicio realizado y de sus condiciones específicas.",
  },
  {
    question: "¿Qué hago si no sé cuál es el problema?",
    answer:
      "No necesitas conocer el diagnóstico técnico. Puedes explicarnos qué comportamiento presenta tu equipo, qué ocurrió antes de que apareciera el problema o qué mensaje aparece en pantalla. Nosotros te ayudaremos a orientar el caso y determinar los siguientes pasos.",
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
        <div className="absolute left-[-180px] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[8%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.025] blur-[160px]" />
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
            Antes de comenzar,
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              aclaremos tus dudas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Encuentra respuestas a algunas de las preguntas más comunes antes de
            solicitar un servicio tecnológico.
          </p>
        </div>

        {/* =========================
            FAQ
        ========================== */}

        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-cyan-400/25 bg-cyan-400/[0.035] shadow-[0_10px_35px_rgba(8,145,178,0.06)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.03]"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-5
                    text-left
                    sm:px-7
                    sm:py-6
                  "
                >
                  <span
                    className={`
                      text-sm
                      font-semibold
                      leading-6
                      transition-colors
                      duration-300
                      sm:text-base
                      ${
                        isOpen
                          ? "text-cyan-100"
                          : "text-white group-hover:text-cyan-100"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-xl
                      font-light
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/[0.08] bg-white/[0.03] text-slate-400 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                      }
                    `}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  className={`
                    grid transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="mx-6 border-t border-white/[0.06] sm:mx-7" />

                    <p className="px-6 pb-6 pt-5 text-sm leading-7 text-slate-400 sm:px-7 sm:text-[15px]">
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

        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">¿Tu duda no está aquí?</p>

          <p className="mt-2 text-base font-medium text-slate-300">
            Cuéntanos qué está ocurriendo y te orientamos.
          </p>

          <a
            href="https://wa.me/51915210525"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-cyan-400/25
              bg-gradient-to-r
              from-cyan-500/[0.12]
              to-sky-500/[0.08]
              px-7
              text-sm
              font-bold
              text-cyan-300
              shadow-[0_8px_30px_rgba(6,182,212,0.08)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-400/40
              hover:bg-cyan-400/[0.12]
              hover:text-white
              hover:shadow-[0_12px_35px_rgba(6,182,212,0.16)]
              active:translate-y-0
            "
          >
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
                d="M20 11.5a8.2 8.2 0 0 1-8.3 8.2 8.3 8.3 0 0 1-4.1-1.1L4 19.7l1.1-3.4A8.1 8.1 0 0 1 3.5 12 8.2 8.2 0 1 1 20 11.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 9.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.3-2.8-.5-5.4-3.1-5.9-5.9-.1-.5 0-1.1.4-1.5Z"
              />
            </svg>
            Consultar mi caso
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
