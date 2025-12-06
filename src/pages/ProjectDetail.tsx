import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReviewList } from '@/components/ReviewList';
import { ReviewForm } from '@/components/ReviewForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProjects, mockReviews, addToCart } from '@/data/mockData';
import { SDG_GOALS, Review } from '@/types/marketplace';
import { 
  Star, MapPin, Shield, ShoppingCart, ArrowLeft, 
  Minus, Plus, Calendar, FileCheck, Users 
} from 'lucide-react';
import { toast } from 'sonner';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (project) {
      setReviews(mockReviews.filter(r => r.projectId === project.id));
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button variant="nature">Back to Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(project, quantity);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success(`Added ${quantity} credits to cart`);
  };

  const handleReviewSubmit = (rating: number, comment: string) => {
    const newReview: Review = {
      id: `r${Date.now()}`,
      projectId: project.id,
      userId: 'current-user',
      userName: 'You',
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };
    setReviews([newReview, ...reviews]);
  };

  const totalPrice = (quantity * project.pricePerCredit).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border py-4">
          <div className="container mx-auto px-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forest transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.isVerraCertified && (
                    <Badge variant="verified" className="gap-1 text-sm py-1.5 px-3">
                      <Shield className="h-4 w-4" />
                      VERRA Certified
                    </Badge>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <Badge variant="category" className="capitalize mb-3">
                    {project.category.replace('-', ' ')}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}, {project.country}
                    </div>
                    <div className="flex items-center gap-1 text-sun">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-medium">{project.rating}</span>
                      <span className="text-muted-foreground">({project.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* SDG Goals */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">SDG Goals Fulfilled</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.sdgGoals.map((goal) => (
                      <div
                        key={goal}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{ backgroundColor: SDG_GOALS[goal]?.color + '15' }}
                      >
                        <span className="text-lg">{SDG_GOALS[goal]?.icon}</span>
                        <span className="text-sm font-medium" style={{ color: SDG_GOALS[goal]?.color }}>
                          {SDG_GOALS[goal]?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Card */}
                <Card variant="nature" className="p-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Price per credit</p>
                      <p className="text-3xl font-bold text-forest">${project.pricePerCredit.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.availableCredits.toLocaleString()} credits available
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-16 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="text-xl font-bold text-foreground">${totalPrice}</p>
                    </div>
                  </div>

                  <Button
                    variant="forest"
                    size="lg"
                    className="w-full gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="flex-row items-center gap-3 pb-2">
                  <Calendar className="h-5 w-5 text-forest" />
                  <CardTitle className="text-base">Vintage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-foreground">{project.vintage}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-center gap-3 pb-2">
                  <FileCheck className="h-5 w-5 text-forest" />
                  <CardTitle className="text-base">Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-foreground">{project.methodology}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-center gap-3 pb-2">
                  <Users className="h-5 w-5 text-forest" />
                  <CardTitle className="text-base">Seller</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-foreground">{project.seller.name}</p>
                    {project.seller.verified && (
                      <Shield className="h-5 w-5 text-forest" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Customer Reviews
                </h2>
                <ReviewList reviews={reviews} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Write a Review
                </h3>
                <Card className="p-6">
                  <ReviewForm projectId={project.id} onSubmit={handleReviewSubmit} />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
