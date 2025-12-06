import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { mockProjects } from '@/data/mockData';
import { CATEGORIES } from '@/types/marketplace';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredProjects = mockProjects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />

        {/* Categories Section */}
        <section className="py-16 bg-gradient-nature">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore carbon offset projects across various sectors making a real impact on climate change.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/projects?category=${category.id}`}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card hover:border-forest/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <span className="text-4xl mb-3">{category.icon}</span>
                    <h3 className="font-medium text-foreground text-center text-sm">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground">
                  Top-rated carbon credit projects verified by VERRA
                </p>
              </div>
              <Link to="/projects">
                <Button variant="nature" className="gap-2 hidden sm:flex">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link to="/projects">
                <Button variant="nature" className="gap-2">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Purchase carbon credits in just a few simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Browse Projects', desc: 'Explore verified carbon offset projects from around the world' },
                { step: '02', title: 'Compare & Select', desc: 'Review prices, SDG goals, and certifications to find your match' },
                { step: '03', title: 'Purchase Credits', desc: 'Add credits to your cart and complete secure checkout' },
                { step: '04', title: 'Track Delivery', desc: 'Monitor your order through verification and credit issuance' },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-forest text-primary-foreground text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
