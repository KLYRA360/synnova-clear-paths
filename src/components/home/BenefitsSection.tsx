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
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-background">
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
              className="bg-background border border-accent/30 rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4 border border-accent/40">
                <benefit.icon className="h-5 w-5 text-accent" />
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
