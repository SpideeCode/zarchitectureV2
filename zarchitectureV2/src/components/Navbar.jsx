import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity ${scrolled || location.pathname !== '/' ? 'text-black' : 'text-white'
              }`}
          >
            ZArchitecture<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 lg:gap-12">
            <Link
              to="/"
              className={`text-sm tracking-wide font-medium transition-colors ${(scrolled || location.pathname !== '/')
                  ? (isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-black')
                  : 'text-white/90 hover:text-white'
                }`}
            >
              Accueil
            </Link>
            <Link
              to="/projects"
              className={`text-sm tracking-wide font-medium transition-colors ${(scrolled || location.pathname !== '/')
                  ? (isActive('/projects') ? 'text-blue-600' : 'text-gray-600 hover:text-black')
                  : 'text-white/90 hover:text-white'
                }`}
            >
              Projets
            </Link>
            <Link
              to="/about"
              className={`text-sm tracking-wide font-medium transition-colors ${(scrolled || location.pathname !== '/')
                  ? (isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-black')
                  : 'text-white/90 hover:text-white'
                }`}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className={`text-sm tracking-wide font-medium transition-colors ${(scrolled || location.pathname !== '/')
                  ? (isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-black')
                  : 'text-white/90 hover:text-white'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-black' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-black' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-black' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-lg">
          <Link
            to="/"
            className="text-gray-800 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projets
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            À Propos
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
