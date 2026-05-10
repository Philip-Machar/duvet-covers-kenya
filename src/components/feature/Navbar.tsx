import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Duvets', href: '/collections/duvets' },
    { name: 'Bedsheets', href: '/collections/bedsheets' },
    { name: 'Pillows', href: '/collections/pillows' },
    { name: 'Blankets', href: '/collections/blankets' },
    { name: 'Contact', href: '/contact' },
  ];

  const loadCartCount = () => {
    try {
      const raw = localStorage.getItem('duvet-covers-cart');
      const items = raw ? JSON.parse(raw) : [];
      setCartCount(items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    loadCartCount();
    const handleCartUpdate = () => loadCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);
    const interval = setInterval(loadCartCount, 500);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      clearInterval(interval);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="relative z-50">
        {/* Main Navbar */}
        <nav className="bg-white border-b border-gray-100">
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-hotel-bed-fill text-primary text-xl"></i>
              </div>
              <span className="text-lg font-bold text-accent-dark tracking-tight">
                Duvet<span className="text-primary">Covers</span><span className="text-accent-gold ml-0.5">Kenya</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Search"
              >
                <i className="ri-search-line text-gray-600 text-lg"></i>
              </button>

              {/* Cart */}
              <a
                href="/cart"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors relative"
                aria-label="Cart"
              >
                <i className="ri-shopping-cart-line text-gray-600 text-lg"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </a>

              {/* User */}
              <button
                type="button"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Account"
              >
                <i className="ri-user-line text-gray-600 text-lg"></i>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors md:hidden"
                aria-label="Menu"
              >
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-gray-600 text-lg`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              <i className="ri-search-line text-gray-400 text-lg"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search duvet covers, pillows, blankets..."
                className="flex-1 text-base focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}