import { Users, TrendingUp, Sparkles, Wallet, Zap } from "lucide-react";
import logo from "../../assets/logo.png";
import ScrollReveal from "../ui/ScrollReveal";

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      text: "Querem destacar seus produtos em marketplaces altamente concorridos",
      icon: <TrendingUp size={24} />,
    },
    {
      id: 2,
      text: "Querem aumentar a atratividade e a percepção de valor do seu produto",
      icon: <Sparkles size={24} />,
    },
    {
      id: 3,
      text: "Querem economizar com criadores de vídeo e ferramentas de edição",
      icon: <Wallet size={24} />,
    },
    {
      id: 4,
      text: "Buscam uma vantagem competitiva real, utilizando vídeos com contexto e narração automática",
      icon: <Zap size={24} />,
    },
  ];

  return (
    <section
      id="conheca"
      className="w-full overflow-hidden font-semibold bg-slate-50 p-6 md:p-12 lg:p-18 flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-7xl flex justify-center items-center flex-col md:mb-8">
        <div className="flex flex-row gap-2 items-center md:text-lg bg-slate-200 text-slate-900 py-2 px-6 rounded-full shadow-sm">
          <Users size={24} />
          <span>para quem é</span>
        </div>
      </div>

      <div className="flex pb-12 font-bold text-center">
        <h3 className="text-4xl md:text-6xl leading-tight text-slate-800">
          <br className="md:hidden" />
          Ideal para <br />
          <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
            vendedores que
          </span>
        </h3>
      </div>

      <div className="w-full relative max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="absolute left-0 top-1/2 md:-top-1/2 -translate-x-1/6 md:-translate-x-1/2 opacity-5 z-0">
          <img src={logo} alt="Logo Ecomm Clips" />
        </div>
        {benefits.map((item) => (
          <ScrollReveal duration={0.6} delay={item.id * 0.1} key={item.id}>
            <div
              key={item.id}
              className="group relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-500 transition-all duration-300 flex flex-row items-center gap-6"
            >
              <div className="w-0 h-0 transition-all duration-300 group-hover:w-full group-hover:h-full rounded-2xl -z-0 absolute bottom-0 left-1/2 -translate-x-1/2 bg-sky-100"></div>
              <div className="flex-shrink-0 w-14 z-10 h-14 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors duration-300">
                {item.icon}
              </div>

              <p className="text-slate-700 z-10 font-medium text-lg leading-snug group-hover:text-slate-800 transition-colors">
                {item.text}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.2} duration={0.7}>
        <button className="w-full md:w-fit px-20 py-4 mt-8 rounded-xl font-semibold transition-all duration-200 bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40">
          Gerar vídeo com IA
        </button>
      </ScrollReveal>
    </section>
  );
}
