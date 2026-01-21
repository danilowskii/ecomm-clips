import RotatingText from "../ui/RotatingText";
import videoHero from "../../assets/videoHero.webm";
import posterVideoHero from "../../assets/posterVideoHero.webp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-24 z-0 bg-black h-auto w-screen overflow-hidden relative"
    >
      <div className="z-0">
        <div className="hidden md:block animate-pulse absolute left-0 bottom-0 filter rounded-full blur-[50px] md:blur-[80px] h-40 w-40 md:h-64 md:w-64 bg-sky-600/30"></div>
      </div>

      <div className="z-10 flex p-10 flex-col md:flex-row justify-center gap-16 items-center h-full ">
        <div className="text-slate-50 overflow-x-hidden max-w-lg font-semibold text-4xl md:text-[56px] xl:text-[72px] leading-tight">
          <h1 className="">
            Crie{" "}
            <span className="font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              clipes
            </span>
            <br /> que{" "}
            <span>
              <RotatingText
                texts={["vendem", "convertem", "atraem", "destacam"]}
                mainClassName="text-slate-50 font-bold overflow-hidden rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden "
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>
          </h1>
          <h3 className="text-xl text-slate-50 py-6">
            Transforme fotos em vídeos profissionais com IA, prontos para
            anúncios e marketplaces
          </h3>
          <button className="text-base md:text-lg px-6 md:px-10 py-4 rounded-xl font-semibold transition-all duration-200 bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40">
            Gerar vídeo agora
          </button>
        </div>
        <div className="w-full max-w-[600px] ">
          {" "}
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube-nocookie.com/embed/711-05iMpQs?si=AG5aBWUKZy26R_rX&loop=1&playlist=711-05iMpQs"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 0 }}
          ></iframe>
        </div>
        {/*<div className="relative rounded-3xl">
          <video
            src={videoHero}
            poster={posterVideoHero}
            autoPlay
            loop
            muted
            playsInline
            className="w-60 md:w-80 h-auto md:h-auto z-10 object-cover"
          ></video>
        </div>*/}
      </div>
    </section>
  );
}
