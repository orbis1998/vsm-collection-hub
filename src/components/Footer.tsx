import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="vsm-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl tracking-wider text-foreground">
                VSM<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-4">
              Made in DRC, worn worldwide. Premium streetwear pour ceux qui vivent avec style.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/boutique" className="text-muted-foreground hover:text-primary transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contact@vsmcollection.com" className="hover:text-primary transition-colors">
                  contact@vsmcollection.com
                </a>
              </li>
              <li>
                <a href="tel:+243000000000" className="hover:text-primary transition-colors">
                  +243 00 000 0000
                </a>
              </li>
              <li>Ngiri-Ngiri, Kinshasa</li>
              <li>République Démocratique du Congo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} VSM Collection. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
