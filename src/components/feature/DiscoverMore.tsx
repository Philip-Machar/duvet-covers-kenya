import { discoverCategories } from '@/mocks/homeData';

export default function DiscoverMore() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-accent-dark mb-6">Discover More</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {discoverCategories.map((category) => (
          <div key={category.id} className="group">
            {/* Image */}
            <div className="relative h-[160px] md:h-[180px] rounded-lg overflow-hidden mb-3">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold text-sm">{category.name}</h3>
              </div>
            </div>

            {/* Subcategories */}
            <ul className="space-y-1.5">
              {category.subcategories.map((sub) => (
                <li key={sub}>
                  <a
                    href={`/collections/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xs text-gray-600 hover:text-primary transition-colors"
                  >
                    {sub}
                  </a>
                </li>
              ))}
            </ul>

            {/* Shop All Link */}
            <a
              href={`/collections/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-accent-dark hover:text-primary transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-dark text-white">
                <i className="ri-arrow-right-line text-[10px]"></i>
              </div>
              Shop All
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}