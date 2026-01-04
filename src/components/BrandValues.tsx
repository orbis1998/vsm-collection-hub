import { Globe, Award, Truck, Shield } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: "Made in DRC",
    description: "Fierté congolaise, portée dans le monde entier.",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Matériaux sélectionnés pour une durabilité exceptionnelle.",
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Expédition dans tout Kinshasa et partout en RDC.",
  },
  {
    icon: Shield,
    title: "Satisfaction Garantie",
    description: "Votre satisfaction est notre priorité absolue.",
  },
];

const BrandValues = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="vsm-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-[0.3em] mb-3 text-sm">
            Nos Valeurs
          </p>
          <h2 className="vsm-heading text-4xl md:text-5xl text-foreground">
            POURQUOI VSM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-6 animate-slide-up stagger-${index + 1}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wider text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
