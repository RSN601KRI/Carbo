import carboLogoImage from '@/assets/carbo-logo.png';

interface CarboLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CarboLogo = ({ className = '', size = 'md', showText = true }: CarboLogoProps) => {
  const sizes = {
    sm: { container: 'h-8 w-8', text: 'text-lg' },
    md: { container: 'h-10 w-10', text: 'text-xl' },
    lg: { container: 'h-14 w-14', text: 'text-2xl' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex items-center justify-center ${sizeConfig.container} transition-transform hover:scale-105`}>
        <img 
          src={carboLogoImage} 
          alt="Carbo Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={`font-display ${sizeConfig.text} font-normal text-foreground tracking-tight`}>
          Carbo
        </span>
      )}
    </div>
  );
};
