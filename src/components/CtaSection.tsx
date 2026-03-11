const WHATSAPP_URL = "https://wa.me/5531987132002?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const CtaSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
        <div className="w-12 h-0.5 bg-accent mx-auto" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          Agende seu atendimento
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
          Tenha uma análise jurídica segura e objetiva.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-sm font-body font-semibold text-base not-italic hover:opacity-90 transition-opacity"
          style={{ fontStyle: 'normal' }}
        >
          Fale pelo WhatsApp <span style={{ fontFamily: 'Raleway, sans-serif' }}>(31) 98713-2002</span>
        </a>

        <p className="font-heading text-xl italic text-muted-foreground pt-4">
          "Cada caso exige técnica, atenção e condução jurídica responsável."
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
