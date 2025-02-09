import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Equipments from "../components/Equipments";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Equipments />
      <Footer />
      <BackToTop />
    </main>
  );
}
