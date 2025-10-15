import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-synnova.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-balance mb-6">
              Synnova, votre solution de gestion du Tiers Payant
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Déléguez vos démarches administratives pour vous concentrer sur vos clients et vos patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="https://00532df8.sibforms.com/serve/MUIFADygUkcUeWbf0a2FR8QDyYaCrdnZewFGLONwncGJlKpVXmlrhQhTj_6gLOlooCNqYpyiPmNGJ9D7XRffREmIr131kW_ECP4xBH1n8b08nmcCFd2keAWof1FZh75NWXW8Pu4PhFmSwNOgpiJRberQSkEDJswpiAFQHGtSK8XBE0oxE_igWIPKK0VMX18Rqgf1p5BU7GTo0Gic" target="_blank" rel="noopener noreferrer">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/33000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Parler sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl -z-10 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Professionnels de santé travaillant avec Synnova"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
