import { Check } from 'lucide-react';
import { TrackingStep } from '@/types/marketplace';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface OrderTrackingProps {
  steps: TrackingStep[];
}

export const OrderTracking = ({ steps }: OrderTrackingProps) => {
  const completedCount = steps.filter(s => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-forest rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex items-start gap-4 p-4 rounded-xl border transition-all",
              step.completed
                ? "bg-forest/5 border-forest/20"
                : "bg-muted/50 border-border"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                step.completed
                  ? "bg-forest text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step.completed ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={cn(
                "font-medium",
                step.completed ? "text-foreground" : "text-muted-foreground"
              )}>
                {step.status}
              </p>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
            
            {step.timestamp && (
              <p className="text-xs text-muted-foreground shrink-0">
                {format(new Date(step.timestamp), 'MMM d, h:mm a')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
