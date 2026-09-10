import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puno-tech-fix.base44.app"),

  title: {
    default: "PUNO TECH | Soluciones Tecnológicas",
    template: "%s | PUNO TECH",
  },

  description:
    "PUNO TECH ofrece soluciones tecnológicas profesionales en Puno: reparación y mantenimiento de computadoras y laptops, soporte técnico, impresoras, redes y configuración de equipos.",

  keywords: [
    "PUNO TECH",
    "servicio técnico Puno",
    "reparación de computadoras Puno",
    "reparación de laptops Puno",
    "soporte técnico Puno",
    "mantenimiento de computadoras",
    "reparación de impresoras",
    "configuración de redes",
    "soluciones tecnológicas Puno",
  ],

  authors: [
    {
      name: "PUNO TECH",
    },
  ],

  creator: "PUNO TECH",
  publisher: "PUNO TECH",

  applicationName: "PUNO TECH",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://puno-tech-fix.base44.app",
    siteName: "PUNO TECH",
    title: "PUNO TECH | Soluciones Tecnológicas",
    description:
      "Servicio técnico profesional y soluciones tecnológicas para hogares y empresas en Puno.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "PUNO TECH | Soluciones Tecnológicas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PUNO TECH | Soluciones Tecnológicas",
    description:
      "Servicio técnico profesional y soluciones tecnológicas en Puno.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#06152d] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
