import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '@/components/feature/TopBar';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ProductCard from '@/components/base/ProductCard';
import { allProducts } from '@/mocks/allProducts';
import type { Product } from '@/mocks/homeData';

const categoryMap: Record<string, string> = {
  duvets: 'Duvet Covers',
  pillows: 'Pillows',
  blankets: 'Blankets',
  bedsheets: 'Bedsheets',
  'bedding-sets': 'Bedding Sets',
  'mattress-protectors': 'Mattress Protectors',
  'duvet-inners': 'Duvet Inners',
  pillowcases: 'Pillowcases',
};

const allCategories = Array.from(new Set(allProducts.map((p) => p.category)));

export default function CollectionsPage() {
  const { slug } = useParams<{ slug?: string }>();

  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const baseCategory = slug ? categoryMap[slug] : null;

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (baseCategory) {
      result = result.filter((p) => p.category === baseCategory);
    } else if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (priceRange === 'under3k') result = result.filter((p) => p.price < 3000);
    if (priceRange === '3k-6k') result = result.filter((p) => p.price >= 3000 && p.price <= 6000);
    if (priceRange === '6k-10k') result = result.filter((p) => p.price > 6000 && p.price <= 10000);
    if (priceRange === 'over10k') result = result.filter((p) => p.price > 10000);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sortBy === 'newest') {
      const withBadge = result.filter((p) => p.badge === 'New');
      const rest = result.filter((p) => p.badge !== 'New');
      result = [...withBadge, ...rest];
    }

    return result;
  }, [baseCategory, selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const pageTitle = baseCategory || 'All Collections';
  const pageSubtitle = baseCategory
    ? `Explore our best ${baseCategory.toLowerCase()} in Kenya`
    : 'Browse all our premium bedding collections';

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="px-4 md:px-6 lg:px-10 py-8 md:py-12 max-w-7xl mx-auto">
          <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <i className="ri-arrow-right-s-line text-xs"></i>
            <span className="text-gray-600">{pageTitle}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{pageTitle}</h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">{pageSubtitle}</p>
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-10 py-6 max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium hover:border-primary transition-colors"
            >
              <i className="ri-equalizer-line"></i>
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:outline-none focus:border-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-6">
              {/* Categories */}
              {!baseCategory && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Categories</h3>
                  <div className="space-y-2">
                    {allCategories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-600">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under3k', label: 'Under KSh 3,000' },
                    { value: '3k-6k', label: 'KSh 3,000 - 6,000' },
                    { value: '6k-10k', label: 'KSh 6,000 - 10,000' },
                    { value: 'over10k', label: 'Over KSh 10,000' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={opt.value}
                        checked={priceRange === opt.value}
                        onChange={() => setPriceRange(opt.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-4">
                  <i className="ri-search-line text-gray-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
                <p className="text-sm text-gray-500 mt-1">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p: Product) => {
                      window.dispatchEvent(
                        new CustomEvent('addToCart', { detail: { product: p, quantity: 1 } })
                      );
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}