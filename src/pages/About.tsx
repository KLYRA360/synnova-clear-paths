import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Heart, Shield, Users } from "lucide-react";
import lucieProfile from "@/assets/lucie-profile.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Synnova – À propos de Lucie Lanzetto</title>
        <meta
          name="description"
          content="18 ans d'expérience en optique. Un accompagnement humain, rigoureux et transparent pour votre Tiers Payant."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-balance mb-8 text-center">À propos</h1>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Une expertise métier au service de votre sérénité administrative
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo de Lucie */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl -z-10 blur-2xl"></div>
                  <img
                    src={lucieProfile}
                    alt="Lucie Lanzetto, fondatrice de Synnova"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Texte bio */}
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Je m'appelle <strong className="text-foreground">Lucie Lanzetto</strong>, et j'ai passé 18 ans dans le monde de l'optique. 
                    J'ai été opticienne, puis gérante de plusieurs magasins, et j'ai vécu au quotidien la complexité et la charge 
                    que représente la gestion du Tiers Payant.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                    C'est de cette expérience terrain qu'est née <strong className="text-foreground">Synnova</strong> : 
                    un service pensé pour alléger cette charge administrative qui pèse sur les opticiens et audioprothésistes. 
                    Je connais vos contraintes, vos impératifs de trésorerie, et le temps précieux que vous perdez 
                    à gérer des démarches administratives complexes.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                    Mon objectif est simple : <strong className="text-foreground">vous permettre de vous concentrer 
                    sur votre cœur de métier</strong> – vos clients et vos patients – pendant que je m'occupe 
                    de vos démarches Tiers Payant avec rigueur et transparence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ma promesse</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong className="text-foreground">Réactivité :</strong> Une réponse sous 24h ouvrées à toutes vos demandes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong className="text-foreground">Proximité :</strong> Un interlocuteur unique qui connaît votre dossier</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span><strong className="text-foreground">Transparence :</strong> Des tarifs clairs, sans engagement et sans surprise</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Mes valeurs au quotidien
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sincérité</h3>
                <p className="text-muted-foreground">
                  Une relation basée sur la confiance et la transparence totale
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rigueur</h3>
                <p className="text-muted-foreground">
                  Un traitement professionnel et méticuleux de chaque dossier
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Écoute</h3>
                <p className="text-muted-foreground">
                  Un accompagnement personnalisé adapté à vos besoins
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Parlons de votre situation
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Chaque situation est unique. Discutons de vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://00532df8.sibforms.com/serve/MUIFADygUkcUeWbf0a2FR8QDyYaCrdnZewFGLONwncGJlKpVXmlrhQhTj_6gLOlooCNqYpyiPmNGJ9D7XRffREmIr131kW_ECP4xBH1n8b08nmcCFd2keAWof1FZh75NWXW8Pu4PhFmSwNOgpiJRberQSkEDJswpiAFQHGtSK8XBE0oxE_igWIPKK0VMX18Rqgf1p5BU7GTo0Gic" target="_blank" rel="noopener noreferrer">Demander un devis</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://wa.me/33000000000" target="_blank" rel="noopener noreferrer">
                  Parler sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
