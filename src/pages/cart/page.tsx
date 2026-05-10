import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/feature/TopBar';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [updating, setUpdating] = useState(false);

  const loadCart = () => {
    try {
      const raw = localStorage.getItem('duvet-covers-cart');
      setItems(raw ? JSON.parse(raw) : []);
    } catch {
      setItems([]);
    }
  };

  useEffect(() => {
    loadCart();

    const handler = () => {
      loadCart();
      setUpdating(false);
    };
    window.addEventListener('cartUpdated', handler);
    return () => window.removeEventListener('cartUpdated', handler);
  }, []);

  const saveCart = (newItems: CartItem[]) => {
    localStorage.setItem('duvet-covers-cart', JSON.stringify(newItems));
    setItems(newItems);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
    saveCart(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    saveCart(newItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <div className="px-4 md:px-6 lg:px-10 py-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <span className="text-gray-600">Shopping Cart</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <i className="ri-shopping-cart-line text-gray-300 text-3xl"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
            <p className="text-sm text-gray-500 mt-2">Looks like you have not added anything yet.</p>
            <a
              href="/"
              className="inline-block mt-6 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white border border-gray-100 rounded-lg">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs text-primary font-semibold">{item.product.category}</p>
                          <a href={`/products/${item.product.id}`} className="text-sm font-medium text-gray-900 hover:text-primary transition-colors line-clamp-2 block">
                            {item.product.name}
                          </a>
                          {item.selectedColor && (
                            <p className="text-xs text-gray-500 mt-1">Color: {item.selectedColor}</p>
                          )}
                          {item.selectedSize && (
                            <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(idx)}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-400 hover:text-red-500 flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <i className="ri-delete-bin-line text-sm md:text-base"></i>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2 md:mt-3">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, -1)}
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                          >
                            <i className="ri-subtract-line text-xs md:text-sm"></i>
                          </button>
                          <span className="w-8 md:w-10 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, 1)}
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                          >
                            <i className="ri-add-line text-xs md:text-sm"></i>
                          </button>
                        </div>
                        <p className="text-sm md:text-base font-bold text-gray-900">
                          KSh {(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-6">
                <a
                  href="/"
                  className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  <i className="ri-arrow-left-line"></i>
                  Continue Shopping
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-500 hover:border-red-300 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span>KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                      {shipping === 0 ? 'FREE' : `KSh ${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400">Free delivery on orders over KSh 5,000</p>
                  )}
                  <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-primary">KSh {total.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-6 py-3 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors"
                  onClick={() => alert('Checkout functionality coming soon!')}
                >
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                  <i className="ri-secure-payment-line"></i>
                  <span>Secure checkout with M-Pesa & Cards</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}