import { Button } from "@/components/ui/button";
import { NewsletterSection } from "@/components/shared/NewsletterSection";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Les nouvelles réglementations Tiers Payant en 2025",
    excerpt: "Découvrez les changements importants qui impacteront votre gestion du Tiers Payant cette année.",
    date: "15 janvier 2025",
    readTime: "5 min",
    category: "Réglementation",
    slug: "reglementations-tiers-payant-2025",
  },
  {
    title: "Comment optimiser sa trésorerie en période de forte activité",
    excerpt: "Nos conseils pour maintenir une trésorerie saine même pendant les pics d'activité.",
    date: "10 janvier 2025",
    readTime: "4 min",
    category: "Gestion",
    slug: null,
  },
  {
    title: "5 erreurs courantes dans la facturation Tiers Payant",
    excerpt: "Évitez ces pièges qui peuvent ralentir vos remboursements et créer des impayés.",
    date: "5 janvier 2025",
    readTime: "6 min",
    category: "Conseils",
    slug: null,
  },
];

export default function News() {
  return (
    <>
      <Helmet>
        <title>Actualités Tiers Payant & Conseils | Synnova</title>
        <meta
          name="description"
          content="Astuces, retours d'expérience et veille Tiers Payant pour opticiens, audioprothésistes et professions de santé."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-balance mb-6">Actualités & conseils</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Astuces, retours d'expérience et veille sur la gestion du Tiers Payant
            </p>
            <Button asChild size="lg">
              <a href="#newsletter">S'abonner à la newsletter</a>
            </Button>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const CardContent = (
                  <>
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                    </div>
                  </>
                );

                return article.slug ? (
                  <Link
                    key={index}
                    to={`/actualites/${article.slug}`}
                    className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer block"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <article
                    key={index}
                    className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {CardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold mb-4">
                Téléchargez notre checklist Tiers Payant
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Un guide pratique pour optimiser votre gestion administrative au quotidien
              </p>
              <Button size="lg">
                Télécharger gratuitement (PDF)
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <div id="newsletter">
          <NewsletterSection />
        </div>
      </main>
    </>
  );
}
