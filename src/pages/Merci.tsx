import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Merci() {
  return (
    <>
      <Helmet>
        <title>Merci pour votre inscription ! - Synnova</title>
        <meta name="description" content="Confirmation d'inscription à la newsletter Synnova. Recevez nos conseils sur la gestion du Tiers Payant." />
      </Helmet>

      <main className="min-h-screen py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border shadow-sm" style={{ borderRadius: '16px' }}>
            <CardContent className="pt-12 pb-12 px-6 sm:px-12">
              <div className="text-center">
                <CheckCircle 
                  className="h-16 w-16 mx-auto mb-6" 
                  style={{ color: 'hsl(var(--accent))' }}
                  aria-hidden="true"
                />
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Merci pour votre inscription !
                </h1>
                
                <p className="text-lg md:text-xl text-foreground mb-4">
                  Vous êtes maintenant inscrit à la newsletter Synnova.
                </p>
                
                <p className="text-base text-muted-foreground mb-6">
                  Nous vous avons envoyé un email de confirmation. Veuillez vérifier votre boîte de réception et cliquer sur le lien pour finaliser votre inscription.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Conseil :</strong> Pour ne manquer aucune de nos actualités, pensez à ajouter{" "}
                      <a 
                        href="mailto:l.lanzetto@synnova.fr" 
                        className="font-medium underline hover:no-underline"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        l.lanzetto@synnova.fr
                      </a>
                      {" "}à votre carnet d'adresses.
                    </p>
                  </div>
                </div>
                
                <nav className="flex flex-col sm:flex-row gap-4 justify-center mb-6" aria-label="Navigation principale">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                    style={{ borderRadius: '8px' }}
                  >
                    <Link to="/" aria-label="Retourner à la page d'accueil">
                      Retour à l'accueil
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-2 font-medium"
                    style={{ 
                      borderRadius: '8px',
                      borderColor: 'hsl(var(--accent))',
                      color: 'hsl(var(--accent))'
                    }}
                  >
                    <Link to="/services" aria-label="Découvrir nos services de gestion du Tiers Payant">
                      Découvrir nos services
                    </Link>
                  </Button>
                </nav>
                
                <p className="text-sm text-muted-foreground">
                  Vous avez des questions ?{" "}
                  <Link 
                    to="/contact" 
                    className="underline hover:no-underline font-medium"
                    style={{ color: 'hsl(var(--accent))' }}
                    aria-label="Accéder à la page de contact"
                  >
                    Nous contacter
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
