import { marqueeItems } from '@/mocks/homeData';

export default function MarqueeSection() {
  return (
    <section className="py-4 bg-accent-gray border-y border-gray-200 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-10 flex-shrink-0">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <span className="text-accent-gold text-sm">★</span>
            </div>
            <span className="text-sm font-semibold text-accent-dark">{item}</span>
            {item === 'New Arrivals' && (
              <span className="ml-2 px-2 py-0.5 bg-accent-dark text-white text-[10px] font-bold rounded-sm">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}