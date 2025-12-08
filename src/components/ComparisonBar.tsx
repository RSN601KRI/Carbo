import { Link } from 'react-router-dom';
import { useComparison } from '@/contexts/ComparisonContext';
import { Button } from '@/components/ui/button';
import { Scale, X } from 'lucide-react';

export const ComparisonBar = () => {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();

  if (comparisonList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg animate-fade-up">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-forest">
              <Scale className="h-5 w-5" />
              <span className="font-medium">{comparisonList.length} projects selected</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              {comparisonList.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-2 px-2 py-1 bg-muted rounded-lg"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-6 h-6 rounded object-cover"
                  />
                  <span className="text-sm text-foreground max-w-24 truncate">
                    {project.name}
                  </span>
                  <button
                    onClick={() => removeFromComparison(project.id)}
                    className="p-0.5 hover:bg-muted-foreground/20 rounded"
                  >
                    <X className="h-3 w-3 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={clearComparison}>
              Clear
            </Button>
            <Link to="/compare">
              <Button variant="forest" size="sm" disabled={comparisonList.length < 2}>
                Compare ({comparisonList.length})
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
