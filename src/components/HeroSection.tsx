import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, Globe } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-forest-light/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-forest-glow/10 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-light/20 border border-forest-light/30 mb-6 animate-fade-up">
            <Leaf className="h-4 w-4 text-forest-glow" />
            <span className="text-sm font-medium text-forest-glow">Carbon Credit Marketplace</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Invest in a
            <span className="block text-forest-glow">Sustainable Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Browse verified carbon offset projects worldwide. Compare prices, track your impact, and contribute to climate action with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/projects">
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                Explore Projects
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/orders">
              <Button variant="nature" size="xl" className="w-full sm:w-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                Track My Orders
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Shield, label: 'VERRA Certified', value: '500+ Projects' },
              { icon: Globe, label: 'Global Impact', value: '40+ Countries' },
              { icon: Leaf, label: 'Credits Traded', value: '10M+ Tonnes' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <stat.icon className="h-8 w-8 text-forest-glow mb-3" />
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
