import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';

const categories = ['Tous', 'Hoodies', 'T-Shirts', 'Pantalons', 'Accessoires'];

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="vsm-container text-center">
            <p className="text-primary font-medium uppercase tracking-[0.3em] mb-3 text-sm">
              Collection 2024
            </p>
            <h1 className="vsm-heading text-4xl md:text-6xl text-foreground mb-4">
              LA BOUTIQUE
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Découvrez notre collection complète de streetwear premium. Made in DRC, worn worldwide.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background/80 backdrop-blur-lg z-40">
          <div className="vsm-container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="vsm-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className={`animate-slide-up stagger-${(index % 4) + 1}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Aucun produit dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Boutique;
