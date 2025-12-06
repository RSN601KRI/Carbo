import { Star } from 'lucide-react';
import { Review } from '@/types/marketplace';
import { format } from 'date-fns';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>No reviews yet. Be the first to review this project!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="p-5 rounded-xl border border-border bg-card"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-medium text-foreground">{review.userName}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(review.createdAt), 'MMMM d, yyyy')}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? 'text-sun fill-current'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
