import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Values from "../components/Values";
import Services from "../components/Services";
import Equipments from "../components/Equipments";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Values />
      <Services />
      <Equipments />
      <Footer />
    </main>
  );
}
