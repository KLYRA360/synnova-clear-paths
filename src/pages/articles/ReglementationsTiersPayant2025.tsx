import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSection } from "@/components/shared/NewsletterSection";

export default function ReglementationsTiersPayant2025() {
  return (
    <>
      <Helmet>
        <title>Les nouvelles réglementations Tiers Payant en 2025 | Synnova</title>
        <meta
          name="description"
          content="Découvrez les changements importants qui impacteront votre gestion du Tiers Payant en 2025 : audioprothèse, optique, flux sécurisé SESAM-Vitale."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              to="/actualites" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux actualités
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Réglementation
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                5 min de lecture
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                15 janvier 2025
              </span>
            </div>
            
            <h1 className="text-balance mb-6">
              Les nouvelles réglementations Tiers Payant en 2025
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez les changements importants qui impacteront votre gestion du Tiers Payant cette année.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Section A - Audioprothèse */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                  A. Audioprothèse
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-card border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Obligation du flux sécurisé pour le tiers-payant
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un avenant à la convention nationale des audioprothésistes est entré en vigueur le 1er janvier 2025 : 
                      le tiers-payant pour la part AMO ne pourra être appliqué que si la facturation utilise le{" "}
                      <strong className="text-foreground">flux sécurisé SESAM‑Vitale</strong> (également appelé « B2S ») 
                      avec présentation de la carte Vitale. Cela signifie que les facturations dites « dégradées » 
                      (sans carte Vitale, sans flux sécurisé) ne donneront pas droit automatiquement au tiers-payant.
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Lutte contre la fraude
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Le dispositif met l'accent sur le{" "}
                      <strong className="text-foreground">renforcement des contrôles</strong>, 
                      avec une suspension possible du tiers-payant dès suspicion de fraude.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      🔮 Nouvelle loi de financement de la Sécurité Sociale en prévision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La loi de financement de la Sécurité sociale prévoit la{" "}
                      <strong className="text-foreground">dissociation du produit et de la prestation</strong> d'ici fin 2025. 
                      Cette mesure devrait modifier les modalités de tarification et permettre à la Sécurité Sociale 
                      de réguler plus précisément les coûts et marges dans le secteur des dispositifs médicaux remboursés.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section B - Optique */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                  B. Optique
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-card border rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="px-2 py-1 rounded bg-accent/20 text-accent text-xs font-medium whitespace-nowrap">
                        Renouvellement
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        Supplément tarifaire pour équipement classe A
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Un arrêté publié en janvier 2025 prévoit qu'un{" "}
                      <strong className="text-foreground">supplément tarifaire de 42 €</strong> pourra être facturé 
                      sur un équipement complet de classe A (monture + deux verres), à certaines conditions 
                      (le professionnel ayant déjà délivré plus de 65 % d'équipements complets de classe A 
                      sur une période de référence).
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-medium whitespace-nowrap">
                        Nouvelle version
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        Adaptation de la Primo ordonnance
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Le texte partiellement annulé en mai dernier pourrait bientôt réapparaître sous une nouvelle version.{" "}
                      <strong className="text-foreground">À suivre de très près.</strong>
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="px-2 py-1 rounded bg-destructive/20 text-destructive text-xs font-medium whitespace-nowrap">
                        Débat en cours
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        Remboursement des lunettes tous les 3 ans
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Pour le moment, pas de nouvelle législation validée à ce propos mais le sujet suscite 
                      toujours de vives réactions dans la profession.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-2xl p-8 text-center mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Besoin d'accompagnement ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Synnova vous accompagne dans la gestion de votre Tiers Payant face à ces nouvelles réglementations.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </section>
            </div>
          </div>
        </article>

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
    </>
  );
}
