import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/sushi-12.png';
import { FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';
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
    { name: 'Trending', path: '/trending' },
    { name: 'Services', path: '/services' },
    { name: 'AboutUs', path: '/aboutus' },
  ];

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Animated Background Elements */}
      {!isScrolled && (
        <>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/15 to-purple-500/15 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
        </>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="group relative flex items-center"
          data-aos="fade-down"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-white/50 backdrop-blur-sm">
              <img 
                src={logo} 
                alt="SushiKing Logo" 
                className="h-10 w-10 object-contain" 
              />
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              SushiKing
            </h1>
            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full transform group-hover:scale-x-125 transition-transform duration-300"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1" data-aos="fade-down">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 group overflow-hidden ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-orange-500 to-pink-600 shadow-lg'
                  : 'bg-gradient-to-r from-orange-50 to-pink-50 group-hover:from-orange-100 group-hover:to-pink-100'
              }`}></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <span className="relative z-10 flex items-center">
                {link.name}
                {link.name === 'Trending' && (
                  <span className="ml-2 px-1.5 py-0.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs rounded-full animate-pulse">
                    Hot
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3" data-aos="fade-down">
          {/* Search */}
          <div className="relative">
            {showSearchInput ? (
              <form 
                onSubmit={handleSearch}
                className="flex items-center bg-white rounded-2xl shadow-xl border border-orange-200 overflow-hidden"
              >
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={handleSearchBlur}
                    placeholder="Search sushi, ramen..."
                    className="pl-12 pr-4 py-4 w-64 bg-transparent focus:outline-none text-slate-700 font-semibold placeholder-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="h-full px-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Go
                </button>
              </form>
            ) : (
              <button 
                onClick={toggleSearchInput}
                className="group p-3 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Search"
              >
                <FaSearch size={18} className="text-slate-700 group-hover:text-orange-600 transition-colors" />
              </button>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/checkout"
            className="group relative p-3 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <AiOutlineShoppingCart size={22} className="text-slate-700 group-hover:text-orange-600 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-black rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-bounce">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className="group p-3 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaUser size={18} className="text-slate-700 group-hover:text-orange-600 transition-colors" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden group p-3 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
          onClick={toggleMenu}
          data-aos="fade-down"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {isMenuOpen ? (
              <FaTimes size={20} className="text-slate-700 group-hover:text-orange-600 transition-colors" />
            ) : (
              <FaBars size={20} className="text-slate-700 group-hover:text-orange-600 transition-colors" />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 mt-2 overflow-hidden animate-fade-in">
          {/* Mobile Menu Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400/10 to-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 p-6 space-y-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-white bg-gradient-to-r from-orange-500 to-pink-600 shadow-lg'
                    : 'text-slate-700 bg-gradient-to-br from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.name === 'Trending' && (
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs rounded-full animate-pulse">
                      Hot
                    </span>
                  )}
                </div>
              </Link>
            ))}

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-4">
              <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-1 shadow-lg">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search menu..."
                  className="w-full pl-12 pr-4 py-4 bg-transparent focus:outline-none text-slate-700 font-semibold placeholder-slate-400 rounded-2xl"
                />
              </div>
            </form>

            {/* Mobile Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-orange-100">
              <Link
                to="/checkout"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-slate-700 bg-gradient-to-br from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative">
                  <AiOutlineShoppingCart size={22} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                Cart
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-slate-700 bg-gradient-to-br from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser size={18} />
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