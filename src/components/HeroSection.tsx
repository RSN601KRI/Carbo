import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, Globe, Play } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';
import heroImage from '@/assets/hero-forest.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lush green forest with carbon molecules" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-forest-light/20 blob blob-1" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-forest-glow/15 blob blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald/10 blob blob-3" />
      </div>
      
      <div className="container relative mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimate animation="fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark mb-8">
              <Leaf className="h-4 w-4 text-forest-glow" />
              <span className="text-sm font-medium text-forest-glow font-sans-tight">Carbon Credit Marketplace</span>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-primary-foreground mb-6 leading-tight">
              Invest in a
              <span className="block text-forest-glow italic">Sustainable Future</span>
            </h1>
          </ScrollAnimate>
          
          <ScrollAnimate animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-sans-tight leading-relaxed">
              Browse verified carbon offset projects worldwide. Compare prices, track your impact, and contribute to climate action with confidence.
            </p>
          </ScrollAnimate>
          
          <ScrollAnimate animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/projects">
                <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto group">
                  Explore Projects
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="ghost" size="xl" className="w-full sm:w-auto text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10 gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate animation="scale" delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, label: 'VERRA Certified', value: '500+ Projects' },
                { icon: Globe, label: 'Global Impact', value: '40+ Countries' },
                { icon: Leaf, label: 'Credits Traded', value: '10M+ Tonnes' },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group flex flex-col items-center p-6 rounded-2xl glass-dark transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-forest-glow mb-3 transition-transform group-hover:scale-110" />
                  <p className="text-2xl font-display text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70 font-sans-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};