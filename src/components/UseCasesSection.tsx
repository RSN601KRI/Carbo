import { ScrollAnimate } from './ScrollAnimate';
import { Building2, Factory, Briefcase, ShoppingBag, Plane, Banknote } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Enterprise ESG',
    description: 'Large corporations integrating carbon credits into comprehensive sustainability strategies.',
    example: 'Fortune 500 companies offsetting scope 3 emissions',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial facilities compensating for production emissions while transitioning to cleaner processes.',
    example: 'Steel and cement manufacturers achieving carbon neutrality',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Consulting firms, law offices, and agencies offsetting business travel and operations.',
    example: 'Service firms becoming carbon-neutral certified',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Retail',
    description: 'Online retailers offsetting shipping emissions and offering carbon-neutral delivery.',
    example: 'Climate-conscious brands with net-zero logistics',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Airlines, hotels, and tour operators providing guests with offset options.',
    example: 'Sustainable tourism with verified carbon offsets',
  },
  {
    icon: Banknote,
    title: 'Financial Services',
    description: 'Banks and investment firms offering green portfolios and carbon credit investments.',
    example: 'ESG funds with verified environmental assets',
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Powering <span className="italic text-forest">Climate Action</span> Across Industries
            </h2>
            <p className="text-lg text-muted-foreground font-sans-tight">
              From global enterprises to growing startups, organizations of all sizes use Carbo to achieve their sustainability goals.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <ScrollAnimate key={useCase.title} animation="scale" delay={index * 100}>
              <div className="group h-full p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-forest/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-forest text-primary-foreground">
                    <useCase.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-display text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground font-sans-tight text-sm mb-3">{useCase.description}</p>
                <p className="text-xs text-forest font-medium font-sans-tight bg-forest/10 px-3 py-1.5 rounded-lg inline-block">
                  {useCase.example}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};