import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacter Synnova – Devis & informations</title>
        <meta
          name="description"
          content="Parlez-nous de votre situation Tiers Payant. Réponse sous 24h ouvrées."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-balance mb-6">Contact</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une question ? Un projet ? Contactez-nous, nous vous répondons sous 24h ouvrées.
            </p>
          </div>
        </section>

        {/* Contact Methods & Form */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-8">
                  Parlons de votre projet
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:+33000000000"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 (0) 0 00 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/33000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Discuter sur WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@synnova.fr"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@synnova.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                      <p className="text-muted-foreground">
                        France entière
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Disponibilité</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 9h - 18h<br />
                        Réponse sous 24h ouvrées
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                  <p className="font-semibold text-primary mb-2">
                    Réponse garantie sous 24h ouvrées
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nous nous engageons à vous répondre rapidement pour étudier votre situation 
                    et vous proposer une solution adaptée.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card border rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Demander un devis
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.fr"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+33 0 00 00 00 00"
                      />
                    </div>

                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium mb-2">
                        Profession *
                      </label>
                      <Input
                        id="profession"
                        type="text"
                        placeholder="Ex: Opticien, Audioprothésiste..."
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Votre message *
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Décrivez votre situation et vos besoins..."
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
