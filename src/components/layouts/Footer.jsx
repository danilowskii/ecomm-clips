import logo from "../../assets/ecommclips-dark.webp";

export default function Footer() {
  return (
    <section className=" bg-slate-100 p-8 md:px-20 w-full ">
      <footer className="font-semibold transition-colors duration-300">
        <div className="flex flex-col border-b-2 border-slate-500/50 pb-10 md:flex-row justify-center items-start gap-10 md:gap-16 mb-10">
          <a className="rounded-2xl" href="https://plataforma.ecommclips.com">
            <img
              src={logo}
              alt="Logo Ecomm Clips
          "
              className="h-16 md:h-28 flex self-center"
            />
          </a>
          <div className="flex flex-row gap-3 md:flex-col md:border-r-2 md:border-slate-500/50 md:pr-16">
            <a className="hover:text-sky-600" href="#inicio">
              Início
            </a>
            <a className="hover:text-sky-600" href="">
              Serviços
            </a>
            <a className="hover:text-sky-600" href="">
              Planos
            </a>
            <a className="hover:text-sky-600" href="">
              Contato
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="hover:text-sky-600" href="">
              Whatsapp
            </a>
            <a className="hover:text-sky-600" href="">
              Instagram
            </a>
            <a className="hover:text-sky-600" href="">
              E-mail
            </a>
            <a className="hover:text-sky-600" href="">
              Telefone
            </a>
          </div>
        </div>
        <p className="text-center font-light text-slate-600">
          © 2025 Ecomm Flow Estratégias Digitais LTDA — CNPJ 44.148.089/0001-03.{" "}
          <br />
          Todos os direitos reservados.
        </p>
        <p className="text-center transition-all ease-in-out font-light text-transparent hover:text-slate-600">
          Desenvolvido por Danilo{" "}
        </p>
      </footer>
    </section>
  );
}
