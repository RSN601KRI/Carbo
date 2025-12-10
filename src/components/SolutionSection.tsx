import { ScrollAnimate } from './ScrollAnimate';
import { KnowledgeGraph } from './KnowledgeGraph';
import { CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Verified Projects',
    description: 'Every project is VERRA certified and thoroughly verified for real environmental impact.',
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Browse, compare, and purchase carbon credits in minutes, not months.',
  },
  {
    icon: Shield,
    title: 'Full Transparency',
    description: 'Track your credits from purchase to retirement with complete visibility.',
  },
  {
    icon: BarChart3,
    title: 'Impact Metrics',
    description: 'Measure your contribution with detailed SDG alignment and impact reports.',
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimate animation="fade-left">
            <div>
              <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Our Solution</span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
                A Smarter Way to <span className="italic text-forest">Offset Carbon</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-sans-tight">
                Carbo connects you directly with verified carbon offset projects worldwide, making it simple to contribute to climate action while ensuring every credit delivers real impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 transition-all hover:bg-muted/50">
                    <feature.icon className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground font-sans-tight">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground font-sans-tight">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-right" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-forest opacity-5 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl p-8">
                <h3 className="text-center text-xl font-display text-foreground mb-6">Carbon Offset Ecosystem</h3>
                <KnowledgeGraph />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};