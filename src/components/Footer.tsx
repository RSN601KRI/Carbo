import { CarboLogo } from './CarboLogo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <CarboLogo />
            <p className="text-sm text-muted-foreground font-sans-tight">
              Your trusted marketplace for verified carbon credits. Invest in a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-display text-foreground text-lg mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans-tight">
              <li><Link to="/projects" className="hover:text-forest transition-colors">All Projects</Link></li>
              <li><Link to="/projects?category=forestry" className="hover:text-forest transition-colors">Forestry</Link></li>
              <li><Link to="/projects?category=renewable-energy" className="hover:text-forest transition-colors">Renewable Energy</Link></li>
              <li><Link to="/projects?category=ocean" className="hover:text-forest transition-colors">Ocean Conservation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-foreground text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans-tight">
              <li><a href="#" className="hover:text-forest transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Verification Process</a></li>
              <li><a href="#contact" className="hover:text-forest transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-foreground text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans-tight">
              <li><a href="#" className="hover:text-forest transition-colors">VERRA Registry</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">SDG Goals</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Carbon Glossary</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground font-sans-tight">
          <p>© 2025 Carbo. All rights reserved. Built for a greener planet.</p>
        </div>
      </div>
    </footer>
  );
};