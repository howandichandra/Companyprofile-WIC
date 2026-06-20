import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyWIC from "./components/WhyWIC";
import Process from "./components/Process";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyWIC />
        <Process />
        <Projects />
        <CTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
