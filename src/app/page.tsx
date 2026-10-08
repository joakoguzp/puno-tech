import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Solutions from "@/components/sections/Solutions";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://puno-tech.vercel.app/#business",
  name: "PUNO TECH",
  url: "https://puno-tech.vercel.app/",
  image: "https://puno-tech.vercel.app/images/hero.png",
  logo: "https://puno-tech.vercel.app/images/logo.png",
  description:
    "Servicio técnico, reparación y mantenimiento de computadoras y laptops, impresoras, redes WiFi y soporte tecnológico en Puno, Perú.",
  telephone: "+51915210525",
  email: "solucionespc804@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jr. Revolución N° 359",
    addressLocality: "Puno",
    addressRegion: "Puno",
    postalCode: "21002",
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "City",
    name: "Puno",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios tecnológicos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación y mantenimiento de computadoras y laptops" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento y configuración de impresoras" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Configuración de redes y WiFi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soporte técnico informático" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#contenido"
        className="sr-only z-[100] rounded-lg bg-cyan-300 px-4 py-3 font-bold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Navbar />

      <main id="contenido">
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <WhyUs />
        <Solutions />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
