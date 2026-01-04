import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour VSM Collection!\n\nJe suis ${formData.name}.\n\n${formData.message}\n\nTéléphone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/243000000000?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirection vers WhatsApp...');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="vsm-container text-center">
            <p className="text-primary font-medium uppercase tracking-[0.3em] mb-3 text-sm">
              Contactez-nous
            </p>
            <h1 className="vsm-heading text-4xl md:text-6xl text-foreground mb-4">
              RESTONS EN CONTACT
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Une question? Une suggestion? Nous sommes là pour vous.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="vsm-container">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-8">
                  Informations
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Ngiri-Ngiri, Kinshasa<br />
                        République Démocratique du Congo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Téléphone</h3>
                      <a href="tel:+243000000000" className="text-muted-foreground hover:text-primary transition-colors">
                        +243 00 000 0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a href="mailto:contact@vsmcollection.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@vsmcollection.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 vsm-card">
                  <h3 className="font-display text-lg uppercase tracking-wider text-foreground mb-2">
                    Heures d'ouverture
                  </h3>
                  <p className="text-muted-foreground">
                    Lundi - Samedi: 9h00 - 18h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="vsm-card p-6 md:p-8">
                <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-6">
                  Envoyez un Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="vsm-input"
                      placeholder="Entrez votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Numéro de téléphone
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
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="vsm-input min-h-[150px]"
                      placeholder="Votre message..."
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
