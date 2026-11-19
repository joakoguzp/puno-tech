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
      "PUNO TECH es el nombre comercial del servicio de soporte y soluciones tecnológicas que opera en Puno, Perú. El responsable del tratamiento es la persona natural titular del negocio. La identificación legal completa del titular y el domicilio válido para notificaciones se incorporarán antes de publicar esta política como versión definitiva.",
      "Para consultas sobre privacidad o para ejercer tus derechos, puedes escribir a solucionespc804@gmail.com o comunicarte por WhatsApp Business al 915210525.",
    ],
  },
  {
    title: "2. Datos personales que tratamos",
    body: [
      "Cuando solicitas atención por WhatsApp Business, podemos tratar tu nombre, número de teléfono, mensajes y comunicaciones, marca y modelo del equipo, descripción del problema técnico y la información necesaria para coordinar el diagnóstico, reparación, mantenimiento, entrega, garantía o reclamo.",
      "PUNO TECH utiliza WhatsApp Business como canal de atención y, según la información operativa proporcionada por el titular, actualmente gestiona allí los datos de sus clientes. No mantiene una base adicional de clientes en Excel, CRM o carpetas externas como parte del proceso descrito en esta política.",
      "Te pedimos que no envíes contraseñas, documentos personales ni archivos privados que no sean necesarios para el servicio. Si un trabajo requiere acceder a información o archivos del equipo, se coordinará previamente el alcance y la forma de protegerlos.",
    ],
  },
  {
    title: "3. Finalidades del tratamiento",
    body: [
      "Utilizamos los datos para responder consultas, evaluar problemas técnicos, preparar y comunicar presupuestos, coordinar servicios, informar avances, entregar equipos, atender garantías y reclamos y cumplir obligaciones legales aplicables.",
      "No utilizamos los datos de atención para enviar publicidad o promociones no solicitadas. Cualquier finalidad adicional deberá contar con la base legal y, cuando corresponda, el consentimiento requerido.",
    ],
  },
  {
    title: "4. WhatsApp Business, proveedores y almacenamiento",
    body: [
      "El canal principal de atención es WhatsApp Business, un servicio de Meta. El tratamiento técnico que realicen WhatsApp y Meta se rige también por sus propias condiciones y políticas de privacidad. El uso del servicio puede implicar tratamiento o transferencia internacional de datos, según la infraestructura y los servicios involucrados.",
      "Actualmente, PUNO TECH no tiene activadas copias de seguridad de las conversaciones de WhatsApp en Google Drive o iCloud, según lo informado por el titular. Esto no significa que WhatsApp o los dispositivos de los participantes no puedan conservar información conforme a sus propias funciones y políticas.",
      "El sitio web está alojado en Vercel. Los proveedores tecnológicos pueden tratar datos técnicos necesarios para prestar sus servicios, de acuerdo con sus condiciones y políticas aplicables.",
    ],
  },
  {
    title: "5. Cookies y Meta Pixel",
    body: [
      "El sitio utiliza almacenamiento local del navegador para recordar la elección del visitante sobre el seguimiento. Esta preferencia se guarda en el dispositivo y puede modificarse desde el control “Privacidad y cookies”.",
      "Meta Pixel es una herramienta de Meta Platforms que se utiliza para medir visitas e interacciones y evaluar campañas publicitarias. En esta implementación, el píxel se carga únicamente después de que el visitante acepta el seguimiento. Si lo rechaza, el píxel no debe cargarse desde esta página. Rechazarlo no impide navegar ni contactar con PUNO TECH.",
      "Las tecnologías estrictamente necesarias para recordar la preferencia se distinguen de las tecnologías de análisis y publicidad. Puedes consultar también la Política de privacidad de Meta en https://www.facebook.com/privacy/policy/.",
    ],
  },
  {
    title: "6. Conservación de los datos",
    body: [
      "PUNO TECH conserva los datos durante el tiempo necesario para las finalidades informadas y las obligaciones legales aplicables. Como política interna, se han definido los siguientes plazos:",
      "• Consultas que no generan un servicio: hasta 90 días desde el último contacto.\n• Historial de servicios concluidos: hasta 2 años desde la entrega del equipo.\n• Archivos temporales del cliente: hasta su entrega y confirmación de que ya no son necesarios.\n• Garantías, reclamos o controversias pendientes: durante su tramitación y el tiempo adicional justificable.\n• Documentación contable o tributaria: durante los plazos legales aplicables.",
      "Los plazos podrán ampliarse cuando exista una obligación legal, garantía, reclamo o controversia que justifique conservar determinada información. Una vez que los datos dejan de ser necesarios, se eliminarán de los medios bajo control de PUNO TECH, salvo que exista una razón legal válida para conservarlos.",
    ],
  },
  {
    title: "7. Seguridad y confidencialidad",
    body: [
      "PUNO TECH procura limitar el acceso a los datos a quien necesita utilizarlos para atender el servicio y aplicar medidas razonables de protección del dispositivo y de las cuentas utilizadas. Entre las medidas previstas se encuentran el bloqueo seguro del teléfono, la verificación en dos pasos, la revisión de dispositivos vinculados y la eliminación de información que ya no sea necesaria.",
      "Actualmente no se encuentran activadas copias de seguridad de WhatsApp en Google Drive o iCloud. La eliminación desde el dispositivo de PUNO TECH no garantiza borrar copias que puedan permanecer en dispositivos de los participantes o en sistemas administrados por proveedores externos.",
    ],
  },
  {
    title: "8. Tus derechos",
    body: [
      "Puedes ejercer los derechos de acceso, rectificación, cancelación y oposición reconocidos por la normativa peruana de protección de datos personales, mediante una solicitud a solucionespc804@gmail.com o al WhatsApp Business 915210525. PUNO TECH podrá solicitar información razonable para verificar tu identidad y ubicar los datos correspondientes.",
      "Las solicitudes serán atendidas dentro de los plazos y conforme a las condiciones establecidas por la normativa vigente. También puedes cambiar o retirar tu elección de seguimiento desde el control “Privacidad y cookies” del sitio.",
    ],
  },
  {
    title: "9. Cambios en esta política",
    body: [
      "Esta política podrá actualizarse cuando cambien los servicios, los canales de atención, las herramientas tecnológicas o las normas aplicables. La versión vigente estará disponible en esta página e indicará su fecha de actualización.",
    ],
  },
  {
    title: "10. Normativa aplicable",
    body: [
      "Esta política se interpreta conforme a la Ley N.º 29733, Ley de Protección de Datos Personales, su Reglamento aprobado por Decreto Supremo N.º 016-2024-JUS y demás disposiciones aplicables en el Perú.",
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
          responsabilidad y transparencia. Aquí explicamos qué información
          tratamos cuando solicitas nuestros servicios o navegas por esta web.
        </p>

        <div className="mt-10 space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="whitespace-pre-line text-sm leading-7 text-slate-300"
                  >
                    {paragraph}
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
