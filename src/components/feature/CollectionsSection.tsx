import { collections } from '@/mocks/homeData';

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-10 md:py-14 px-4 md:px-6 lg:px-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-accent-dark">Collections</h2>
        <a href="/collections" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
          View all
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-0 md:mx-0 md:px-0">
        {collections.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex-shrink-0 w-[160px] md:w-[180px] group"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xs font-semibold text-accent-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <span className="text-xs text-gray-500 mt-1 block">{item.subTitle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}