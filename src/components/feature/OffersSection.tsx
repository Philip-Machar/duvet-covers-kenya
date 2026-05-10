import { offerBanners } from '@/mocks/homeData';

export default function OffersSection() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-6 lg:px-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-accent-dark">Top Offers</h2>
        <a href="/offers" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Large left banner */}
        <a href={offerBanners[0].link} className="md:col-span-1 lg:col-span-2 lg:row-span-2 group relative rounded-lg overflow-hidden block">
          <div className="relative h-[300px] md:h-full min-h-[300px] lg:min-h-[420px]">
            <img
              src={offerBanners[0].image}
              alt={offerBanners[0].title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              {offerBanners[0].badge && (
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">
                  {offerBanners[0].badge}
                </span>
              )}
              <h3 className="text-white font-bold text-base md:text-lg">{offerBanners[0].title}</h3>
              <p className="text-white/80 text-xs mt-1">Shop Premium Bedding</p>
            </div>
          </div>
        </a>

        {/* Right top banners */}
        {offerBanners.slice(1, 3).map((banner) => (
          <a key={banner.id} href={banner.link} className="group relative rounded-lg overflow-hidden block">
            <div className="relative h-[180px] md:h-[200px]">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                {banner.badge && (
                  <span className="inline-block px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-sm mb-1">
                    {banner.badge}
                  </span>
                )}
                <h3 className="text-white font-bold text-sm">{banner.title}</h3>
              </div>
            </div>
          </a>
        ))}

        {/* Bottom wide banner */}
        <a href={offerBanners[3].link} className="md:col-span-2 lg:col-span-2 group relative rounded-lg overflow-hidden block">
          <div className="relative h-[160px] md:h-[180px]">
            <img
              src={offerBanners[3].image}
              alt={offerBanners[3].title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white font-bold text-sm">{offerBanners[3].title}</h3>
              <p className="text-white/80 text-xs mt-0.5">Transform Your Bedroom</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}