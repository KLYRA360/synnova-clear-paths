import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Heart, Clock, TrendingUp, Handshake, Check, X } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Expertise de 18 ans",
    description: "Une connaissance approfondie du métier d'opticien et des enjeux du Tiers Payant, acquise sur le terrain.",
  },
  {
    icon: Heart,
    title: "Service humain et personnalisé",
    description: "Un interlocuteur unique qui connaît votre dossier et répond à vos questions avec réactivité.",
  },
  {
    icon: Clock,
    title: "Gain de temps considérable",
    description: "Libérez jusqu'à 10 heures par semaine pour vous concentrer sur vos patients et développer votre activité.",
  },
  {
    icon: TrendingUp,
    title: "Trésorerie optimisée",
    description: "Accélérez vos remboursements et réduisez vos impayés grâce à un suivi rigoureux et systématique.",
  },
  {
    icon: Handshake,
    title: "Relation de confiance & proximité",
    description: "Transparence, rigueur et disponibilité pour une collaboration sereine sur le long terme.",
  },
];

const comparisonData = [
  {
    feature: "Interlocuteur dédié",
    platform: false,
    synnova: true,
  },
  {
    feature: "Expertise métier terrain",
    platform: false,
    synnova: true,
  },
  {
    feature: "Réactivité < 24h",
    platform: false,
    synnova: true,
  },
  {
    feature: "Service personnalisé",
    platform: false,
    synnova: true,
  },
  {
    feature: "Accompagnement humain",
    platform: false,
    synnova: true,
  },
  {
    feature: "Tarifs transparents",
    platform: false,
    synnova: true,
  },
  {
    feature: "Sans engagement",
    platform: false,
    synnova: true,
  },
];

export default function WhySynnova() {
  return (
    <>
      <Helmet>
        <title>Pourquoi Synnova – Expertise humaine & résultats concrets</title>
        <meta
          name="description"
          content="Plus de sérénité, moins d'administratif. Découvrez ce qui nous différencie des plateformes impersonnelles."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-balance mb-6">Pourquoi choisir Synnova ?</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              L'alliance de l'expertise métier et de l'accompagnement humain
            </p>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Plateforme impersonnelle vs Synnova
            </h2>

            <div className="bg-background border rounded-2xl overflow-hidden shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-6 font-semibold">Critère</th>
                    <th className="text-center p-6 font-semibold">Plateforme</th>
                    <th className="text-center p-6 font-semibold text-primary">Synnova</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                    >
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.platform ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.synnova ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials / Proof Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Preuves & réassurance
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">18+</div>
                <p className="text-muted-foreground">années d'expérience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">satisfaction client</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">&lt;24h</div>
                <p className="text-muted-foreground">temps de réponse moyen</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <p className="text-muted-foreground italic mb-4">
                  "Un service professionnel qui comprend vraiment nos contraintes métier. 
                  Je recommande sans hésitation."
                </p>
                <p className="font-semibold">— Marie D., Opticienne</p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <p className="text-muted-foreground italic mb-4">
                  "Enfin une solution humaine pour le Tiers Payant. Réactive, efficace, transparente."
                </p>
                <p className="font-semibold">— Thomas L., Audioprothésiste</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Prêt à faire la différence ?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Découvrez nos services et demandez votre devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">Voir nos services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://00532df8.sibforms.com/serve/MUIFADygUkcUeWbf0a2FR8QDyYaCrdnZewFGLONwncGJlKpVXmlrhQhTj_6gLOlooCNqYpyiPmNGJ9D7XRffREmIr131kW_ECP4xBH1n8b08nmcCFd2keAWof1FZh75NWXW8Pu4PhFmSwNOgpiJRberQSkEDJswpiAFQHGtSK8XBE0oxE_igWIPKK0VMX18Rqgf1p5BU7GTo0Gic" target="_blank" rel="noopener noreferrer">Demander un devis</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
