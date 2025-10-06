import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary">
              Synnova
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Votre solution de gestion du Tiers Payant pour opticiens et audioprothésistes.
            </p>
            <div className="mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-synnova" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pourquoi Synnova
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+33000000000" className="hover:text-primary transition-colors">
                  Téléphone
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              SIREN : [À compléter]
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Synnova. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
