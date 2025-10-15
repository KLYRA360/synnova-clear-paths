import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Merci() {
  return (
    <>
      <Helmet>
        <title>Merci de votre inscription - Synnova</title>
        <meta name="description" content="Merci de vous être inscrit à notre newsletter" />
      </Helmet>

      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-20 w-20 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">
            Merci de votre inscription !
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Nous vous avons envoyé un email de confirmation.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Veuillez vérifier votre boîte de réception et cliquer sur le lien de confirmation pour finaliser votre inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/actualites">
                Lire nos actualités
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
