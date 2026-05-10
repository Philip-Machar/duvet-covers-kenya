export default function KitchenBanner() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-6 lg:px-10">
      <div className="relative rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Image */}
          <div className="lg:w-1/2 relative min-h-[280px] md:min-h-[350px]">
            <img
              src="https://readdy.ai/api/search-image?query=Luxurious%20bedroom%20with%20premium%20white%20bedding%20set%20duvet%20covers%20pillows%20and%20soft%20blankets%20elegant%20modern%20interior%20warm%20natural%20lighting%20professional%20interior%20photography%20clean%20crisp%20linen%20hotel%20quality&width=700&height=400&seq=80&orientation=landscape"
              alt="Premium bedding showcase"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 bg-accent-gray p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-dark mb-3">
              Upgrade Your<br />Sleep Experience
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Shop premium duvet covers, soft pillows, warm blankets and crisp bedsheets designed to transform your bedroom into a cozy sanctuary across Kenya.
            </p>
            <a
              href="/collections"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-dark text-white text-sm font-semibold rounded-md hover:bg-black transition-colors w-fit whitespace-nowrap"
            >
              Shop Bedding
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}