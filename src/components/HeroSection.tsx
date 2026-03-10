import { Phone } from "lucide-react";
import heroPhoto from "@/assets/photo-color.png";
import logo from "@/assets/logo.jpeg";

const WHATSAPP_URL = "https://wa.me/5531987132002?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(213 70% 45%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        {/* Logo + Name */}
        <div className="flex flex-col items-center mb-12">
          <img
            src={logo}
            alt="Logo Leandro Ribeiro Advocacia"
            className="w-40 h-auto object-contain" />
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-16 h-0.5 bg-accent" />
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Soluções jurídicas seguras nas áreas criminal, bancária e cível
            </h1>

            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
              Atuação jurídica técnica e personalizada para pessoas físicas e empresas, com foco em segurança, estratégia e resultado.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-sm font-body font-semibold text-base hover:opacity-90 transition-opacity">
              
              <Phone className="w-5 h-5" />
              Agende seu atendimento — (31) 8713-2002
            </a>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-sm blur-2xl" />
            



            
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;