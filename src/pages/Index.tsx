import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ProofOfWork } from '@/components/ProofOfWork';
import { UseCasesSection } from '@/components/UseCasesSection';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import { mockProjects } from '@/data/mockData';
import { CATEGORIES } from '@/types/marketplace';
import { ArrowRight } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  const featuredProjects = mockProjects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />

        {/* Categories Section */}
        <section className="py-20 bg-gradient-nature">
          <div className="container mx-auto px-4">
            <ScrollAnimate animation="fade-up">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-4 font-sans-tight">Categories</span>
                <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
                  Browse by <span className="italic text-forest">Category</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-sans-tight">
                  Explore carbon offset projects across various sectors making a real impact on climate change.
                </p>
              </div>
            </ScrollAnimate>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((category, index) => (
                <ScrollAnimate key={category.id} animation="scale" delay={index * 50}>
                  <Link to={`/projects?category=${category.id}`} className="group">
                    <div className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card hover:border-forest/50 hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1">
                      <span className="text-4xl mb-3">{category.icon}</span>
                      <h3 className="font-medium text-foreground text-center text-sm font-sans-tight">
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollAnimate animation="fade-up">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="inline-block text-sm font-semibold text-forest uppercase tracking-wider mb-2 font-sans-tight">Featured</span>
                  <h2 className="text-4xl font-display text-foreground">
                    Top <span className="italic text-forest">Projects</span>
                  </h2>
                </div>
                <Link to="/projects">
                  <Button variant="nature" className="gap-2 hidden sm:flex">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimate>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollAnimate key={project.id} animation="fade-up" delay={index * 100}>
                  <ProjectCard project={project} />
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <ProofOfWork />
        <UseCasesSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;