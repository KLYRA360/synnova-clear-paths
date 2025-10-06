import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-secondary/10 border-y border-accent/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-balance mb-6 text-primary">
          Audit gratuit de votre situation Tiers Payant
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Découvrez comment optimiser votre gestion administrative et améliorer votre trésorerie
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
