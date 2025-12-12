import { ScrollAnimate } from './ScrollAnimate';
import { mockProjects } from '@/data/mockData';
import { CATEGORIES } from '@/types/marketplace';
import { ExternalLink, MapPin, Award, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

// Select featured projects from different categories
const getFeaturedProjects = () => {
  const categories = ['forestry', 'renewable-energy', 'ocean', 'agriculture', 'waste-management'];
  const featured: typeof mockProjects = [];
  
  for (const cat of categories) {
    const project = mockProjects.find(p => p.category === cat && !featured.includes(p));
    if (project) featured.push(project);
    if (featured.length >= 6) break;
  }
  
  // Fill remaining slots if needed
  for (const project of mockProjects) {
    if (!featured.includes(project) && featured.length < 6) {
      featured.push(project);
    }
  }
  
  return featured;
};

const getCategoryLabel = (categoryId: string) => {
  return CATEGORIES.find(c => c.id === categoryId)?.name || categoryId;
};

export const ProofOfWork = () => {
  const featuredProjects = getFeaturedProjects();

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
              Browse verified carbon credit projects across multiple categories. Each project is thoroughly vetted and delivers measurable environmental impact.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ScrollAnimate key={project.id} animation="fade-up" delay={index * 100}>
              <Link 
                to={`/projects/${project.id}`}
                className="group relative rounded-2xl overflow-hidden bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-glow block"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold font-sans-tight">
                    {getCategoryLabel(project.category)}
                  </div>
                  
                  {/* Certification Badge */}
                  {project.isVerraCertified && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest text-primary-foreground text-xs font-semibold font-sans-tight flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      VERRA Certified
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans-tight">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}, {project.country}</span>
                  </div>
                  
                  <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-forest transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-sans-tight mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-forest" />
                      <span className="text-forest font-semibold text-sm font-sans-tight">
                        {(project.availableCredits / 1000).toFixed(0)}k Credits Available
                      </span>
                    </div>
                    <span className="text-lg font-display text-foreground">
                      ${project.pricePerCredit.toFixed(2)}<span className="text-sm text-muted-foreground">/credit</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-primary-foreground rounded-full font-semibold font-sans-tight transition-all duration-300 hover:bg-forest-light hover:shadow-glow"
            >
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};