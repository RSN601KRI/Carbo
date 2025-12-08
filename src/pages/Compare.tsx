import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useComparison } from '@/contexts/ComparisonContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SDG_GOALS } from '@/types/marketplace';
import { X, ArrowRight, Scale, MapPin, Star, Shield, Leaf } from 'lucide-react';
import { toast } from 'sonner';
import { addToCart } from '@/data/mockData';
import { Project } from '@/types/marketplace';

const Compare = () => {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();

  const handleAddToCart = (project: Project) => {
    addToCart(project, 1);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success('Added to cart');
  };

  if (comparisonList.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Scale className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">No projects to compare</h1>
            <p className="text-muted-foreground mb-6">
              Add projects to comparison from the projects page
            </p>
            <Link to="/projects">
              <Button variant="forest" className="gap-2">
                Browse Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const comparisonAttributes = [
    { label: 'Price per Credit', key: 'pricePerCredit', format: (v: number) => `$${v.toFixed(2)}` },
    { label: 'Available Credits', key: 'availableCredits', format: (v: number) => v.toLocaleString() },
    { label: 'Total Credits', key: 'totalCredits', format: (v: number) => v.toLocaleString() },
    { label: 'Rating', key: 'rating', format: (v: number) => `${v.toFixed(1)} ★` },
    { label: 'Reviews', key: 'reviewCount', format: (v: number) => v.toString() },
    { label: 'Vintage', key: 'vintage', format: (v: string) => v },
    { label: 'Methodology', key: 'methodology', format: (v: string) => v },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Compare Projects</h1>
              <p className="text-muted-foreground">
                Compare {comparisonList.length} carbon credit projects side by side
              </p>
            </div>
            <Button variant="outline" onClick={clearComparison}>
              Clear All
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-muted/50 rounded-tl-lg w-48">
                    <span className="text-sm font-semibold text-muted-foreground">Attribute</span>
                  </th>
                  {comparisonList.map((project, index) => (
                    <th
                      key={project.id}
                      className={`p-4 bg-muted/50 ${index === comparisonList.length - 1 ? 'rounded-tr-lg' : ''}`}
                    >
                      <Card className="p-4 relative">
                        <button
                          onClick={() => removeFromComparison(project.id)}
                          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                        >
                          <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <img
                          src={project.imageUrl}
                          alt={project.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <Link to={`/projects/${project.id}`}>
                          <h3 className="font-semibold text-foreground hover:text-forest transition-colors line-clamp-2 text-sm">
                            {project.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {project.country}
                        </div>
                      </Card>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Category */}
                <tr className="border-b border-border">
                  <td className="p-4 text-sm font-medium text-muted-foreground">Category</td>
                  {comparisonList.map(project => (
                    <td key={project.id} className="p-4 text-center">
                      <Badge variant="secondary" className="capitalize">
                        {project.category.replace('-', ' ')}
                      </Badge>
                    </td>
                  ))}
                </tr>

                {/* VERRA Certified */}
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 text-sm font-medium text-muted-foreground">VERRA Certified</td>
                  {comparisonList.map(project => (
                    <td key={project.id} className="p-4 text-center">
                      {project.isVerraCertified ? (
                        <Badge variant="forest" className="gap-1">
                          <Shield className="h-3 w-3" />
                          Certified
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Comparison Attributes */}
                {comparisonAttributes.map((attr, index) => (
                  <tr key={attr.key} className={`border-b border-border ${index % 2 === 0 ? '' : 'bg-muted/30'}`}>
                    <td className="p-4 text-sm font-medium text-muted-foreground">{attr.label}</td>
                    {comparisonList.map(project => {
                      const value = project[attr.key as keyof typeof project];
                      const isLowestPrice = attr.key === 'pricePerCredit' && 
                        value === Math.min(...comparisonList.map(p => p.pricePerCredit));
                      const isHighestRating = attr.key === 'rating' && 
                        value === Math.max(...comparisonList.map(p => p.rating));
                      
                      return (
                        <td key={project.id} className="p-4 text-center">
                          <span className={`font-medium ${(isLowestPrice || isHighestRating) ? 'text-forest' : 'text-foreground'}`}>
                            {attr.format(value as never)}
                          </span>
                          {isLowestPrice && (
                            <Badge variant="forest" className="ml-2 text-xs">Best Price</Badge>
                          )}
                          {isHighestRating && (
                            <Badge variant="forest" className="ml-2 text-xs">Top Rated</Badge>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* SDG Goals */}
                <tr className="border-b border-border">
                  <td className="p-4 text-sm font-medium text-muted-foreground">SDG Goals</td>
                  {comparisonList.map(project => (
                    <td key={project.id} className="p-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.sdgGoals.map(goal => (
                          <span
                            key={goal}
                            className="inline-flex items-center justify-center w-7 h-7 rounded text-xs font-medium text-white"
                            style={{ backgroundColor: SDG_GOALS[goal]?.color }}
                            title={SDG_GOALS[goal]?.name}
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Seller */}
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 text-sm font-medium text-muted-foreground">Seller</td>
                  {comparisonList.map(project => (
                    <td key={project.id} className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-sm text-foreground">{project.seller.name}</span>
                        {project.seller.verified && (
                          <Shield className="h-3 w-3 text-forest" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Actions */}
                <tr>
                  <td className="p-4"></td>
                  {comparisonList.map(project => (
                    <td key={project.id} className="p-4 text-center">
                      <div className="space-y-2">
                        <Button
                          variant="forest"
                          className="w-full gap-2"
                          onClick={() => handleAddToCart(project)}
                        >
                          <Leaf className="h-4 w-4" />
                          Add to Cart
                        </Button>
                        <Link to={`/projects/${project.id}`} className="block">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
