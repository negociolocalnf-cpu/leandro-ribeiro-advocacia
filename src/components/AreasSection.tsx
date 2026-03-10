import { Shield, Landmark, Scale } from "lucide-react";

const areas = [
  {
    icon: Shield,
    title: "Direito Penal",
    description: "Atuação na defesa dos direitos do cliente em investigações, processos criminais e medidas urgentes, com estratégia, seriedade e acompanhamento técnico em todas as fases — flagrante, liberdade provisória, habeas corpus, defesa prévia, progressão de regime, recursos e etc."
  },
  {
    icon: Landmark,
    title: "Direito Bancário",
    description: "Análise e atuação em casos envolvendo cobranças indevidas, revisão contratual, fraudes digitais, PIX indevido, negativação irregular e demais conflitos com instituições financeiras."
  },
  {
    icon: Scale,
    title: "Direito Cível",
    description: "Atendimento em demandas patrimoniais, contratuais, indenizatórias e obrigações em geral, com foco na proteção de direitos e na solução eficiente de conflitos."
  }
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="w-12 h-0.5 bg-accent mx-auto" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Áreas de Atuação
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-card border border-border rounded-sm p-8 hover:border-accent/40 transition-colors group"
            >
              <area.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                {area.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
