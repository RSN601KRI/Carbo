import { ScrollAnimate } from './ScrollAnimate';
import { AlertTriangle, TrendingUp, Globe2, Factory } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Climate Emergency',
    description: 'Global temperatures are rising faster than predicted, threatening ecosystems and communities worldwide.',
  },
  {
    icon: Factory,
    title: 'Carbon Emissions',
    description: 'Industrial activities continue to release billions of tonnes of CO2 into the atmosphere annually.',
  },
  {
    icon: Globe2,
    title: 'Fragmented Markets',
    description: 'Carbon credit markets are complex, opaque, and inaccessible to most businesses and individuals.',
  },
  {
    icon: TrendingUp,
    title: 'Greenwashing Risks',
    description: 'Without proper verification, carbon offsets may not deliver real environmental benefits.',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-nature relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              The Problem We're <span className="italic text-forest">Solving</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans-tight">
              Climate change demands urgent action, but accessing quality carbon offset projects remains challenging for most organizations.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ScrollAnimate key={problem.title} animation={index % 2 === 0 ? 'fade-left' : 'fade-right'} delay={index * 100}>
              <div className="group glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-destructive/10 text-destructive">
                    <problem.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground font-sans-tight">{problem.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};