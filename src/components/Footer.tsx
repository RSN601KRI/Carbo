import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-forest text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">CarbonMark</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted marketplace for verified carbon credits. Invest in a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/projects" className="hover:text-forest transition-colors">All Projects</Link></li>
              <li><Link to="/projects?category=forestry" className="hover:text-forest transition-colors">Forestry</Link></li>
              <li><Link to="/projects?category=renewable-energy" className="hover:text-forest transition-colors">Renewable Energy</Link></li>
              <li><Link to="/projects?category=ocean" className="hover:text-forest transition-colors">Ocean Conservation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-forest transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-forest transition-colors">VERRA Registry</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">SDG Goals</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">Carbon Glossary</a></li>
              <li><a href="#" className="hover:text-forest transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 CarbonMark. All rights reserved. Built for a greener planet.</p>
        </div>
      </div>
    </footer>
  );
};
