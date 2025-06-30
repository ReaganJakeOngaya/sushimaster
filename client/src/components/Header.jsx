import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/sushi-12.png';
import {FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const searchInputRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    if (!showSearchInput) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSearchInput(false);
      setIsMenuOpen(false);
    }
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setShowSearchInput(false);
    }
    setIsSearchFocused(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Trending', path: '/#trending' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center"
            data-aos="fade-down"
          >
            <img 
              src={logo} 
              alt="SushiKing Logo" 
              className="h-8 w-auto mr-2" 
            />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SushiKing
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
              data-aos="fade-down"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4" data-aos="fade-down">
          <div className="relative">
            {showSearchInput ? (
              <form 
                onSubmit={handleSearch}
                className={`flex items-center transition-all duration-300 ${
                  isSearchFocused ? 'ring-2 ring-primary rounded-md' : ''
                }`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={handleSearchBlur}
                  placeholder="Search sushi, ramen..."
                  className="px-4 py-2 w-64 border border-gray-300 rounded-l-md focus:outline-none focus:border-primary transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors duration-200 flex items-center"
                >
                  <FaSearch size={16} className="mr-2" />
                  Search
                </button>
              </form>
            ) : (
              <button 
                onClick={toggleSearchInput}
                className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-transparent transition-colors duration-200"
                aria-label="Search"
              >
                <FaSearch size={18} />
              </button>
            )}
          </div>

          <Link
            to="/checkout"
            className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200 relative"
          >
            <AiOutlineShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link
            to="/profile"
            className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            <FaUser size={18} />
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          onClick={toggleMenu}
          data-aos="fade-down"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mx-4 py-2 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="px-3 pt-2 pb-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our menu..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                >
                  <FaSearch size={16} />
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
              <Link
                to="/checkout"
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 relative p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <AiOutlineShoppingCart size={20} className="mr-2" />
                Cart
                {cart.length > 0 && (
                  <span className="ml-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser size={18} className="mr-2" />
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;