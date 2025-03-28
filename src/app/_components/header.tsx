"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // 🔹 Adicionado useEffect para detectar rolagem da página
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        // 🔹 Se o menu móvel está aberto, verifica se precisa esconder o header ao rolar
        setHideOnScroll(currentScrollY > lastScrollY);
      } else {
        // 🔹 Se o menu não está aberto, aplica o efeito de header fixo em telas grandes
        setIsScrolled(currentScrollY > 50);
      }

      lastScrollY = currentScrollY;
      setIsMenuOpen(false)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu no mobile
    }
  };

  return (
    <header
      className={` fixed top-0 left-0 w-full h-24 md:h-24 z-50 transition-all duration-300  ${
        isMenuOpen
          ? hideOnScroll
            ? "-translate-y-full" // 🔹 Esconde o header quando o menu está aberto e rolamos para baixo
            : "bg-gray-950/95 shadow-lg backdrop-blur-md" // 🔹 Mantém um fundo escuro enquanto o menu está aberto
          : isScrolled
          ? "bg-gray-950/90 shadow-lg backdrop-blur-md pb-3" // 🔹 Aplica efeito de header fixo ao rolar para baixo
          : "bg-transparent" // 🔹 Header transparente no topo da página
      }`}
    >
      <div className="flex items-center justify-between pt-10 pb-4 px-8 md:px-12">
        <Link
          href="#home"
          className="flex flex-col items-center"
          onClick={(e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            scrollToSection("#home");
          }}
        >
          <h2 className="text-4xl lg:text-4xl font-semibold font-oxanium text-gray-50">
            OSS GSC
          </h2>
          <span className="hidden lg:flex text-xs text-gray-400 font-oxanium">
            Gestão de Serviços e Consultorias LTDA
          </span>
        </Link>

        {/* 🔹 Melhorando a estrutura do menu de navegação com map() */}
        <nav className="hidden md:flex items-center justify-between  gap-9 ">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              scrollToSection("#home");
            }}
            className="text-base font-semibold font-oxanium text-gray-50 transition-colors hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="#quemSomos"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              scrollToSection("#quemSomos");
            }}
            className="text-base font-semibold font-oxanium text-gray-50 transition-colors hover:text-gray-300"
          >
            Quem Somos
          </Link>
          <Link
            href="#services"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              scrollToSection("#services");
            }}
            className="text-base font-semibold font-oxanium text-gray-50 transition-colors hover:text-gray-300"
          >
            Serviços
          </Link>
          <Link
            href="#clientes"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              scrollToSection("#clientes");
            }}
            className="text-base font-semibold font-oxanium text-gray-50 transition-colors hover:text-gray-300"
          >
            Clientes
          </Link>
        </nav>

        <Button asChild variant="outline" className="hidden md:inline-flex">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              scrollToSection("#contact");
            }}
            className="font-oxanium font-semibold text-gray-950"
          >
            Fale Conosco
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-50  z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 🔹 Melhorando estrutura do menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-950 h-56 z-40 md:hidden border-b border-opacity-0">
          <div className="flex flex-col items-start justify-start h-40 space-y-2 p-10 text-white ">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-xl font-semibold font-oxanium"
            >
              Home
            </Link>
            <Link
              href="#quemSomos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#quemSomos");
              }}
              className="text-xl font-semibold font-oxanium"
            >
              Quem Somos
            </Link>
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#services");
              }}
              className="text-xl font-semibold font-oxanium"
            >
              Serviços
            </Link>
            <Link
              href="#clientes"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#clientes");
              }}
              className="text-xl font-semibold font-oxanium"
            >
              Clientes
            </Link>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="font-oxanium text-xl font-semibold text-gray-50"
            >
              Fale Conosco
            </Link>
          
          </div>
        </div>
      )}
    </header>
  );
}
