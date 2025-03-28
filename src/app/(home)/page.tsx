import Clientes from "../_components/clientes";
import ContactForm from "../_components/contact";
import Hero from "../_components/hero";
import QuemSomos from "../_components/quemSomos";
import Services from "../_components/services";

export default function Home() {
  return (
    <div className="h-dvh">
      <div className="w-full ">
        <Hero />
        <QuemSomos />
        <Services />
        <Clientes />
        <ContactForm/>
      </div>
    </div>
  );
}
