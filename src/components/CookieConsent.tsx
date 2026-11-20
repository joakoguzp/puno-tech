"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type ConsentChoice = "accepted" | "rejected";
type FbqFunction = ((...args: (string | number)[]) => void) & {
  callMethod?: (...items: (string | number)[]) => void;
  queue: (string | number)[][];
  push: (...items: (string | number)[]) => void;
  loaded?: boolean;
  version?: string;
};

type WindowWithFbq = Window & {
  fbq?: FbqFunction;
  _fbq?: FbqFunction;
};

const STORAGE_KEY = "puno-tech-cookie-consent-v1";
const META_PIXEL_ID = "1636781328117851";
const CONSENT_EVENT = "puno-tech-consent-change";
let volatileConsent: ConsentChoice | null = null;

function readConsent(): ConsentChoice | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted" || saved === "rejected") return saved;
  } catch {
    // Se utiliza el estado temporal de esta visita si el almacenamiento está bloqueado.
  }
  return volatileConsent;
}

function subscribeConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
  };
}

function getConsentSnapshot(): ConsentChoice | null {
  return readConsent();
}

function getServerConsentSnapshot(): ConsentChoice | null {
  return null;
}

function persistConsent(choice: ConsentChoice) {
  volatileConsent = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // La elección se mantiene durante esta visita aunque el navegador bloquee el almacenamiento.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function loadMetaPixel() {
  const pixelWindow = window as WindowWithFbq;

  if (pixelWindow.fbq) {
    // Si el visitante vuelve a aceptar después de rechazar, reactivamos
    // el consentimiento y registramos la visita de esta página.
    pixelWindow.fbq("consent", "grant");
    pixelWindow.fbq("track", "PageView");
    return;
  }

  if (document.getElementById("meta-pixel-script")) return;

  const fbq = function (...args: (string | number)[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as FbqFunction;

  fbq.queue = [];
  fbq.push = (...args) => fbq(...args);
  fbq.loaded = true;
  fbq.version = "2.0";
  pixelWindow.fbq = fbq;
  pixelWindow._fbq = fbq;

  const script = document.createElement("script");
  script.id = "meta-pixel-script";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  // Concedemos el consentimiento antes de inicializar y medir la visita.
  fbq("consent", "grant");
  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (consent === "accepted") loadMetaPixel();
  }, [consent]);

  function saveChoice(nextChoice: ConsentChoice) {
    persistConsent(nextChoice);
    setSettingsOpen(false);

    const pixelWindow = window as WindowWithFbq;
    if (nextChoice === "rejected" && pixelWindow.fbq) {
      pixelWindow.fbq("consent", "revoke");
      // Retira las cookies habituales de Meta que ya pudieran existir.
      for (const name of ["_fbp", "_fbc"]) {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      }
    }
  }

  return (
    <>
      {consent !== null && !settingsOpen && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-cyan-300/30 bg-[#0b203d]/95 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-lg backdrop-blur transition hover:border-cyan-300/60 hover:bg-[#10294b]"
          aria-label="Abrir preferencias de cookies"
        >
          Privacidad y cookies
        </button>
      )}

      {(consent === null || settingsOpen) && (
        <div
          className="fixed inset-x-4 bottom-24 z-[100] mx-auto max-h-[calc(100dvh-8rem)] max-w-2xl overflow-y-auto rounded-2xl border border-cyan-300/20 bg-[#081a33]/[.98] p-5 text-white shadow-[0_20px_70px_rgba(0,0,0,.5)] backdrop-blur-xl sm:bottom-24 sm:left-6 sm:right-24 sm:max-h-[calc(100dvh-2rem)] sm:p-6"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Tu privacidad importa
              </p>
              <h2 id="cookie-consent-title" className="mt-2 text-lg font-bold">
                Configuración de cookies
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-6 text-slate-300"
              >
                Usamos almacenamiento esencial para recordar esta elección. Con tu
                autorización, activamos Meta Pixel para medir visitas y mejorar
                nuestras campañas. Puedes rechazarlo sin perder acceso al sitio.
              </p>
              <a
                href="/privacidad"
                className="mt-2 inline-flex text-sm font-semibold text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-200"
              >
                Leer política de privacidad
              </a>
            </div>
            <button
              type="button"
              onClick={() => saveChoice("rejected")}
              className="self-end rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white sm:order-last"
              aria-label="Cerrar preferencias y rechazar seguimiento"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveChoice("rejected")}
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Rechazar seguimiento
            </button>
            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Aceptar cookies de análisis
            </button>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            El almacenamiento necesario para recordar tu elección no se puede desactivar desde este panel.
            Puedes cambiar tu decisión en cualquier momento desde “Privacidad y cookies”.
          </p>
        </div>
      )}
    </>
  );
}
