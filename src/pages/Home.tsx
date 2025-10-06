import { Hero } from "@/components/home/Hero";
import { ValuesSection } from "@/components/home/ValuesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { NewsletterSection } from "@/components/shared/NewsletterSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gestion du Tiers Payant pour opticiens & audioprothésistes | Synnova</title>
        <meta
          name="description"
          content="Déléguez le Tiers Payant, accélérez votre trésorerie, gagnez du temps. Services humains, rigoureux et sans engagement. Demandez un devis."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Synnova",
            description: "Service de gestion du Tiers Payant pour opticiens et audioprothésistes",
            url: "https://synnova.fr",
            logo: "https://synnova.fr/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33-0-00-00-00-00",
              contactType: "Customer Service",
              areaServed: "FR",
              availableLanguage: "French",
            },
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <ValuesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <NewsletterSection />
      </main>
    </>
  );
}
