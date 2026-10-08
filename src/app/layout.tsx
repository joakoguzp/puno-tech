import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#06152d",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://puno-tech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "PUNO TECH | Soporte técnico y soluciones tecnológicas en Puno",
    template: "%s | PUNO TECH",
  },

  description:
    "PUNO TECH brinda soporte técnico, reparación y mantenimiento de computadoras y laptops, impresoras, redes WiFi y soluciones tecnológicas para hogares y empresas en Puno.",

  keywords: [
    "PUNO TECH",
    "servicio técnico Puno",
    "reparación de computadoras Puno",
    "reparación de laptops Puno",
    "soporte técnico Puno",
    "mantenimiento de computadoras",
    "reparación de impresoras",
    "redes WiFi Puno",
    "soluciones tecnológicas Puno",
  ],

  authors: [{ name: "PUNO TECH" }],
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
    siteName: "PUNO TECH",
    title: "PUNO TECH | Soporte técnico y soluciones tecnológicas en Puno",
    description:
      "Servicio técnico profesional para computadoras, laptops, impresoras, redes WiFi y soporte tecnológico en Puno.",
    images: [
      {
        url: "/images/hero.png",
        width: 1536,
        height: 1024,
        alt: "PUNO TECH - Servicio técnico profesional en Puno",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PUNO TECH | Soporte técnico y soluciones tecnológicas en Puno",
    description:
      "Servicio técnico profesional y soluciones tecnológicas en Puno.",
    images: ["/images/hero.png"],
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
