import foto1 from "@/imagens/03.jpg";
import {
  Mail,
  MapPin,
  Phone,
  Plus,
  Eye,
  Award,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function QuemSomos() {
  return (
    <section
      id="quemSomos"
      className="relative bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${foto1.src})`,
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para melhorar a leitura */}
      <div className="absolute inset-0 bg-slate-100/35 "></div>

      <div className="relative mx-auto max-w-7xl px-8 py-9">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-oxanium text-gray-950 font-bold tracking-tight md:text-5xl">
            Quem Somos
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-lg  font-oxanium text-gray-950">
            Somos uma empresa focada na transformação organizacional, unindo
            análise de perfil comportamental, consultorias especializadas e
            soluções tecnológicas para potencializar pessoas e processos.
          </p>
        </div>

        {/* Missão e Visão */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-2">
          <Card className="bg-gray-950  text-gray-50 md:max-w-[450px] md:h-[220px] lg:h-[200]">
            <CardContent className="p-3 md:p-5">
              <div className="flex mb-0 items-center gap-4 md:mb-1">
                <h2 className="mb-1 text-2xl font-bold">Nossa Missão</h2>
                <div className="mb-1 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-50">
                  <Plus className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <p className="text-gray-300">
                Potencializar organizações por meio de ferramentas tecnológicas,
                gestão e treinamentos sistêmicos. Conectando o objetivos
                institucionais ao desenvolvimento humano, promovendo autonomia e
                sinergia das equipes para resultados exponenciais.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-950  text-gray-50 max-w-[450px] md:h-[220px] lg:h-[200] ">
            <CardContent className="p-3 md:p-5">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="mb-1 text-2xl font-bold">Nossa Visão</h2>
                <div className="mb-1 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-50">
                  <Eye className="h-5 w-5 md:h-6 md:w-6  text-primary" />
                </div>
              </div>
              <p className="text-gray-300">
                Ser reconhecida mundialmente como referência em inovação e
                excelência, gerando valor para nossos clientes, colaboradores e
                a sociedade, através de soluções que transformam positivamente o
                mundo.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="mb-0 flex flex-col ">
          <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold text-gray-950 p-2">
            Nossos Valores
          </h2>
          <div className="grid gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Briefcase,
                title: "Inovação",
                text: "Valorizamos a cooperação e o trabalho em equipe, incentivando a busca de soluções inovadoras e eficazes para melhor atender as organizações e assim superarem seus desafios.",
              },
              {
                Icon: Award,
                title: "Integridade",
                text: "Atuar com ética e transparência em todas as ações, promovendo a autorresponsabilidade em todas a relações empresariais.",
              },

              {
                Icon: Users,
                title: "Excelência",
                text: "Comprometemo-nos com a excelência e a melhoria contínua, garantindo o mais alto padrão de entrega e desempenho da equipe para alcançar os melhores resultados.",
              },
            ].map(({ Icon, title, text }, index) => (
              <Card
                key={index}
                className="bg-gray-950 text-gray-50 max-w-[380px]"
              >
                <CardContent className="p-3 md:p-6">
                  <div className=" md:mb-2 flex justify-center">
                    <Icon className="h-8 w-8 " />
                  </div>
                  <h3 className="md:mb-2 text-center text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-center text-gray-300">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
