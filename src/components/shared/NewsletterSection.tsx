import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("subscribe", {
        body: { email, consent: true },
      });

      if (error) {
        throw error;
      }

      // Check if the response contains an error from the function
      if (data?.error) {
        toast({
          title: "Erreur",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      // Success - redirect to thank you page
      navigate("/merci");
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Inscription..." : "S'abonner"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Nous respectons votre vie privée. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
}
