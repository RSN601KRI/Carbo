import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { CartItem } from '@/types/marketplace';
import { Button } from '@/components/ui/button';
import { getCart, updateCartItem, clearCart } from '@/data/mockData';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleQuantityChange = (projectId: string, newQuantity: number) => {
    const updatedCart = updateCartItem(projectId, newQuantity);
    setCart(updatedCart);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  const handleRemoveItem = (projectId: string) => {
    const updatedCart = updateCartItem(projectId, 0);
    setCart(updatedCart);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    // Simulate order placement
    clearCart();
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success('Order placed successfully!');
    navigate('/orders');
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.project.pricePerCredit,
    0
  );
  const serviceFee = subtotal * 0.025; // 2.5% service fee
  const total = subtotal + serviceFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Browse our carbon credit projects and start offsetting your footprint
            </p>
            <Link to="/projects">
              <Button variant="forest" className="gap-2">
                Browse Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
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
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forest transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.projectId} className="p-4 flex gap-4">
                  <Link to={`/projects/${item.projectId}`} className="shrink-0">
                    <img
                      src={item.project.imageUrl}
                      alt={item.project.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/projects/${item.projectId}`}>
                      <h3 className="font-semibold text-foreground hover:text-forest transition-colors line-clamp-1">
                        {item.project.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {item.project.location}, {item.project.country}
                    </p>
                    <p className="text-forest font-medium">
                      ${item.project.pricePerCredit.toFixed(2)} / credit
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => handleRemoveItem(item.projectId)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.projectId, item.quantity - 1)}
                        className="p-1.5 hover:bg-muted transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.projectId, item.quantity + 1)}
                        className="p-1.5 hover:bg-muted transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <p className="font-semibold text-foreground">
                      ${(item.quantity * item.project.pricePerCredit).toFixed(2)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Service Fee (2.5%)</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  variant="forest"
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Carbon credits will be verified and issued within 3-5 business days
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
