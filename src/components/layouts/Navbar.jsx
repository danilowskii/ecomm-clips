import logo from "../../assets/ecommclips-light.webp";

export default function Navbar() {
  const menuOptions = [
    { href: "#sobre", label: "Conheça" },
    { href: "#planos", label: "Planos" },
  ];

  return (
    <section className="fixed w-full bg-black backdrop-blur-xl justify-center h-24 flex bg-opacity-95">
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
        <div className="flex flex-row  gap-6 md:gap-10">
          <div className="flex flex-row justify-end gap-6 md:gap-10 items-center h-20 w-full">
            {menuOptions.map((option, index) => (
              <div key={index}>
                <a
                  className="group relative text-slate-50  font-semibold"
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
            className="self-center text-nowrap font-medium text-sm md:text-base bg-sky-600 px-3 py-2 md:px-4 md:py-2 text-slate-50 rounded-full"
          >
            Iniciar Sessão
          </a>
        </div>
      </header>
    </section>
  );
}
