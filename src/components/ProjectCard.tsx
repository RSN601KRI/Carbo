import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Shield, ShoppingCart, Scale, Check } from 'lucide-react';
import { Project, SDG_GOALS } from '@/types/marketplace';
import { addToCart } from '@/data/mockData';
import { toast } from 'sonner';
import { useComparison } from '@/contexts/ComparisonContext';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { addToComparison, removeFromComparison, isInComparison } = useComparison();
  const inComparison = isInComparison(project.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(project, 1);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success(`Added 1 credit from ${project.name} to cart`);
  };

  const handleToggleComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inComparison) {
      removeFromComparison(project.id);
    } else {
      addToComparison(project);
    }
  };

  return (
    <Link to={`/projects/${project.id}`}>
      <Card variant="nature" className="group h-full overflow-hidden cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          <div className="absolute top-3 left-3 flex gap-2">
            {project.isVerraCertified && (
              <Badge variant="verified" className="gap-1">
                <Shield className="h-3 w-3" />
                VERRA
              </Badge>
            )}
          </div>
          
          <div className="absolute bottom-3 left-3 right-3">
            <Badge variant="category" className="capitalize">
              {project.category.replace('-', ' ')}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-forest transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-1 text-sun shrink-0">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{project.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}, {project.country}
          </div>
        </CardHeader>

        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {project.sdgGoals.slice(0, 4).map((goal) => (
              <span
                key={goal}
                className="flex items-center justify-center w-7 h-7 rounded-full text-sm"
                style={{ backgroundColor: SDG_GOALS[goal]?.color + '20' }}
                title={SDG_GOALS[goal]?.name}
              >
                {SDG_GOALS[goal]?.icon}
              </span>
            ))}
            {project.sdgGoals.length > 4 && (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs text-muted-foreground">
                +{project.sdgGoals.length - 4}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-2xl font-bold text-forest">${project.pricePerCredit.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">per credit</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={inComparison ? "default" : "outline"}
              size="icon"
              onClick={handleToggleComparison}
              className={cn(
                "h-9 w-9",
                inComparison && "bg-forest hover:bg-forest-light text-primary-foreground"
              )}
              title={inComparison ? "Remove from comparison" : "Add to comparison"}
            >
              {inComparison ? <Check className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
            </Button>
            <Button
              variant="forest"
              size="sm"
              onClick={handleAddToCart}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
