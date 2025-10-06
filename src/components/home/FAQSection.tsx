import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne votre service ?",
    answer: "Vous nous transmettez vos dossiers Tiers Payant, nous les traitons, vérifions et suivons les remboursements. Vous recevez des rapports réguliers et gagnez un temps précieux.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer: "Non, aucun engagement. Vous pouvez faire appel à nos services quand vous en avez besoin, sans contrainte de durée minimale.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs sont transparents et adaptés à votre volume d'activité. Contactez-nous pour obtenir un devis personnalisé et sans engagement.",
  },
  {
    question: "Travaillez-vous uniquement avec les opticiens et audioprothésistes ?",
    answer: "Nous sommes spécialisés en optique et audioprothèse, mais notre service est extensible à d'autres professions de santé. N'hésitez pas à nous consulter.",
  },
  {
    question: "Comment puis-je vous transmettre mes documents ?",
    answer: "Nous utilisons des outils sécurisés pour le transfert de documents. Après notre premier échange, nous vous expliquerons la procédure simple et conforme.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4">Questions fréquentes</h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
