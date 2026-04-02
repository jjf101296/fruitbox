import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FruitBoxes from "@/components/FruitBoxes";
import HealthBenefits from "@/components/HealthBenefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="boxes">
        <FruitBoxes />
      </section>
      <section id="benefits">
        <HealthBenefits />
      </section>
      <section id="why-us">
        <WhyChooseUs />
      </section>
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
