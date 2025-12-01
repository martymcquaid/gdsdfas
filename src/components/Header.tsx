import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { name: 'Dogs', icon: '🐕', href: '/category/dogs' },
    { name: 'Cats', icon: '🐈', href: '/category/cats' },
    { name: 'Birds', icon: '🦜', href: '/category/birds' },
    { name: 'Fish', icon: '🐠', href: '/category/fish' },
    { name: 'Reptiles', icon: '🦎', href: '/category/reptiles' },
    { name: 'Small Animals', icon: '🐰', href: '/category/small-animals' }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-teal-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>🎉 Free shipping on orders over $49!</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/customer-service" className="hover:text-teal-200 transition-colors">Customer Service</a>
              <a href="/track-order" className="hover:text-teal-200 transition-colors">Track Order</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🐾</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Pet Stuff</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <Link to="/account" className="p-2 text-gray-600 hover:text-teal-600 transition-colors" aria-label="Account">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-teal-600 transition-colors relative" aria-label="Wishlist">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
            
            <Link to="/cart" className="p-2 text-gray-600 hover:text-teal-600 transition-colors relative" aria-label="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isSearchOpen && (
          <div className="py-4 border-t">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, brands, or categories..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex items-center gap-3 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg px-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;