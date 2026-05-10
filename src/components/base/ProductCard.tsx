import type { Product } from '@/mocks/homeData';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <a href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </a>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent-gold text-white text-[11px] font-bold px-2.5 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-sm">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-primary font-semibold mb-1">{product.category}</p>
        <a href={`/products/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </a>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${i < Math.floor(product.rating!) ? 'text-accent-gold' : 'text-gray-300'}`}
                >
                  {i < Math.floor(product.rating!) ? '\u2605' : '\u2606'}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-primary">KSh {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="w-full mt-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-primary transition-colors flex items-center justify-center gap-2"
        >
          <i className="ri-shopping-cart-line text-sm"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}