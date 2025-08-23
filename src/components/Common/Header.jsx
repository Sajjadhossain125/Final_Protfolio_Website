import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/education', name: 'Education' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 sm:p-6 bg-black/30 backdrop-blur-lg border-b border-gray-700/50 relative z-50">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-tight">
          D...MSH
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-semibold tracking-wide transition-all duration-300 pb-1 border-b-2 ${
                  isActive
                    ? 'text-yellow-400 border-yellow-400'
                    : 'text-gray-300 border-transparent hover:text-white hover:border-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
        </nav>
        
        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-4">
          <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-10'}`}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className={`bg-gray-800/50 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full transition-all duration-300 ${
                searchOpen ? 'opacity-100' : 'opacity-0 w-0 px-0'
              }`}
            />
            <button
              onClick={handleSearchToggle}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-yellow-400 transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>
      
      {/* Mobile Side Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-gray-900/95 backdrop-blur-lg z-40 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700/50">
          <span className="text-yellow-400 text-xl font-bold">Menu</span>
          <button 
            onClick={closeMobileMenu} 
            className="text-white hover:text-red-400 transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Search */}
        <div className="p-5 border-b border-gray-700/50">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="flex flex-col p-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-lg font-medium py-3 px-4 rounded-lg transition-colors duration-300 ${
                  isActive 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
        </nav>
      </div>
      
      {/* Overlay when mobile menu open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;