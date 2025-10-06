import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-balance mb-6 text-primary-foreground">
          Audit gratuit de votre situation Tiers Payant
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          Découvrez comment optimiser votre gestion administrative et améliorer votre trésorerie
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
