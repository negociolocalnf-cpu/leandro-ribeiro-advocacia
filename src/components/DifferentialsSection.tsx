import { UserCheck, Search, Gavel, ShieldCheck } from "lucide-react";

const items = [
  { icon: UserCheck, text: "Atendimento personalizado" },
  { icon: Search, text: "Análise técnica e estratégica do caso" },
  { icon: Gavel, text: "Atuação judicial e extrajudicial" },
  { icon: ShieldCheck, text: "Compromisso com clareza, agilidade e segurança jurídica" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="w-12 h-0.5 bg-accent mx-auto" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Diferenciais
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="font-body text-sm text-foreground font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
