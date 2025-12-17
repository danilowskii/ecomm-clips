import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import Plans from "./components/sections/Plans";
import Data from "./components/sections/Data";
import WhatsAppButton from "./components/ui/WhatsappButton";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <div className="flex flex-col">
        <Hero />
        <Benefits />
        <Data />
        <About />
        <Plans />
      </div>

      <Footer />
    </div>
  );
}
