import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <Benefits />
        <About />
      </div>

      <Footer />
    </div>
  );
}
