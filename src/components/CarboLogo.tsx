import { useState, useEffect } from 'react';
import carboLogoImage from '@/assets/carbo-logo.png';

interface CarboLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CarboLogo = ({ className = '', size = 'md', showText = true }: CarboLogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sizes = {
    sm: { container: 'h-8 w-8', text: 'text-lg' },
    md: { container: 'h-10 w-10', text: 'text-xl' },
    lg: { container: 'h-14 w-14', text: 'text-2xl' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        className={`flex items-center justify-center ${sizeConfig.container} transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] ${isLoaded ? 'animate-[logoPulse_1.5s_ease-in-out]' : ''}`}
        style={{
          animationIterationCount: 1,
        }}
      >
        <img 
          src={carboLogoImage} 
          alt="Carbo Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={`font-display ${sizeConfig.text} font-semibold text-foreground tracking-tight ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          Carbo
        </span>
      )}
    </div>
  );
};