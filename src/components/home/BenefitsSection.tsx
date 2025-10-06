import { Clock, TrendingUp, CheckCircle, BarChart3, Smile } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    description: "Libérez jusqu'à 10 heures par semaine en déléguant vos tâches administratives Tiers Payant.",
  },
  {
    icon: TrendingUp,
    title: "Améliorez votre trésorerie",
    description: "Accélérez vos remboursements et réduisez vos impayés grâce à un suivi rigoureux et systématique.",
  },
  {
    icon: CheckCircle,
    title: "Réduisez les erreurs",
    description: "Profitez de notre expertise pour minimiser les rejets et optimiser vos dossiers de facturation.",
  },
  {
    icon: BarChart3,
    title: "Pilotez votre activité",
    description: "Bénéficiez d'un suivi clair et de rapports réguliers sur l'état de votre Tiers Payant.",
  },
  {
    icon: Smile,
    title: "Retrouvez votre sérénité",
    description: "Concentrez-vous sur vos patients en sachant que vos démarches administratives sont entre de bonnes mains.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4 text-primary">
            Les bénéfices concrets pour votre activité
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Déléguez. Respirez. Performez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background/80 backdrop-blur-sm border border-secondary/20 rounded-lg p-6 hover:shadow-md hover:border-secondary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 border border-secondary/30">
                <benefit.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
