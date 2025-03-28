'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import img from "@/imagens/ze01-Photoroom.png";
export default function Hero() {

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gray-950 text-white pt-24 md:pt-20 mb-6 lg:mb-0">
      <div className="mx-2 lg:mx-0 md:p-4  flex justify-center  items-start ">
        <div className="  md:w-[765px] py-2 flex flex-col items-center md:items-center lg:items-start   space-y-5 text-center lg:py-24    ">
          <h1 className="text-3xl  font-semibold lg:py-2 font-oxanium text-center lg:text-start tracking-tighter  sm:text-5xl md:text-6xl">
            Transformando <span className="text-emerald-500">pessoas</span> e processos em{" "}
            <span className="text-emerald-500">
              resultados extraordinários!{" "}
            </span>
          </h1>
          <p className="w-[340px] md:min-w-[200px] max-w-[500] md:w-[750px] md:max-w[1000]  text-lg md:text-lg lg:text-xl text-center lg:text-start text-gray-100 font-oxanium sm:text-xl  ">
            <span className=" shadow-sm">Consultoria</span> e
            <span className="  shadow-sm">coaching </span>especializados para
            elevar o desempenho da sua equipe e impulsionar o sucesso do
            negócio.
          </p>

          <p className="w-[330px] md:min-w-[200px] max-w-[500] md:w-[750px] md:max-w[1000] text-lg md:text-lg lg:text-xl  text-center lg:text-start text-gray-100 font-oxanium sm:text-xl  ">
            Temos{" "}
            <span className="text-emerald-500 shadow-sm">
              {" "}
              Software Operacional
            </span>
            , <span className=" text-emerald-500 shadow-sm">
              Dashboard
            </span>{" "}
            para controle de <span className=" shadow-sm">Gestão</span>,
            Acompanhamento de{" "}
            <span className="text-emerald-500 shadow-sm">
              indicadores de Desempenho
            </span>{" "}
            e muito mais!
          </p>
          <p className="w-[300px] md:w-[720px] text-lg md:text-lg text-center lg:text-xl lg:text-start text-gray-100 font-oxanium sm:text-xl  ">
            Venha conhecer mais de perto <span>Quem Somos nós</span> e o que{" "}
            <span>Temos à oferecer!</span>
          </p>
          <div className="flex gap-5 py-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-oxanium text-gray-950 bg-gray-50"
            >
              <Link href="#quemSomos"
                  onClick={(e) => {
                    e.preventDefault(); // Previne o comportamento padrão do link
                    scrollToSection("#quemSomos");
                  }}
              >Quem Somos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="destructive"
              className="font-oxanium"
            >
              <Link href="#services" 
                onClick={(e) => {
                  e.preventDefault(); // Previne o comportamento padrão do link
                  scrollToSection("#services");
                }}
              >Serviços</Link>
            </Button>
          </div>
        </div>
        <div className="hidden xl:flex  -mb-5">
          <Image src={img} alt="foto-ze" width={500} />
        </div>
      </div>
    </section>
  );
}
