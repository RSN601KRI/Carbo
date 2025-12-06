import { CATEGORIES } from '@/types/marketplace';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium",
          selected === null
            ? "bg-forest text-primary-foreground border-forest shadow-md"
            : "bg-card text-muted-foreground border-border hover:border-forest/50 hover:text-foreground"
        )}
      >
        🌍 All Projects
      </button>
      
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium",
            selected === category.id
              ? "bg-forest text-primary-foreground border-forest shadow-md"
              : "bg-card text-muted-foreground border-border hover:border-forest/50 hover:text-foreground"
          )}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};
