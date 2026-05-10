import { useState } from 'react';
import { featuredProduct } from '@/mocks/homeData';

export default function FeaturedProduct() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(featuredProduct.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(featuredProduct.sizes?.[0] || '');
  const [added, setAdded] = useState(false);

  const formatPrice = (price: number) => {
    return `KSh${price.toLocaleString()}.00`;
  };

  const handleAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent('addToCart', {
        detail: { product: featuredProduct, quantity, selectedColor, selectedSize },
      })
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = '/cart';
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-accent-gray">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-start">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full">
          <a href={`/products/${featuredProduct.id}`} className="block">
            <div className="relative bg-white rounded-lg overflow-hidden aspect-square">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </a>
          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-3 flex-wrap overflow-x-hidden">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                type="button"
                className="w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden border border-gray-200 hover:border-primary transition-colors flex-shrink-0"
              >
                <img
                  src={featuredProduct.image}
                  alt="thumbnail"
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Info */}
        <div className="lg:w-1/2 w-full">
          {/* Badge */}
          {featuredProduct.badge && (
            <span className="inline-block px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-sm mb-3">
              {featuredProduct.badge}
            </span>
          )}

          <h2 className="text-lg md:text-xl font-bold text-accent-dark leading-snug mb-3">
            {featuredProduct.name}
          </h2>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-accent-dark">{formatPrice(featuredProduct.price)}</span>
            {featuredProduct.originalPrice && (
              <span className="text-base text-gray-400 line-through">{formatPrice(featuredProduct.originalPrice)}</span>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-4">Shipping calculated at checkout.</p>

          {/* Description Accordion */}
          <div className="border-t border-gray-200 py-3">
            <button type="button" className="flex items-center justify-between w-full text-left">
              <span className="text-sm font-medium text-accent-dark">Description</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-down-s-line text-gray-500"></i>
              </div>
            </button>
          </div>

          {/* Color Selection */}
          {featuredProduct.colors && (
            <div className="py-4">
              <span className="text-sm font-medium text-accent-dark mb-2 block">Color: {selectedColor}</span>
              <div className="flex gap-2">
                {featuredProduct.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                      selectedColor === color
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {featuredProduct.sizes && (
            <div className="py-2">
              <span className="text-sm font-medium text-accent-dark mb-2 block">SIZE</span>
              <div className="flex gap-2">
                {featuredProduct.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-gray-200 rounded-md w-fit">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-subtract-line text-sm"></i>
                  </div>
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-semibold text-accent-dark">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-add-line text-sm"></i>
                  </div>
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 h-10 flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-md transition-colors ${
                  added ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${added ? 'ri-check-line' : 'ri-shopping-cart-line'} text-sm`}></i>
                </div>
                {added ? 'Added to Cart!' : 'Add to cart'}
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full h-10 flex items-center justify-center gap-2 bg-accent-dark text-white text-sm font-semibold rounded-md hover:bg-black transition-colors"
            >
              Order Now
            </button>

            <button
              type="button"
              className="w-full h-10 flex items-center justify-center gap-2 border border-gray-200 text-accent-dark text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors"
            >
              Pay Online &amp; Get Free Delivery!
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-truck-line text-sm"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}