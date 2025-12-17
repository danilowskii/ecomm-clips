import video1 from "../../assets/video1.webm";
import posterVideo1 from "../../assets/posterVideo1.webp";
import video2 from "../../assets/video2.webm";
import posterVideo2 from "../../assets/posterVideo2.webp";
import video3 from "../../assets/video3.webm";
import posterVideo3 from "../../assets/posterVideo3.webp";
import { UserStar, TrendingUp, AudioLines, DollarSign } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const benefitsData = [
  {
    title: " de Conversão",
    titleHighlight: "Aumento",
    stat: "A Ecomm Clips transforma suas fotos estáticas em vídeos dinâmicos, explorando esse potencial de venda sem que você precise filmar nada.",
    videoSrc: video1,
    videoPoster: posterVideo1,
    icon: TrendingUp,
  },
  {
    title: " da Mensagem",
    titleHighlight: "Retenção",
    stat: "Com nossa narração automática por IA e cenários realistas, seu cliente entende os benefícios do produto muito mais rápido do que lendo uma descrição longa.",
    videoSrc: video2,
    videoPoster: posterVideo2,
    icon: AudioLines,
  },
  {
    title: " do Consumidor",
    titleHighlight: "Preferência",
    stat: "Nossos vídeos são gerados automaticamente com até 15 segundos — exatamente o formato curto que a maioria dos compradores nos Marketplaces e redes sociais deseja consumir.",
    videoSrc: video3,
    videoPoster: posterVideo3,
    icon: DollarSign,
  },
];

export default function Data() {
  return (
    <section className=" bg-gray-50 w-screen">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="w-full max-w-7xl flex justify-center items-center flex-col my-8">
          <div className="flex flex-row gap-2 font-semibold items-center md:text-lg bg-slate-200 text-slate-900 py-2 px-6 rounded-full shadow-sm">
            <UserStar size={24} />
            <span>diferencial</span>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            por que usar
            <br />{" "}
            <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
              vídeos nos seus anúncios
            </span>
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Dados de mercado comprovam que o formato de vídeo é superior para
            vendas online
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {benefitsData.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <ScrollReveal delay={index * 0.2} duration={0.4}>
                <div
                  key={index}
                  className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div
                    className={`w-full h-52 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200 relative ${
                      isReverse ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <video
                      autoPlay
                      loading="lazy"
                      loop
                      muted
                      playsInline
                      src={item.videoSrc}
                      poster={item.videoPoster}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                      <item.icon className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center space-y-6 ${
                      isReverse ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold text-lg">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
                          {item.titleHighlight}
                        </span>
                        {item.title}
                      </h3>
                    </div>

                    <div className="border-l-4 border-sky-500 pl-4 py-1">
                      <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
                        {item.stat}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
