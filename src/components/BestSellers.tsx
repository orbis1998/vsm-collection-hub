import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BestSellers = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="vsm-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-[0.3em] mb-3 text-sm">
            Best Sellers
          </p>
          <h2 className="vsm-heading text-4xl md:text-5xl text-foreground">
            BEST LAYERS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bestSellers.map((product, index) => (
            <div key={product.id} className={`animate-slide-up stagger-${index + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/boutique">
            <Button variant="outline" size="lg">
              Voir Toute la Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
