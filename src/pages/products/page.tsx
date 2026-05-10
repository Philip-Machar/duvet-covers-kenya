import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '@/components/feature/TopBar';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { allProducts } from '@/mocks/allProducts';
import { featuredProduct, trendingProducts, appliances } from '@/mocks/homeData';

const allItems = [...allProducts, featuredProduct, ...trendingProducts, ...appliances];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = allItems.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (product?.colors) setSelectedColor(product.colors[0]);
    if (product?.sizes) setSelectedSize(product.sizes[0]);
  }, [product]);

  useEffect(() => {
    const handler = () => {
      const raw = localStorage.getItem('duvet-covers-cart');
      const items = raw ? JSON.parse(raw) : [];
      setCartCount(items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
    };
    handler();
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const raw = localStorage.getItem('duvet-covers-cart');
      const items = raw ? JSON.parse(raw) : [];
      setCartCount(items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
          <i className="ri-error-warning-line text-gray-400 text-2xl"></i>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Product Not Found</h1>
        <p className="text-sm text-gray-500 mt-2">The product you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-dark transition-colors">
          Back to Home
        </a>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent('addToCart', {
        detail: { product, quantity, selectedColor, selectedSize },
      })
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <div className="px-4 md:px-6 lg:px-10 py-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <a href={`/collections/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
            {product.category}
          </a>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <span className="text-gray-600 line-clamp-1">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Image */}
          <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-primary font-semibold">{product.category}</p>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-1 leading-snug">{product.name}</h1>

            {product.rating && (
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating!) ? 'text-accent-gold' : 'text-gray-300'}`}>
                      {i < Math.floor(product.rating!) ? '\u2605' : '\u2606'}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
              </div>
            )}

            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-base md:text-lg text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                  <span className="bg-accent-gold text-white text-xs font-bold px-2 py-1 rounded-sm">-{discount}%</span>
                </>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Color: <span className="font-normal text-gray-500">{selectedColor}</span>
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                        selectedColor === color
                          ? 'border-primary bg-primary/5 text-primary font-medium'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Size: <span className="font-normal text-gray-500">{selectedSize}</span>
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary/5 text-primary font-medium'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-md w-fit">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-900 text-white hover:bg-primary'
                  }`}
                >
                  <i className={`${added ? 'ri-check-line' : 'ri-shopping-cart-line'} text-base`}></i>
                  {added ? 'Added to Cart!' : 'Add to Cart'}
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-3 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <i className="ri-flashlight-line text-base"></i>
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8 py-4 md:py-6 border-t border-gray-100">
              {[
                { icon: 'ri-truck-line', label: 'Free Delivery', sub: 'Orders over KSh 5,000' },
                { icon: 'ri-shield-check-line', label: '1 Year Warranty', sub: 'On all products' },
                { icon: 'ri-refresh-line', label: 'Easy Returns', sub: '30 day policy' },
                { icon: 'ri-secure-payment-line', label: 'Secure Payment', sub: 'M-Pesa & Cards' },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 mx-auto flex items-center justify-center">
                    <i className={`${badge.icon} text-primary text-lg md:text-xl`}></i>
                  </div>
                  <p className="text-[11px] md:text-xs font-semibold text-gray-900 mt-1">{badge.label}</p>
                  <p className="text-[10px] text-gray-400">{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}