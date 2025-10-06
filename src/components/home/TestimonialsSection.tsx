import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Depuis que je travaille avec Synnova, je gagne un temps précieux. Je peux enfin me concentrer sur mes patients sans me soucier des démarches administratives.",
    author: "Marie D.",
    role: "Opticienne, Lyon",
  },
  {
    content: "Un service professionnel et réactif. Lucie comprend parfaitement les enjeux de notre métier et apporte des solutions concrètes.",
    author: "Thomas L.",
    role: "Audioprothésiste, Paris",
  },
  {
    content: "La transparence et la rigueur de Synnova m'ont convaincu. Mes remboursements sont plus rapides et je n'ai plus d'impayés qui traînent.",
    author: "Sophie B.",
    role: "Opticienne, Marseille",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border rounded-xl p-8 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-muted/20" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
