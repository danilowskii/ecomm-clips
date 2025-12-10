import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Footer />
    </div>
  );
}
