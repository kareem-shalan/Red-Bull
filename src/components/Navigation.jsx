import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY <50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-gradient-to-b from-black/90 to-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <Logo />
            </div>
            <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
              RED BULL
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks location={location} />
          </div>

          {/* Shop Now Button */}
          <Link 
            to="/products" 
            className="hidden md:block font-syncopate px-6 py-2 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                     hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105
                     relative overflow-hidden group"
          >
            <span className="relative z-10">SHOP NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-redbull-blue to-redbull-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-4">
            <NavLinks location={location} mobile />
            <Link 
              to="/products" 
              className="block font-syncopate px-6 py-2 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                       hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105
                       text-center mt-6"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Separate component for navigation links
const NavLinks = ({ location, mobile = false }) => {
  const linkClass = mobile
    ? `block font-rajdhani text-lg font-medium transition-colors duration-300 relative group
       px-4 py-2 rounded-lg hover:bg-white/5`
    : `font-rajdhani text-lg font-medium transition-colors duration-300 relative group`;

  return (
    <>
      <Link 
        to="/" 
        className={`${linkClass}
          ${location.pathname === '/' ? 'text-redbull-red' : 'text-white hover:text-redbull-red'}`}
      >
        Home
        {!mobile && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redbull-red transition-all duration-300 group-hover:w-full"></span>}
      </Link>
      <Link 
        to="/products" 
        className={`${linkClass}
          ${location.pathname === '/products' ? 'text-redbull-red' : 'text-white hover:text-redbull-red'}`}
      >
        Products
        {!mobile && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redbull-red transition-all duration-300 group-hover:w-full"></span>}
      </Link>
      <Link 
        to="/about" 
        className={`${linkClass}
          ${location.pathname === '/about' ? 'text-redbull-red' : 'text-white hover:text-redbull-red'}`}
      >
        About
        {!mobile && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redbull-red transition-all duration-300 group-hover:w-full"></span>}
      </Link>
      <Link 
        to="/contact" 
        className={`${linkClass}
          ${location.pathname === '/contact' ? 'text-redbull-red' : 'text-white hover:text-redbull-red'}`}
      >
        Contact
        {!mobile && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redbull-red transition-all duration-300 group-hover:w-full"></span>}
      </Link>
    </>
  );
};

export default Navigation; 