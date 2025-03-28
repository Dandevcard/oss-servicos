import Image from "next/image";
import laaf from "@/imagens/laaf.webp"
import patrick from "@/imagens/patrick.jpg"
import Promotora from "@/imagens/melhor.webp"
import febracis from "@/imagens/febracis1.png"

import {
  Star,
  Users,
  BarChart,
  Award,
  TrendingUp,
  Quote,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import foto1 from "@/imagens/02.jpg";
import { Card, CardContent } from "@/components/ui/card";

const empresas = [
  {
    logo: laaf,
    nome: "Laaf Treinamentos",
  },
  {
    logo: patrick,
    nome: "Patrick refeições",
  },
  {
    logo: febracis,
    nome: "Febracis florianópolis",
  },
  {
    logo: Promotora,
    nome: "Melhor Promotora",
  },

];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="relative text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${foto1.src})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className=" relative mx-auto  py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold font-oxanium tracking-tight md:text-5xl">
            Nossos Clientes
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-200 font-montserrat">
            Orgulhamo-nos de trabalhar com empresas inovadoras e líderes em seus
            setores. Conheça alguns dos nossos principais clientes e casos de
            sucesso.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold font-oxanium">
            Empresas que Confiam em Nós
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {empresas.map((index) => (
              <div
                key={index.nome}
                className="flex items-center justify-center p-4"
              >
                <div className=" max-w-28   flex flex-col items-center justify-center">
          
                  <Image width={200} height={200} alt="logos"   src={index.logo}/>
                </div>
               

              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-10 rounded-lg bg-gray-300 p-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <Users className="mb-4 h-10 w-10 text-blue-700" />
              <h3 className="text-3xl font-bold text-blue-700">
                100<span className="">+</span>
              </h3>
              <p className="text-muted-foreground">Clientes Atendidos</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart className="mb-4 h-10 w-10 text-emerald-600" />
              <h3 className="text-3xl font-bold text-emerald-600">98%</h3>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="text-3xl font-bold text-amber-600">10+</h3>
              <p className="text-muted-foreground">Prêmios Recebidos</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="mb-4 h-10 w-10 text-red-800" />
              <h3 className="text-3xl font-bold text-red-800">2 anos</h3>
              <p className="text-muted-foreground">De Experiência</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 px-4 md:px-20">
          <h2 className="mb-10 text-center text-3xl font-bold ">Depoimentos</h2>
          <div className="grid gap-2 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Daniel Cardoso",
                company: "Tech Solutions",
                image:
                  "https://instagram.ffln13-1.fna.fbcdn.net/v/t51.2885-19/379786517_1032571204440704_4397570851507740021_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.ffln13-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QGjNXqo6kKXjzUZI8xrry2oH3cqTMcC4GpJLrIDCqkRJbms5FuWt2UF7A_XUizdd2A&_nc_ohc=ynnZ0X1LIr0Q7kNvgGVuxz5&_nc_gid=RMvA4ZGkylMj3cmghb8AUw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYFRk82VIJOYdys-sLJPZCcqKIgnd3YKoBVWXfsuKEOfOA&oe=67EAAAB2&_nc_sid=7a9f4b",
                testimonial:
                  "Trabalhar com esta equipe foi uma experiência transformadora para nossa empresa. A qualidade do serviço e o comprometimento com prazos superaram todas as nossas expectativas.",
                rating: 5,
              },
              {
                name: "João Silva",
                company: "Inovação Digital",
                image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "Desde que começamos a parceria, nossa produtividade aumentou em 40%. As soluções implementadas foram perfeitamente adaptadas às nossas necessidades específicas.",
                rating: 5,
              },
              {
                name: "Carla Mendes",
                company: "Global Retail",
                image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "A equipe demonstrou um profundo conhecimento do nosso setor e ofereceu insights valiosos que nos ajudaram a superar desafios complexos. Recomendo fortemente.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4 md:p-8">
                  <Quote className="h-8 w-8 text-primary/40 mb-1 md:mb-4" />
                  <p className="mb-3 md:mb-6 italic text-muted-foreground">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="mr-4 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="ml-auto flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4  ${
                            i < testimonial.rating
                              ? "fill-yellow-300 text-yellow-500 "
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
