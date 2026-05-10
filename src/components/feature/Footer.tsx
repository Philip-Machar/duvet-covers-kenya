export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white">
      {/* Newsletter / Search Bar */}
      <div className="border-b border-white/10 py-6 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-4xl mx-auto">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <i className="ri-hotel-bed-fill text-accent-gold text-xl"></i>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row">
              <select className="px-3 py-2 bg-white/10 text-white text-sm rounded-t-md sm:rounded-l-md sm:rounded-tr-none border-b sm:border-b-0 sm:border-r border-white/20 focus:outline-none cursor-pointer">
                <option>All</option>
                <option>Duvet Covers</option>
                <option>Pillows</option>
                <option>Blankets</option>
                <option>Bedsheets</option>
              </select>
              <input
                type="text"
                placeholder="Search for bedding guides"
                className="flex-1 px-3 py-2 bg-white/10 text-white text-sm placeholder-white/50 focus:outline-none"
              />
              <button
                type="button"
                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-primary-dark transition-colors flex items-center justify-center"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-search-line text-sm"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <button type="button" className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <i className="ri-user-line text-lg"></i>
            </button>
            <a href="/cart" className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <i className="ri-shopping-cart-line text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Support Banner */}
      <div className="border-b border-white/10 py-6 px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/20 rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <i className="ri-customer-service-line text-accent-gold"></i>
            </div>
            <span className="text-sm font-medium">Complaints &amp; Feedback</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-message-3-line text-accent-gold"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">For Complaints Click Here</h4>
                <p className="text-xs text-white/60">Resolve issues: Access our complaint section with a click.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-truck-line text-accent-gold"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Check your order status</h4>
                <p className="text-xs text-white/60">Updates &amp; tracking</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-arrow-go-back-line text-accent-gold"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Returns &amp; exchanges</h4>
                <p className="text-xs text-white/60">All you need to know</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-10 px-4 md:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-sm font-bold mb-4">Duvet Covers Kenya</h4>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Duvet Covers Kenya is a leading online store for premium duvet covers, pillows, blankets, bedsheets and bedding sets in Kenya. Shop soft, durable, and elegant bedroom essentials with fast nationwide delivery.
            </p>
            <h5 className="text-xs font-semibold mb-2">Categories:</h5>
            <p className="text-xs text-white/60">
              Duvet Covers | Pillows | Blankets | Bedsheets | Bedding Sets | Mattress Protectors
            </p>
            <div className="mt-4 text-xs text-white/60">
              <div className="flex items-start gap-2 mb-1">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-accent-gold text-xs"></i>
                </div>
                <span>Hazina Trade Centre, Monrovia Street, Mezzanine 2, Nairobi</span>
              </div>
              <div className="flex items-start gap-2 mb-1">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-phone-line text-accent-gold text-xs"></i>
                </div>
                <span>Call/WhatsApp: 0723 784 736 | 0723 333 767 | 0720 65 65 00</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-mail-line text-accent-gold text-xs"></i>
                </div>
                <span>sales@duvetcoverskenya.com</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Home', 'Search', 'Shipping Policy', 'Refund Policy', 'Contact us'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-white/60 hover:text-accent-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping */}
          <div>
            <h4 className="text-sm font-bold mb-4">Shipping</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-xs text-white/60">Shipping from Nairobi: Terms &amp; Conditions</span>
              </li>
            </ul>
          </div>

          {/* Delivery Coverage */}
          <div>
            <h4 className="text-sm font-bold mb-4">Delivery Coverage</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Nationwide delivery across Kenya including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and surrounding areas
            </p>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-white/10 py-6 px-4 md:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {['facebook', 'instagram', 'twitter-x', 'tiktok'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com/duvetcoverskenya`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <i className={`ri-${social === 'twitter-x' ? 'twitter-x' : social}-line text-sm`}></i>
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40 text-center sm:text-right">
            &copy; 2026 Duvet Covers Kenya. All rights reserved. | www.duvetcoverskenya.com
          </p>
        </div>
      </div>
    </footer>
  );
}