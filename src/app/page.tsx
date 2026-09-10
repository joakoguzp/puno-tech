import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Solutions from "@/components/sections/Solutions";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Solutions />
        <Contact />
      </main>
    </>
  );
}
