'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <section
      id="contact"
      className="py-8  px-4 md:h-[850px] md:py-20 pb-20 lg:pb-0 bg-gray-950"
    >
      <div className="container">
        <h2 className="mb-4 md:mb-10 text-center font-oxanium text-zinc-50 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Entre em Contato
        </h2>
        <form className="mx-auto max-w-72 md:max-w-sm space-y-4" onSubmit={handleSubmit} >
          <Input
            type="text"
            placeholder="Seu Nome"
            required
            className="h-10 md:h-12 w-full px-4 text-lg text-zinc-50 font-oxanium"
          />
          <Input
            type="email"
            placeholder="Seu Melhor E-mail"
            required
            className="h-10 md:h-12 w-full px-4 text-lg text-zinc-50 font-oxanium"
          />
          <Input
            type="text"
            placeholder="Assunto"
            className="h-10 md:h-12 w-full px-4 text-lg text-zinc-50 font-oxanium"
          />
          <Textarea
            placeholder="Fale um pouco sobre o que deseja..."
            required
            className="h-36 w-full px-4 text-lg text-zinc-50 font-oxanium"
          />
          <Button
          
            type="submit"
            className="w-full h-12 text-lg text-zinc-950 bg-emerald-500 hover:bg-emerald-300 "
          >
            Enviar
          </Button>
          <h2 className="text-gray-50 text-center font-semibold">
            Ou Contate-nos via WhatsApp
          </h2>
          <a
            href="https://wa.me/69992497814"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              className="w-full h-12 text-lg text-zinc-950 bg-emerald-500 hover:bg-emerald-300"
            >
              WhatsApp
            </Button>
          </a>
        </form>
      </div>
    </section>
  );
}
