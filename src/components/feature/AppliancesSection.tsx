import { appliances } from '@/mocks/homeData';

export default function AppliancesSection() {
  const formatPrice = (price: number) => {
    return `KSh${price.toLocaleString()}.00`;
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 lg:px-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-accent-dark">More Bedding Essentials</h2>
        <a href="/collections" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5" data-product-shop>
        {appliances.map((product) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 transition-all"
          >
            {/* Badge */}
            {product.badge && (
              <span className={`absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-bold rounded-sm ${
                product.badge === 'Best Seller'
                  ? 'bg-accent-gold text-white'
                  : product.badge === 'New'
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white'
              }`}>
                {product.badge}
              </span>
            )}

            {/* Image */}
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-xs font-medium text-accent-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2 min-h-[36px]">
                {product.name}
              </h3>

              <div className="flex items-end gap-2">
                <span className="text-sm font-bold text-accent-dark">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => {
                      const isFilled = i < Math.floor(product.rating!);
                      return (
                      <div key={i} className="w-3 h-3 flex items-center justify-center">
                        <span className={`text-xs ${isFilled ? 'text-accent-gold' : 'text-gray-300'}`}>
                          {isFilled ? '\u2605' : '\u2606'}
                        </span>
                      </div>
                      );
                    })}
                  </div>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}