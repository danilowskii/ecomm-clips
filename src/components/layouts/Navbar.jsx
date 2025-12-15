import logo from "../../assets/ecommclips-light.webp";

export default function Navbar() {
  const menuOptions = [
    { href: "#conheca", label: "Conheça" },
    { href: "#planos", label: "Planos" },
  ];

  return (
    <section className="fixed w-full z-50 bg-black/40 backdrop-blur-md justify-center h-24 flex bg-opacity-95">
      <header className="px-4 self-center md:px-12 lg:px-24 flex flex-row gap-6 md:gap-16 lg:gap-64 max-w-7xl">
        <a
          className="self-center rounded-xl"
          target="_blank"
          href="https://plataforma.ecommclips.com"
        >
          <img
            src={logo}
            alt="Logo Ecomm Clips"
            className="w-auto h-8 md:h-16 "
          />
        </a>
        <div className="flex flex-row gap-6 md:gap-10">
          <div className="flex flex-row justify-end gap-6 md:gap-10 items-center h-20 w-full">
            {menuOptions.map((option, index) => (
              <div key={index}>
                <a
                  className="group relative text-sm md:text-base text-slate-50 font-semibold"
                  href={option.href}
                >
                  {option.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            ))}
          </div>
          <a
            target="_blank"
            href="https://plataforma.ecommclips.com"
            className="self-center px-4 py-2 text-nowrap rounded-xl font-semibold transition-all duration-200 bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
          >
            Iniciar Sessão
          </a>
        </div>
      </header>
    </section>
  );
}
