import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import { Search, ShieldCheck, ShoppingCart, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Browse Projects',
      description: 'Explore our curated marketplace of verified carbon offset projects. Filter by category, location, price, or impact metrics to find projects that align with your values.',
    },
    {
      number: '02',
      icon: ShieldCheck,
      title: 'Verify Impact',
      description: 'Every project displays detailed verification information including VERRA certification status, SDG goals fulfilled, and third-party audit reports.',
    },
    {
      number: '03',
      icon: ShoppingCart,
      title: 'Purchase Credits',
      description: 'Add carbon credits to your cart and complete your purchase. Each credit represents one tonne of CO₂ that will be offset through your chosen project.',
    },
    {
      number: '04',
      icon: Leaf,
      title: 'Track Your Impact',
      description: 'Monitor your carbon offset portfolio, receive updates on project progress, and access certificates for your contributions.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimate animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block text-sm font-semibold text-forest-light uppercase tracking-wider mb-4 font-sans-tight">How It Works</span>
                <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
                  Offset Your Carbon in <span className="italic">4 Simple Steps</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 font-sans-tight">
                  From discovery to impact tracking, we've made carbon offsetting straightforward and transparent.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <ScrollAnimate key={step.number} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-display text-forest/20">{step.number}</span>
                        <div className="h-12 w-12 rounded-xl bg-gradient-forest flex items-center justify-center shadow-glow">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground font-sans-tight text-lg">{step.description}</p>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-nature rounded-2xl p-8 border border-border">
                        <div className="aspect-video bg-card rounded-xl flex items-center justify-center">
                          <step.icon className="h-24 w-24 text-forest/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-forest">
          <div className="container mx-auto px-4">
            <ScrollAnimate animation="scale">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-6">
                  Ready to Make an Impact?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-sans-tight">
                  Start browsing our verified carbon offset projects and take the first step towards a carbon-neutral future.
                </p>
                <Link to="/projects">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 gap-2">
                    Browse Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimate>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
