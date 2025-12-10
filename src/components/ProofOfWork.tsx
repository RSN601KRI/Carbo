import { ScrollAnimate } from './ScrollAnimate';
import renewableImg from '@/assets/renewable-energy.jpg';
import oceanImg from '@/assets/ocean-conservation.jpg';
import cityImg from '@/assets/smart-city.jpg';
import { ExternalLink } from 'lucide-react';

const proofItems = [
  {
    image: renewableImg,
    title: 'Wind Farm Initiative',
    location: 'Gujarat, India',
    credits: '25,000 tonnes CO2',
    verified: 'VERRA VCS',
    description: 'Supporting renewable energy infrastructure that displaces fossil fuel power generation.',
  },
  {
    image: oceanImg,
    title: 'Blue Carbon Project',
    location: 'Indonesia',
    credits: '50,000 tonnes CO2',
    verified: 'VERRA VCS + CCB',
    description: 'Protecting mangrove ecosystems that sequester carbon and support marine biodiversity.',
  },
  {
    image: cityImg,
    title: 'Urban Reforestation',
    location: 'São Paulo, Brazil',
    credits: '15,000 tonnes CO2',
    verified: 'Gold Standard',
    description: 'Creating green corridors in urban areas to improve air quality and capture carbon.',
  },
];

export const ProofOfWork = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-nature relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Proof of Work</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Real Projects, <span className="italic text-forest">Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans-tight">
              These verified projects represent the quality and transparency you can expect from every Carbo carbon credit.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {proofItems.map((item, index) => (
            <ScrollAnimate key={item.title} animation="fade-up" delay={index * 150}>
              <div className="group relative rounded-2xl overflow-hidden bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest text-primary-foreground text-xs font-semibold font-sans-tight">
                    {item.verified}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans-tight">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span className="text-forest font-semibold">{item.credits}</span>
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans-tight mb-4">{item.description}</p>
                  <button className="inline-flex items-center gap-2 text-forest font-semibold text-sm font-sans-tight transition-colors hover:text-forest-light group/link">
                    View Project
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};