import { Shield, Heart, Zap, Award, MessageSquare } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Utilité",
    description: "Nous libérons votre temps pour vous concentrer sur votre cœur de métier : vos clients et vos patients.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Rigueur et fiabilité dans chaque démarche. Nous veillons à la conformité et à la qualité de vos dossiers.",
  },
  {
    icon: Heart,
    title: "Liberté",
    description: "Aucun engagement, aucune contrainte. Vous gardez le contrôle et décidez quand vous avez besoin de nous.",
  },
  {
    icon: Award,
    title: "Reconnaissance",
    description: "Nous valorisons votre expertise métier et vous accompagnons avec respect et professionnalisme.",
  },
  {
    icon: MessageSquare,
    title: "Sincérité",
    description: "Transparence totale sur nos services, nos tarifs et nos délais. Une relation de confiance avant tout.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4 text-primary">
            Nos valeurs au service de votre quotidien
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cinq principes qui guident notre accompagnement au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-accent/20 rounded-lg p-8 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/30">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
