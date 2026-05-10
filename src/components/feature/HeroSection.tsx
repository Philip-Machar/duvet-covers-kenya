import { useState } from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxurious%20cozy%20bedroom%20interior%20with%20white%20duvet%20covers%20plush%20pillows%20soft%20blankets%20and%20crisp%20bedsheets%20on%20a%20large%20bed%20natural%20warm%20lighting%20from%20window%20elegant%20modern%20decor%20soft%20neutral%20tones%20high%20end%20hotel%20style%20professional%20interior%20photography%20soft%20pastel%20background%20cream%20beige&width=1440&height=520&seq=70&orientation=landscape"
          alt="Luxurious bedroom with premium bedding"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/50 md:via-black/35 md:to-black/20"></div>
      </div>

      {/* Content - Centered on mobile, left-aligned on desktop */}
      <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-4 md:px-6 lg:px-16">
        <div className="text-center md:text-left max-w-xl">
          <span className="text-accent-gold text-xs font-semibold uppercase tracking-wider mb-3 block">
            Premium Quality
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Duvet Covers, Pillows &<br className="hidden md:block" /> Bedding in Kenya
          </h1>
          <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
            Shop premium duvet covers, pillows, blankets, bedsheets &amp; bedding sets. Soft, durable, and elegant for every bedroom. Delivery available countrywide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
            <a
              href="/collections/duvets"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-accent-dark text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Shop Duvets
            </a>
            <a
              href="/collections/bedsheets"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Shop Bedsheets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}