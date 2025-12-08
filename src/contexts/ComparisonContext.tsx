import { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '@/types/marketplace';
import { toast } from 'sonner';

interface ComparisonContextType {
  comparisonList: Project[];
  addToComparison: (project: Project) => void;
  removeFromComparison: (projectId: string) => void;
  clearComparison: () => void;
  isInComparison: (projectId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

const MAX_COMPARISON_ITEMS = 4;

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<Project[]>([]);

  const addToComparison = (project: Project) => {
    if (comparisonList.length >= MAX_COMPARISON_ITEMS) {
      toast.error(`You can only compare up to ${MAX_COMPARISON_ITEMS} projects`);
      return;
    }
    if (comparisonList.some(p => p.id === project.id)) {
      toast.info('Project already in comparison');
      return;
    }
    setComparisonList(prev => [...prev, project]);
    toast.success('Added to comparison');
  };

  const removeFromComparison = (projectId: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== projectId));
  };

  const clearComparison = () => {
    setComparisonList([]);
  };

  const isInComparison = (projectId: string) => {
    return comparisonList.some(p => p.id === projectId);
  };

  return (
    <ComparisonContext.Provider value={{ 
      comparisonList, 
      addToComparison, 
      removeFromComparison, 
      clearComparison,
      isInComparison 
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
