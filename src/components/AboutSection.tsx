import photoBw from "@/assets/photo-bw.jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-accent/10 rounded-sm" />
            <img
              src={photoBw}
              alt="Dr. Leandro Ribeiro"
              className="relative w-full max-w-sm mx-auto rounded-sm shadow-xl grayscale"
            />
          </div>

          <div className="space-y-2">
            <div className="w-12 h-0.5 bg-accent" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Sobre o Advogado
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Atuo nas áreas de Direito Criminal, Direito Bancário e Direito Cível.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Meu trabalho é pautado na análise estratégica de cada caso, no atendimento próximo ao cliente e na busca por soluções jurídicas seguras e eficazes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
