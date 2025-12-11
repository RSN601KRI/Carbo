import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import { Users, Target, Award, Globe } from 'lucide-react';
import teamImage from '@/assets/team-collaboration.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to accelerate the transition to a net-zero carbon economy through transparent, accessible carbon markets.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of collective action and work closely with local communities in our project regions.',
    },
    {
      icon: Award,
      title: 'Verified Impact',
      description: 'Every project on our platform undergoes rigorous third-party verification to ensure real, measurable impact.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our projects span across continents, from rainforest preservation to ocean conservation initiatives.',
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
                <span className="inline-block text-sm font-semibold text-forest-light uppercase tracking-wider mb-4 font-sans-tight">About Us</span>
                <h1 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">
                  Building a <span className="italic">Sustainable</span> Future
                </h1>
                <p className="text-xl text-primary-foreground/80 font-sans-tight">
                  Carbo is on a mission to make carbon offsetting accessible, transparent, and impactful for everyone.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimate animation="fade-right">
                <div className="relative">
                  <img 
                    src={teamImage} 
                    alt="Carbo Team" 
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-forest p-6 rounded-xl shadow-glow">
                    <p className="text-3xl font-display text-primary-foreground">500K+</p>
                    <p className="text-sm text-primary-foreground/80 font-sans-tight">Tonnes CO₂ Offset</p>
                  </div>
                </div>
              </ScrollAnimate>
              
              <ScrollAnimate animation="fade-left">
                <div>
                  <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Our Story</span>
                  <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                    From Vision to <span className="italic text-forest">Impact</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground font-sans-tight">
                    <p>
                      Founded in 2023, Carbo emerged from a simple observation: despite growing awareness about climate change, accessing quality carbon offset projects remained complicated and opaque.
                    </p>
                    <p>
                      We built Carbo to bridge this gap—creating a marketplace where verified carbon credits meet conscious consumers and businesses seeking to make a real difference.
                    </p>
                    <p>
                      Today, we partner with over 50 verified projects across 20 countries, helping thousands of individuals and organizations offset their carbon footprint with confidence.
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-nature">
          <div className="container mx-auto px-4">
            <ScrollAnimate animation="fade-up">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Our Values</span>
                <h2 className="text-3xl md:text-4xl font-display text-foreground">
                  What <span className="italic text-forest">Drives</span> Us
                </h2>
              </div>
            </ScrollAnimate>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollAnimate key={value.title} animation="scale" delay={index * 100}>
                  <div className="bg-card p-6 rounded-2xl border border-border hover:border-forest/50 hover:shadow-glow transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-gradient-forest flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-display text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans-tight">{value.description}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
