import { Phone } from "lucide-react";
import logo from "@/assets/logo-final.png";

const WHATSAPP_URL = "https://wa.me/5531987132002?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-32 md:pt-24 md:items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(213 70% 45%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 pt-24 pb-16 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <img
              src={logo}
              alt="Logo Leandro Ribeiro Advocacia"
              className="relative w-72 md:w-80 lg:w-96 h-auto object-contain mix-blend-lighten"
            />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground max-w-4xl">
            Soluções jurídicas seguras nas áreas criminal, bancária e cível
          </h1>

          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
            Atuação jurídica técnica e personalizada para pessoas físicas e empresas, com foco em segurança, estratégia e resultado.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 bg-accent text-accent-foreground px-8 py-4 rounded-sm font-body font-semibold text-base hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            <span className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Agende seu atendimento
            </span>
            <span className="text-sm font-semibold text-accent-foreground">(31) 98713-2002</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
