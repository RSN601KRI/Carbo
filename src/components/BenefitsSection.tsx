import { ScrollAnimate } from './ScrollAnimate';
import { Users, TreeDeciduous, DollarSign, Award } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'For Businesses',
    description: 'Meet ESG goals and regulatory requirements with verified carbon credits that stakeholders trust.',
    color: 'text-sky',
  },
  {
    icon: TreeDeciduous,
    title: 'For the Planet',
    description: 'Fund projects that protect forests, restore ecosystems, and support sustainable development.',
    color: 'text-forest',
  },
  {
    icon: DollarSign,
    title: 'For Your Budget',
    description: 'Competitive pricing with no hidden fees. Compare projects to find the best value.',
    color: 'text-sun',
  },
  {
    icon: Award,
    title: 'For Your Brand',
    description: 'Build credibility with transparent reporting and verified environmental contributions.',
    color: 'text-earth',
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-forest-glow/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-emerald/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-forest-glow uppercase tracking-wider mb-4 font-sans-tight">Why Carbo</span>
            <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">
              How It <span className="italic text-forest-glow">Benefits You</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 font-sans-tight">
              Whether you're a business, individual, or organization, Carbo makes carbon offsetting accessible and impactful.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollAnimate key={benefit.title} animation="fade-up" delay={index * 100}>
              <div className="group h-full glass-dark p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className={`p-3 rounded-xl bg-primary-foreground/10 inline-block mb-4 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display text-primary-foreground mb-3">{benefit.title}</h3>
                <p className="text-primary-foreground/70 font-sans-tight text-sm">{benefit.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};