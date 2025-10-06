import { Send, Cog, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Vous transmettez",
    description: "Envoyez-nous vos dossiers et documents Tiers Payant de manière sécurisée.",
  },
  {
    icon: Cog,
    number: "02",
    title: "Nous gérons",
    description: "Nous traitons, vérifions et suivons vos démarches administratives avec rigueur.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Vous gagnez du temps & sérénité",
    description: "Concentrez-vous sur votre activité pendant que nous optimisons votre trésorerie.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4 text-primary">3 étapes simples</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus clair et efficace pour vous accompagner au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 shadow-md border-2 border-accent/30">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-4 text-7xl font-bold text-accent/10 -z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
