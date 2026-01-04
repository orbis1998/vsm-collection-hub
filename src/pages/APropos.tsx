import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Award, Heart, Zap } from 'lucide-react';

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-card border-b border-border">
          <div className="vsm-container text-center">
            <p className="text-primary font-medium uppercase tracking-[0.3em] mb-3 text-sm">
              Notre Histoire
            </p>
            <h1 className="vsm-heading text-4xl md:text-6xl text-foreground mb-6">
              À PROPOS DE VSM
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Made in DRC, worn worldwide. VSM Collection est née d'une vision : 
              créer du streetwear premium qui célèbre la culture congolaise tout en 
              embrassant l'esprit global de la mode urbaine.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="vsm-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="vsm-heading text-3xl md:text-4xl text-foreground mb-6">
                  NOTRE VISION
                </h2>
                <p className="text-muted-foreground mb-4">
                  VSM Collection représente plus qu'une marque de vêtements. C'est un mouvement 
                  qui unit style, qualité et fierté africaine. Chaque pièce est conçue avec 
                  attention aux détails et un engagement envers l'excellence.
                </p>
                <p className="text-muted-foreground mb-4">
                  Depuis notre atelier à Kinshasa, nous créons des pièces qui traversent les 
                  frontières et inspirent une nouvelle génération de créateurs africains.
                </p>
                <p className="text-muted-foreground">
                  Notre mission : prouver que le streetwear de classe mondiale peut naître 
                  en République Démocratique du Congo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="vsm-card p-6 text-center">
                  <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-2xl text-foreground mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Pays livrés</p>
                </div>
                <div className="vsm-card p-6 text-center">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-2xl text-foreground mb-1">100%</h3>
                  <p className="text-sm text-muted-foreground">Premium</p>
                </div>
                <div className="vsm-card p-6 text-center">
                  <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-2xl text-foreground mb-1">5000+</h3>
                  <p className="text-sm text-muted-foreground">Clients satisfaits</p>
                </div>
                <div className="vsm-card p-6 text-center">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-2xl text-foreground mb-1">24h</h3>
                  <p className="text-sm text-muted-foreground">Livraison Kinshasa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-card">
          <div className="vsm-container">
            <div className="text-center mb-12">
              <h2 className="vsm-heading text-3xl md:text-4xl text-foreground">
                NOS ENGAGEMENTS
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-display text-xl uppercase tracking-wider text-primary mb-3">
                  Qualité
                </h3>
                <p className="text-muted-foreground">
                  Matériaux premium sélectionnés avec soin. Chaque pièce est conçue pour durer.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl uppercase tracking-wider text-primary mb-3">
                  Authenticité
                </h3>
                <p className="text-muted-foreground">
                  Designs originaux qui célèbrent notre héritage tout en regardant vers l'avenir.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl uppercase tracking-wider text-primary mb-3">
                  Communauté
                </h3>
                <p className="text-muted-foreground">
                  Plus qu'une marque, une famille de créateurs et de passionnés de mode.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
