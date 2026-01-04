import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/data';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Panier = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24">
          <div className="vsm-container py-16 md:py-24 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="vsm-heading text-3xl md:text-4xl text-foreground mb-4">
              VOTRE PANIER EST VIDE
            </h1>
            <p className="text-muted-foreground mb-8">
              Découvrez notre collection et ajoutez vos articles préférés.
            </p>
            <Link to="/boutique">
              <Button variant="hero" size="lg">
                Découvrir la Boutique
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="vsm-container">
            <h1 className="vsm-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
              VOTRE PANIER
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="vsm-card p-4 flex gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-display text-lg uppercase tracking-wide text-foreground">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.product.category}
                      </p>
                      <p className="text-primary font-bold">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="flex items-center gap-2 bg-secondary rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:text-primary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:text-primary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="vsm-card p-6 sticky top-24">
                  <h2 className="font-display text-xl uppercase tracking-wider text-foreground mb-6">
                    Résumé
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sous-total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Livraison</span>
                      <span>Calculé à la commande</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-bold text-foreground">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(subtotal)}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/commande">
                    <Button variant="hero" className="w-full" size="lg">
                      Passer la Commande
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Panier;
