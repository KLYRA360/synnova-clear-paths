import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Send, Cog, CheckCircle2, Building2, TrendingUp, FileCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Assistance administrative à l'ouverture de centre",
    description: "Vous ouvrez un centre d'optique ou d'audioprothèse ? Je vous accompagne dans toutes vos démarches administratives initiales.",
    features: [
      "Constitution des dossiers organismes",
      "Mise en place des conventions",
      "Paramétrage des logiciels métier",
      "Formation aux procédures Tiers Payant",
    ],
  },
  {
    icon: TrendingUp,
    title: "Recouvrement des indus & optimisation de trésorerie",
    description: "Récupérez vos impayés et accélérez vos remboursements pour une trésorerie optimale.",
    features: [
      "Audit complet de vos impayés",
      "Relances systématiques organismes",
      "Suivi des rejets et corrections",
      "Rapprochements bancaires détaillés",
    ],
  },
  {
    icon: FileCheck,
    title: "Pilotage courant du Tiers Payant",
    description: "Déléguez la gestion quotidienne de votre Tiers Payant pour vous concentrer sur votre activité.",
    features: [
      "Traitement des facturations",
      "Rapprochements bancaires réguliers",
      "Suivi et gestion des indus récurrents",
      "Reporting mensuel de votre situation",
    ],
  },
];

const steps = [
  {
    icon: Send,
    title: "Vous transmettez",
    description: "Envoyez-nous vos dossiers de manière sécurisée",
  },
  {
    icon: Cog,
    title: "Nous gérons",
    description: "Traitement rigoureux de toutes vos démarches",
  },
  {
    icon: CheckCircle2,
    title: "Vous gagnez du temps & sérénité",
    description: "Concentrez-vous sur votre cœur de métier",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services Synnova – Ouverture, Recouvrement, Pilotage Tiers Payant</title>
        <meta
          name="description"
          content="De l'ouverture de votre centre au pilotage quotidien du Tiers Payant. Gagnez du temps et améliorez votre trésorerie."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Gestion du Tiers Payant",
            provider: {
              "@type": "Organization",
              name: "Synnova",
            },
            serviceType: "Gestion administrative Tiers Payant",
            areaServed: "FR",
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-balance mb-6">Nos services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une gestion claire, humaine et sans engagement
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Comment ça marche ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extensibility Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-secondary/10 border rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Extensible à d'autres professions de santé
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bien que spécialisés en optique et audioprothèse, nos services peuvent s'adapter 
                à d'autres professions de santé concernées par le Tiers Payant. 
                N'hésitez pas à nous consulter pour étudier votre situation spécifique.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Prêt à déléguer votre Tiers Payant ?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Demandez votre devis personnalisé et sans engagement
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://00532df8.sibforms.com/serve/MUIFADygUkcUeWbf0a2FR8QDyYaCrdnZewFGLONwncGJlKpVXmlrhQhTj_6gLOlooCNqYpyiPmNGJ9D7XRffREmIr131kW_ECP4xBH1n8b08nmcCFd2keAWof1FZh75NWXW8Pu4PhFmSwNOgpiJRberQSkEDJswpiAFQHGtSK8XBE0oxE_igWIPKK0VMX18Rqgf1p5BU7GTo0Gic" target="_blank" rel="noopener noreferrer">Demander un devis</a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
