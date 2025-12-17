import {
  CircleQuestionMark,
  Link as LinkIcon,
  UploadCloud,
  Video,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  const steps = [
    {
      id: 1,
      title: "Informações do Produto",
      description: "Título e descrição do produto",
      icon: <LinkIcon size={20} />,
    },
    {
      id: 2,
      title: "Upload de Imagens",
      description: "Suba 3 imagens do produto",
      icon: <UploadCloud size={20} />,
    },
    {
      id: 3,
      title: "Geração do Vídeo",
      description: "Clique e gere vídeos do seu produto",
      icon: <Video size={20} />,
    },
  ];

  return (
    <section className="w-full font-semibold bg-slate-50 p-6 md:p-12 lg:p-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col mb-8">
        <div className="flex flex-row gap-2 items-center md:text-lg bg-slate-200 text-slate-900 py-2 px-6 rounded-full shadow-sm">
          <CircleQuestionMark size={24} />
          <span>como usar</span>
        </div>
      </div>

      <div className="flex pb-10 font-bold">
        <h3 className="text-4xl md:text-6xl text-center">
          Crie em <br />
          <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
            3 passos simples
          </span>
        </h3>
      </div>

      <div className="w-full max-w-6xl relative">
        <div className="block absolute top-8 left-0 w-full h-1 bg-slate-200 -z-0 rounded-full" />

        <div className="grid grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.2} duration={0.4}>
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 border-4 border-slate-200 flex items-center justify-center text-slate-600 z-10 shadow-sm transition-all duration-300 group-hover:border-sky-500 group-hover:text-sky-500 group-hover:scale-110">
                  {step.icon}
                </div>

                <div className="mt-6">
                  <span className="block text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">
                    Passo {step.id}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-normal text-sm px-4 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
