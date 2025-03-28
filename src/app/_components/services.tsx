'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Users,
  TrendingUp,
  ChartNoAxesCombined,
  Stars,
  Flag,
} from "lucide-react";

import img1 from "@/imagens/01.jpg";
import img2 from "@/imagens/02.jpg";
import img3 from "@/imagens/03.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Análise de Perfil Comportamental",
    description:
      "Obtenha insights sobre a dinâmica da sua equipe e melhore a colaboração por meio de análises baseadas em dados.",
    icon: TrendingUp,
    image: img3,
    url: "/perfilComportamental",
  },
  {
    title: "Consultoria de Gestão",
    description:
      "Transforme sua empresa , utilizando ferramentas para decisões assertivas e aumentando a eficiência dos processos e garantimos um crescimento sustentável e inovador",
    icon: BarChart3,
    image: img1,
    url: "/consultoria",
  },
  {
    title: "Arquiteturas de cargos",
    description:
      " Obtenha uma estruturação dos cargos de acordo com o perfil ideal para cada função, avaliando candidatos internos e externos para as vagas em aberto e garantindo o alinhamento com os requisitos desejados para o sucesso da função. ",
    icon: Flag,
    image: img3,
    url: "/arquitetura",
  },
  {
    title: "DNA Organizaciona",
    description:
      " Obtenha insights sobre a dinâmica de sua equipe por setor e melhore a colaboração, relações interpessoais e resultados por meio de análise comportamental. Estruture e alinhe a cultura e o clima organizacional, com uma visão ampla das características do tempo, identificando tendências, talentos e lacunas a serem preenchidas para maximizar o desempenho.",
    icon: ChartNoAxesCombined,
    image: img1,
    url: "/dna",
  },
  {
    title: "Novos Talentos",
    description:
      "Descubra  novas potencias com a definição estratégica de funções, competências técnica e comportamentais e estilos de liderança alinhados aos objetivos da instituição. Otimize a alocação de talentos para maximizar a produtividade e estruturação de planos de carreira para o aprimoramento e crescimento contínuo de sua equipe.",
    icon: Stars,
    image: img2,
    url: "/talentos",
  },

  {
    title: "Treinamentos alta perfomance",
    description:
      " Desenvolva sua equipe para resultados exclusivos. Oferecemos treinamentos personalizados que aprimoram liderança, vendas, atendimento e cultura organizacional, focando em inteligência emocional e autoconhecimento. Transformar-nos limitantes e potencializar o desempenho profissional com nossa abordagem de alta performance.",
    icon: Users,
    image: img2,
    url: "/treinamentos",
  },
];

export default function Services() {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="services" className="bg-gray-950 text-gray-100 md:py-10 mb-10 md:mb-0">
      <div className="w-full  pt-10 md:pt-6 flex flex-col items-center">
        <h2 className="mb-7  text-center text-3xl font-bold font-oxanium  tracking-tighter sm:text-4xl md:text-5xl">
          Nossos serviços
        </h2>
        <div className="grid gap-y-6 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 justify-center">
          {services.map((service, index) => (
            <Card key={index} className=" md:max-h-[400px] w-[340px] md:w-[360px] flex flex-col">
              <Image
                src={service.image}
                alt="imgs"
                width={600}
                height={200}
                quality={100}
                className="w-full h-[110px] object-cover rounded-xl"
              />
              <CardHeader className="flex flex-row items-center gap-2 -mt-4">
                <service.icon className="h-10 w-10 text-orange-500" />
                <CardTitle className="font-oxanium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="font-oxanium -mt-4 text-justify">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="md:-mt-5 -mt-4 pb-2 md:pb-4 gap-2 items-center justify-start">
                <Button variant={"default"}>
                  <Link href={service.url}>Saiba Mais</Link>
                </Button>
                <Button variant={"secondary"} className="bg-emerald-500 hover:bg-emerald-300">
                  <Link href="#contact"
                      onClick={(e) => {
                        e.preventDefault(); // Previne o comportamento padrão do link
                        scrollToSection("#contact");
                      }}
                  >Fale Conosco</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
