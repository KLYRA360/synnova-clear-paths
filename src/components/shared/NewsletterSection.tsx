import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-16 bg-muted/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">
            Restez informé
          </h2>
          <p className="text-muted-foreground">
            Recevez nos conseils, astuces et actualités sur la gestion du Tiers Payant
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1"
            required
          />
          <Button type="submit">
            S'abonner
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Nous respectons votre vie privée. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
}
