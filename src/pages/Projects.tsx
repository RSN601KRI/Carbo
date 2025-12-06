import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { mockProjects } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'newest'>('rating');
  const [verraOnly, setVerraOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    let projects = [...mockProjects];

    // Category filter
    if (selectedCategory) {
      projects = projects.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.country.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    }

    // VERRA filter
    if (verraOnly) {
      projects = projects.filter(p => p.isVerraCertified);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        projects.sort((a, b) => a.pricePerCredit - b.pricePerCredit);
        break;
      case 'price-desc':
        projects.sort((a, b) => b.pricePerCredit - a.pricePerCredit);
        break;
      case 'rating':
        projects.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        projects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return projects;
  }, [selectedCategory, searchQuery, sortBy, verraOnly]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-nature py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Carbon Credit Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Browse verified carbon offset projects from trusted sellers worldwide. 
              Compare prices, track SDG impact, and make a difference.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border bg-card">
          <div className="container mx-auto px-4 space-y-4">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={(v: typeof sortBy) => setSortBy(v)}>
                  <SelectTrigger className="w-[180px]">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <label className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background cursor-pointer hover:border-forest/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={verraOnly}
                    onChange={(e) => setVerraOnly(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="text-sm font-medium">VERRA Only</span>
                </label>
              </div>
            </div>

            {/* Categories */}
            <CategoryFilter
              selected={selectedCategory}
              onSelect={handleCategoryChange}
            />
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{filteredProjects.length}</span> projects found
              </p>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setVerraOnly(false);
                    setSearchParams({});
                  }}
                  className="mt-4 text-forest hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
