import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Connexion = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Fonctionnalité en cours de développement. Connectez Lovable Cloud pour activer l\'authentification.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="vsm-container">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <Link to="/" className="inline-block mb-6">
                  <span className="font-display text-4xl tracking-wider text-foreground">
                    VSM<span className="text-primary">.</span>
                  </span>
                </Link>
                <h1 className="vsm-heading text-2xl md:text-3xl text-foreground">
                  {isLogin ? 'CONNEXION' : 'INSCRIPTION'}
                </h1>
              </div>

              <div className="vsm-card p-6 md:p-8">
                {/* Toggle */}
                <div className="flex bg-secondary rounded-lg p-1 mb-6">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                      isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                      !isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    Inscription
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="vsm-input"
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Téléphone
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
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="vsm-input"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="vsm-input"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    {isLogin ? 'Se Connecter' : 'Créer un Compte'}
                  </Button>
                </form>

                {isLogin && (
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    <button className="text-primary hover:underline">
                      Mot de passe oublié?
                    </button>
                  </p>
                )}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                En continuant, vous acceptez nos{' '}
                <button className="text-primary hover:underline">
                  Conditions d'utilisation
                </button>{' '}
                et notre{' '}
                <button className="text-primary hover:underline">
                  Politique de confidentialité
                </button>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Connexion;
