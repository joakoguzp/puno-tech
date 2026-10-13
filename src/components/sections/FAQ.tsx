"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Pueden recuperar archivos borrados?",
    answer:
      "Podemos evaluar si es posible según el dispositivo y el estado del almacenamiento; no se puede garantizar la recuperación. Si los archivos son importantes, evita guardar datos nuevos o instalar programas en esa unidad y contáctanos.",
  },
  {
    question: "¿Conoceré el costo antes del trabajo?",
    answer:
      "El costo depende de la falla y del trabajo necesario. Te explicaremos el alcance y el costo antes de intervenir, cuando corresponda.",
  },
  {
    question: "¿Cuánto demora una reparación?",
    answer:
      "Depende de la falla, el estado del equipo y los trabajos necesarios. Te daremos una estimación al evaluar el caso.",
  },
  {
    question: "¿Los servicios tienen garantía?",
    answer:
      "Cuando un servicio incluya garantía, te explicaremos sus condiciones y cobertura antes de finalizar el trabajo.",
  },
  {
    question: "¿Y si no sé qué le pasa a mi equipo?",
    answer:
      "No necesitas conocer la causa técnica. Cuéntanos qué ocurre, cuándo empezó y si aparece algún mensaje de error.",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
Resolvemos tus dudas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Información útil antes de solicitar atención.
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

      </div>
    </section>
  );
}
