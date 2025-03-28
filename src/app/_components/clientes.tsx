import Image from "next/image";


import { Star, Users, BarChart, Award, TrendingUp, Quote } from "lucide-react";
import foto1 from "@/imagens/02.jpg";
import { Card, CardContent } from "@/components/ui/card";
import user3 from "@/imagens/fotouser3.jpg";



export default function Clientes() {
  return (
    <section
      id="clientes"
      className="relative text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${foto1.src})`,
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className=" relative mx-auto  py-12">
        <div className="mb-16 text-center">
          <h1 className="mb-5 text-4xl font-bold font-oxanium tracking-tight md:text-5xl">
            Nossos Clientes
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-200 font-montserrat">
            Orgulhamo-nos de trabalhar com excelência e ver a vida das pessoas
            transformadas é o nosso objetivo, veja alguns depoimentos sobre o
            nosso trabalho!
          </p>
        </div>

      

        {/* Statistics */}
        <div className="mb-10 rounded-lg bg-gray-300 p-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <Users className="mb-4 h-10 w-10 text-blue-700" />
              <h3 className="text-3xl font-bold text-blue-700">
                100<span className="">&#43;</span>
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
              <h3 className="text-3xl font-bold text-amber-600">10&#43;</h3>
              <p className="text-muted-foreground">Prêmios Recebidos</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="mb-4 h-10 w-10 text-red-800" />
              <h3 className="text-3xl font-bold text-red-800">2 anos</h3>
              <p className="text-muted-foreground">De Experiência</p>
            </div>
          </div>
        </div>

        <div className="mb-20 px-4 md:px-20">
          <h2 className="mb-10 text-center text-3xl font-bold ">Depoimentos</h2>
          <div className="grid gap-2 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Daniel Cardoso",
                company: "Tech Solutions",
                image: user3,
                testimonial:
                  "Trabalhar com esta equipe foi uma experiência transformadora para nossa empresa. A qualidade do serviço e o comprometimento com prazos superaram todas as nossas expectativas.",
                rating: 5,
              },
              {
                name: "João Silva",
                company: "Inovação Digital",
                image: user3,
                testimonial:
                  "Desde que começamos a parceria, nossa produtividade aumentou em 40%. As soluções implementadas foram perfeitamente adaptadas às nossas necessidades específicas.",
                rating: 5,
              },
              {
                name: "Carla Mendes",
                company: "Global Retail",
                image: user3,
                testimonial:
                  "A equipe demonstrou um profundo conhecimento do nosso setor e ofereceu insights valiosos que nos ajudaram a superar desafios complexos. Recomendo fortemente.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4 md:p-8">
                  <Quote className="h-8 w-8 text-primary/40 mb-1 md:mb-4" />
                  <p className="mb-3 md:mb-6 italic text-muted-foreground">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
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
