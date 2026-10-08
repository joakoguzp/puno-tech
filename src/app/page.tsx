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

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
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
