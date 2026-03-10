import { Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5531987132002?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-heading text-2xl font-bold tracking-wider text-primary-foreground">
          LEANDRO RIBEIRO
          <span className="block text-xs tracking-[0.3em] text-muted-foreground font-body font-light">
            ADVOCACIA
          </span>
        </span>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#areas" className="text-muted-foreground hover:text-foreground transition-colors">Áreas de Atuação</a>
          <a href="#diferenciais" className="text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-sm font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
