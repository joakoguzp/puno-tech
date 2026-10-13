"use client";

import { useState } from "react";

const whatsappUrl =
  "https://wa.me/51915210525?text=Hola%20PUNO%20TECH%2C%20necesito%20ayuda%20con%20mi%20equipo.";

export default function WhatsAppFloat() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 z-[60] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {showMessage && (
        <div className="whatsapp-message relative max-w-[275px] rounded-2xl border border-emerald-300/20 bg-[#09251f] px-4 py-3 pr-9 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <button
            type="button"
            onClick={() => setShowMessage(false)}
            aria-label="Cerrar mensaje de WhatsApp"
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-emerald-100/70 transition hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">×</span>
          </button>
          <p className="text-sm font-bold leading-snug">¿Tu equipo necesita ayuda?</p>
          <p className="mt-1 text-xs leading-relaxed text-emerald-50/85">
            Escríbenos y te orientamos.
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a PUNO TECH por WhatsApp"
        title="Escríbenos por WhatsApp"
        className="whatsapp-ball group relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.38)] transition-[box-shadow,transform] duration-300 hover:scale-105 hover:shadow-[0_14px_42px_rgba(37,211,102,0.48)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70 sm:h-[68px] sm:w-[68px]"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/25" aria-hidden="true" />
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current sm:h-9 sm:w-9" aria-hidden="true">
          <path d="M16.02 3.2A12.67 12.67 0 0 0 5.16 22.4L3.4 28.8l6.56-1.72a12.7 12.7 0 0 0 6.06 1.54h.01A12.71 12.71 0 0 0 16.02 3.2Zm0 23.25h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-3.89 1.02 1.04-3.79-.25-.39a10.49 10.49 0 1 1 8.84 4.86Zm5.76-7.86c-.31-.15-1.83-.9-2.12-1-.28-.1-.49-.15-.7.16-.2.31-.8 1-1 1.2-.19.21-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.51-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.18c.15.2 2.16 3.3 5.24 4.63.73.32 1.3.51 1.75.65.74.24 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-[#06152d] bg-cyan-300" aria-hidden="true" />
      </a>
    </div>
  );
}
