import logo from "../../assets/ecommclips-dark.webp";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const waMe =
    "https://wa.me/5511966052171?text=Olá,%20gostaria%20de%20começar%20com%20a%20Ecomm%20Clips.";
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
            <a className="hover:text-sky-600" href="#conheca">
              Conheça
            </a>
            <a className="hover:text-sky-600" href="#planos">
              Planos
            </a>
            <a
              className="hover:text-sky-600"
              href={waMe}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              className="hover:text-sky-600"
              href={waMe}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="inline w-6 h-auto" /> Whatsapp
            </a>
            <a
              className="hover:text-sky-600"
              href="https://www.instagram.com/ecomm.flow/"
              target="_blank"
            >
              <FaInstagram className="inline w-6 h-auto" /> Instagram
            </a>
            <a
              className="hover:text-sky-600"
              href="mailto:contato@ecommflow.com.br?subject=Quero usar Ecomm Clips&body=Olá, vim pelo site e gostaria de saber mais da Ecomm Clips."
            >
              <FaRegEnvelope className="inline mr-1 w-6 h-auto" />
              E-mail
            </a>
            <a
              className="hover:text-sky-600"
              href={waMe}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt className="inline w-5 h-auto" /> Telefone
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
