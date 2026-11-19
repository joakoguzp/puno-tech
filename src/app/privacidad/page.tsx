import Link from "next/link";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales y el uso de cookies en PUNO TECH.",
};

const sections = [
  {
    title: "1. Responsable y contacto",
    body: [
      "PUNO TECH es la marca que identifica los servicios de soporte y soluciones tecnológicas ofrecidos en Puno, Perú. Para consultas sobre privacidad o para ejercer tus derechos, puedes escribir a solucionespc804@gmail.com.",
      "La identificación legal completa del titular del negocio y su domicilio para notificaciones deberán incorporarse a esta política antes de considerarla una versión legal definitiva.",
    ],
  },
  {
    title: "2. Información que podemos tratar",
    body: [
      "Si decides comunicarte con nosotros por WhatsApp o correo electrónico, podremos tratar los datos que incluyas voluntariamente en tu mensaje, como tu nombre, número de contacto, dirección de correo y la información necesaria para atender tu consulta o solicitud de servicio.",
      "El sitio también puede recibir información técnica básica necesaria para su funcionamiento. No solicitamos datos de tarjetas bancarias ni información sensible mediante esta página.",
    ],
  },
  {
    title: "3. Para qué utilizamos la información",
    body: [
      "Utilizamos los datos de contacto para responder consultas, coordinar diagnósticos y servicios técnicos, dar seguimiento a solicitudes y atender comunicaciones relacionadas con el servicio solicitado.",
      "Con autorización para cookies de seguimiento, utilizamos Meta Pixel para medir visitas e interacciones generales con el sitio y evaluar nuestras campañas publicitarias. Si rechazas esta categoría, el píxel no se carga desde esta página.",
    ],
  },
  {
    title: "4. Cookies y Meta Pixel",
    body: [
      "El sitio utiliza almacenamiento local del navegador para recordar tu elección sobre cookies. Esta preferencia se guarda en tu dispositivo y puedes modificarla en cualquier momento mediante el botón “Privacidad y cookies”.",
      "Meta Pixel es una herramienta de Meta Platforms que, cuando autorizas las cookies de seguimiento, puede recopilar información sobre la navegación y el dispositivo para medición y publicidad. Meta puede tratar esa información conforme a sus propias políticas y condiciones. Consulta la Política de privacidad de Meta en https://www.facebook.com/privacy/policy/.",
      "Las cookies o tecnologías estrictamente necesarias para el funcionamiento del sitio se distinguen de las tecnologías de análisis y publicidad. Rechazar el seguimiento no impide navegar ni contactar con PUNO TECH.",
    ],
  },
  {
    title: "5. Proveedores y transferencias",
    body: [
      "El sitio se encuentra alojado en Vercel. Si autorizas Meta Pixel, la información asociada a esa herramienta puede ser tratada por Meta y sus proveedores, incluso fuera del Perú, de acuerdo con sus condiciones y políticas. Los servicios externos de WhatsApp y correo también se rigen por las políticas de sus respectivos proveedores.",
    ],
  },
  {
    title: "6. Conservación y seguridad",
    body: [
      "Conservamos los mensajes y datos de contacto durante el tiempo necesario para atender la solicitud, prestar el servicio y cumplir obligaciones aplicables. Aplicamos medidas razonables para proteger la información; ningún sistema de transmisión o almacenamiento puede garantizar seguridad absoluta.",
      "La preferencia de cookies permanece guardada en el navegador hasta que la cambies o borres los datos del sitio.",
    ],
  },
  {
    title: "7. Tus derechos",
    body: [
      "Puedes solicitar información sobre tus datos personales y ejercer los derechos que reconoce la normativa peruana de protección de datos personales, incluidos los derechos de acceso, rectificación, cancelación y oposición, escribiendo a solucionespc804@gmail.com. También puedes retirar tu consentimiento para el seguimiento desde el panel de cookies.",
    ],
  },
  {
    title: "8. Cambios en esta política",
    body: [
      "Podemos actualizar esta política cuando cambien nuestros servicios, herramientas o las normas aplicables. La versión vigente estará disponible en esta página e indicará su fecha de actualización.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#06152d] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          ← Volver a PUNO TECH
        </Link>

        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          PUNO TECH · Privacidad
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          Última actualización: 19 de noviembre de 2026
        </p>
        <p className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-5 text-sm leading-7 text-slate-300">
          En PUNO TECH procuramos tratar la información personal con
          responsabilidad y transparencia. Aquí explicamos qué información puede
          tratarse cuando navegas por nuestra web o te comunicas con nosotros.
        </p>

        <div className="mt-10 space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-slate-300"
                  >
                    {paragraph.startsWith("Meta puede") ? (
                      <>
                        Meta puede tratar esa información conforme a sus propias
                        políticas y condiciones. Consulta la{" "}
                        <a
                          href="https://www.facebook.com/privacy/policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline underline-offset-4"
                        >
                          Política de privacidad de Meta
                        </a>
                        .
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
