import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OrderTracking } from '@/components/OrderTracking';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockOrders } from '@/data/mockData';
import { Package, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const statusColors: Record<string, 'default' | 'forest' | 'earth' | 'status'> = {
  pending: 'status',
  processing: 'status',
  verified: 'forest',
  issued: 'forest',
  delivered: 'forest',
};

const Orders = () => {
  const orders = mockOrders;

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Package className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">No orders yet</h1>
            <p className="text-muted-foreground mb-6">
              Start purchasing carbon credits to see your orders here
            </p>
            <Link to="/projects">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-forest text-primary-foreground font-medium hover:bg-forest-light transition-colors">
                Browse Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
          <p className="text-muted-foreground mb-8">
            Track your carbon credit purchases and delivery status
          </p>

          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} variant="elevated">
                <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Order {order.id}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Placed on {format(new Date(order.createdAt), 'MMMM d, yyyy')}
                    </p>
                  </div>
                  <Badge variant={statusColors[order.status]} className="capitalize">
                    {order.status}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.projectId}
                        className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                      >
                        <img
                          src={item.project.imageUrl}
                          alt={item.project.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground line-clamp-1">
                            {item.project.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} credits × ${item.project.pricePerCredit.toFixed(2)}
                          </p>
                        </div>
                        <p className="font-semibold text-foreground">
                          ${(item.quantity * item.project.pricePerCredit).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Order Total */}
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="font-medium text-foreground">Order Total</span>
                    <span className="text-xl font-bold text-forest">
                      ${order.totalAmount.toFixed(2)}
                    </span>
                  </div>

                  {/* Tracking */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Delivery Tracking</h4>
                    <OrderTracking steps={order.trackingSteps} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
