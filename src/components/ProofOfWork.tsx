import { useState, useMemo } from 'react';
import { ScrollAnimate } from './ScrollAnimate';
import { mockProjects } from '@/data/mockData';
import { CATEGORIES } from '@/types/marketplace';
import { ExternalLink, MapPin, Award, Leaf, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const getCategoryLabel = (categoryId: string) => {
  return CATEGORIES.find(c => c.id === categoryId)?.name || categoryId;
};

export const ProofOfWork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = searchQuery === '' || 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== null;

  return (
    <section className="py-20 lg:py-32 bg-gradient-nature relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Proof of Work</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Real Projects, <span className="italic text-forest">Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans-tight">
              Browse verified carbon credit projects across multiple categories. Each project is thoroughly vetted and delivers measurable environmental impact.
            </p>
          </div>
        </ScrollAnimate>

        {/* Search and Filter Controls */}
        <ScrollAnimate animation="fade-up" delay={100}>
          <div className="max-w-4xl mx-auto mb-10">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by name, location, or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg rounded-full bg-card border-border/50 focus:border-forest transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-sans-tight transition-all duration-300 ${
                  selectedCategory === null
                    ? 'bg-forest text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted border border-border/50'
                }`}
              >
                All Projects
              </button>
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold font-sans-tight transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-forest text-primary-foreground shadow-md'
                      : 'bg-card text-foreground hover:bg-muted border border-border/50'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Active Filters / Results Count */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-muted-foreground font-sans-tight">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-forest hover:text-forest-light font-semibold text-sm font-sans-tight flex items-center gap-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </ScrollAnimate>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollAnimate key={project.id} animation="fade-up" delay={index * 50}>
                <Link 
                  to={`/projects/${project.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-glow block h-full"
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
                          {(project.availableCredits / 1000).toFixed(0)}k Credits
                        </span>
                      </div>
                      <span className="text-lg font-display text-foreground">
                        ${project.pricePerCredit.toFixed(2)}<span className="text-sm text-muted-foreground">/credit</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimate>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground font-sans-tight mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-primary-foreground rounded-full font-semibold font-sans-tight transition-all duration-300 hover:bg-forest-light"
              >
                Clear all filters
              </button>
            </div>
          )}
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
