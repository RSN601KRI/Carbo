import { Leaf } from 'lucide-react';

interface CarboLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CarboLogo = ({ className = '', size = 'md', showText = true }: CarboLogoProps) => {
  const sizes = {
    sm: { container: 'h-8 w-8', icon: 'h-4 w-4', text: 'text-lg' },
    md: { container: 'h-10 w-10', icon: 'h-5 w-5', text: 'text-xl' },
    lg: { container: 'h-14 w-14', icon: 'h-7 w-7', text: 'text-2xl' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex items-center justify-center rounded-xl bg-gradient-forest ${sizeConfig.container} shadow-glow transition-transform hover:scale-105`}>
        <Leaf className={`${sizeConfig.icon} text-primary-foreground`} />
      </div>
      {showText && (
        <span className={`font-display ${sizeConfig.text} font-normal text-foreground tracking-tight`}>
          Carbo
        </span>
      )}
    </div>
  );
};