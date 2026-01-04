import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice, kinshasaCommunes, drcProvinces } from '@/lib/data';
import { Loader2, Check } from 'lucide-react';
import { toast } from 'sonner';

const Commande = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: '',
    city: '',
    commune: '',
    instructions: '',
    promoCode: '',
  });

  const isKinshasa = formData.province === 'Kinshasa';
  const selectedCommune = kinshasaCommunes.find(c => c.name === formData.commune);
  const deliveryFee = isKinshasa && selectedCommune ? selectedCommune.fee : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'province' && value !== 'Kinshasa' ? { commune: '' } : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.province) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (isKinshasa && !formData.commune) {
      toast.error('Veuillez sélectionner votre commune');
      return;
    }

    if (!isKinshasa && !formData.city) {
      toast.error('Veuillez entrer votre ville');
      return;
    }

    setIsLoading(true);

    // Build WhatsApp message
    const productsList = items.map(item => 
      `• ${item.product.name} x${item.quantity} - ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n');

    const deliveryInfo = isKinshasa 
      ? `📍 Livraison: ${formData.commune}, Kinshasa\n💰 Frais de livraison: ${formatPrice(deliveryFee)}`
      : `📍 Livraison: ${formData.city}, ${formData.province}\n📦 Expédition via agence partenaire`;

    const message = `🛒 *NOUVELLE COMMANDE VSM COLLECTION*

👤 *Client:* ${formData.fullName}
📞 *Téléphone:* ${formData.phone}

📦 *Produits:*
${productsList}

${deliveryInfo}

💵 *Sous-total:* ${formatPrice(subtotal)}
💵 *Total:* ${formatPrice(total)}

${formData.instructions ? `📝 *Instructions:* ${formData.instructions}` : ''}
${formData.promoCode ? `🎁 *Code promo:* ${formData.promoCode}` : ''}`;

    const whatsappUrl = `https://wa.me/243000000000?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      window.open(whatsappUrl, '_blank');
      toast.success('Commande envoyée! Redirection vers WhatsApp...');
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/panier');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="vsm-container">
            <h1 className="vsm-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
              FINALISER LA COMMANDE
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="vsm-input"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="vsm-input"
                    placeholder="+243 XXX XXX XXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Province *
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="vsm-input"
                    required
                  >
                    <option value="">Sélectionnez votre province</option>
                    {drcProvinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>

                {isKinshasa ? (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Commune *
                    </label>
                    <select
                      name="commune"
                      value={formData.commune}
                      onChange={handleChange}
                      className="vsm-input"
                      required
                    >
                      <option value="">Sélectionnez votre commune</option>
                      {kinshasaCommunes.map(commune => (
                        <option key={commune.name} value={commune.name}>
                          {commune.name} - {formatPrice(commune.fee)}
                        </option>
                      ))}
                    </select>
                    {selectedCommune && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Zone {selectedCommune.zone} - Frais de livraison: <span className="text-primary font-bold">{formatPrice(selectedCommune.fee)}</span>
                      </p>
                    )}
                  </div>
                ) : formData.province ? (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="vsm-input"
                      placeholder="Votre ville"
                      required
                    />
                    <div className="mt-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        📦 La livraison sera effectuée via une agence partenaire de votre province. 
                        Votre commande est validée et expédiée après confirmation.
                      </p>
                    </div>
                  </div>
                ) : null}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Instructions de livraison
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    className="vsm-input min-h-[100px]"
                    placeholder="Adresse précise, repères, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Code promo
                  </label>
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    className="vsm-input"
                    placeholder="Entrez votre code promo"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Commander via WhatsApp
                    </>
                  )}
                </Button>
              </form>

              {/* Order Summary */}
              <div>
                <div className="vsm-card p-6 sticky top-24">
                  <h2 className="font-display text-xl uppercase tracking-wider text-foreground mb-6">
                    Récapitulatif
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map(item => (
                      <div key={item.product.id} className="flex gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Qté: {item.quantity}
                          </p>
                          <p className="text-sm text-primary font-bold">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Sous-total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    {isKinshasa && selectedCommune && (
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Livraison ({selectedCommune.name})</span>
                        <span>{formatPrice(deliveryFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>
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

export default Commande;
