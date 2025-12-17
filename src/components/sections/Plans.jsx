import { Check, Star, Zap } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Pro",
      price: "20",
      description: "Perfeito para quem está começando a escalar.",
      features: [
        "Garanta 10.000 créditos/mês",
        "Quantidade de vídeos padrão",
        "Suporte via Whatsapp",
      ],
      highlight: false,
      buttonVariant: "outline",
    },
    {
      name: "Premium",
      price: "100",
      description: "Ideal para empresas de alto faturamento.",
      features: [
        "Garanta 57.500 créditos/mês",
        "Maior quantidade de vídeos mensais",
        "Suporte prioritário via WhatsApp",
      ],
      highlight: true,
      buttonVariant: "solid",
    },
  ];

  return (
    <section
      id="planos"
      className="relative bg-black text-white py-20 md:py-32 flex justify-center items-center overflow-hidden w-full min-h-[100dvh]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-sky-500/20 blur-[120px] rounded-full -left-20 top-20 animate-pulse"></div>
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-sky-600/20 blur-[120px] rounded-full -right-20 bottom-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 shadow-md rounded-full bg-white/5 border border-white/10 text-sky-400 text-base font-medium mb-6 backdrop-blur-md">
            <Star size={24} className="fill-sky-400/20" />
            <span>nossos planos</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Gere mais, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
              economize mais
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            Escolha o plano ideal para a sua necessidade de volume e converta
            visualizações em vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.highlight
                  ? "bg-zinc-900/80 border border-sky-500/50 shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)] hover:border-sky-400"
                  : "bg-zinc-900/40 border border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
              } backdrop-blur-xl`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Zap size={12} className="fill-white" /> MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-zinc-400">US$</span>
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-400">/mês</span>
                </div>
                <p className="text-sm text-zinc-400 mt-4">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-300 text-sm"
                  >
                    <div
                      className={`p-0.5 rounded-full ${
                        plan.highlight
                          ? "bg-sky-500/20 text-sky-400"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://plataforma.ecommclips.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl"
              >
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.buttonVariant === "solid"
                      ? "bg-sky-600 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  {plan.highlight ? "Começar Agora" : "Escolher Plano Pro"}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
