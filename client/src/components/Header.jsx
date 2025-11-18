import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/sushi-11.png';
import { FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '../context/CartContext';

import sushi2 from '../assets/salmon-nigiri.jpg';
import sushi3 from '../assets/nigiri-sushi.jpg';
import sushi4 from '../assets/cherashizushi.jpg';
import sushi5 from '../assets/miso-ramen.jpg';
import sushi6 from '../assets/Dragonroll.jpg';
import sushi7 from '../assets/volcano-ramen.jpg';
import sushi8 from '../assets/Rainbow-sushi.jpg';
import sushi9 from '../assets/spicy-tuna.jpg';
import sushi10 from '../assets/shoyu-ramen.jpg';
import sushi11 from '../assets/Temaki-sushi.jpg';
import sushi12 from '../assets/maki-sushi.jpg';
import dessert1 from '../assets/mochi-dessert.jpg';
import dessert2 from '../assets/Anmitsu.jpg';
import dessert3 from '../assets/matcha.jpg';
import dessert4 from '../assets/black tonkotsu.jpeg';
import dessert5 from '../assets/Mochi-Donuts.jpg';
import drink1 from '../assets/green-tea.webp';
import drink2 from '../assets/sakura-tea.jpg';
import drink3 from '../assets/mugicha.jpg';
import drink4 from '../assets/sakura-mojito.jpg';

// Mock search data - you can replace this with actual data from your API or context
const searchItems = [
    {
      id: 1,
      name: 'Maki Sushi',
      price: 21.0,
      category: 'sushi',
      image: sushi12,
    },
    {
      id: 2,
      name: 'Temaki sushi',
      price: 19.0,
      category: 'sushi',
      image: sushi11,
    },
    {
      id: 3,
      name: 'Nigiri Sushi',
      price: 24.0,
      category: 'sushi',
      image: sushi3,
    },
    {
      id: 4,
      name: 'Salmonon Nigiri Sushi',
      price: 18.0,
      category: 'sushi',
      image: sushi2,
    },
    {
      id: 5,
      name: 'Shoyu Ramen',
      price: 13.0,
      category: 'ramen',
      image: sushi10,
    },
    {
      id: 6,
      name:'Cherashizushi',
      price: 16.0,
      category: 'sushi',
      image: sushi4,
    },
    {
      id: 7,
      name: 'Miso Noodles',
      price: 12.0,
      category: 'ramen',
      image: sushi5,
    },
    {
      id: 8,
      name: 'Anmitsu Dessert',
      price: 8.0,
      category: 'desserts',
      image: dessert2,
    },
    {
      id: 9,
      name: 'Mochi Ice Cream',
      price: 9.0,
      category: 'desserts',
      image: dessert1,
    },
    {
      id: 10,
      name: 'Oruncha Tea',
      price: 5.0,
      category: 'drinks',
      image: drink1,
    },
    {
      id: 11,
      name: 'Sakura Tea',
      price: 6.0,
      category: 'drinks',
      image: drink2,
    },
    {
      id: 12,
      name: 'Mugicha',
      price: 4.5,
      category: 'drinks',
      image: drink3,
    },
    {
      id: 13,
      name: 'Dragon Roll Sushi',
      price: 4.5,
      category: 'sushi',
      image: sushi6,
    },
    {
      id: 14,
      name: 'Volcano Ramen',
      price: 4.5,
      category: 'ramen',
      image: sushi7,
    },
    {
      id: 15,
      name: 'Rainbow Roll Sushi',
      price: 4.5,
      category: 'sushi',
      image: sushi8,
    },
    {
      id: 16,
      name: 'Matcha Tiramisu',
      price: 4.5,
      category: 'desserts',
      image: dessert3,
    },
    {
      id: 17,
      name: 'Sakura Mojito',
      price: 8.0,
      category: 'drinks',
      image: drink4,
    },
    {
      id: 18,
      name: 'Spicy Tuna Crispy',
      price: 20.0,
      category: 'sushi',
      image: sushi9,
    },
    {
      id: 19,
      name: 'Black Tonkotsu',
      price: 16.0,
      category: 'ramen',
      image: dessert4,
    },
    {
      id: 20,
      name: 'Mochi Donuts',
      price: 10.0,
      category: 'desserts',
      image: dessert5,
    },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchResults([]);
        setIsSearchFocused(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filter items based on search query
    const filtered = searchItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    if (!showSearchInput) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSearchInput(false);
      setSearchResults([]);
      setIsMenuOpen(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    if (searchQuery.trim()) {
      const filtered = searchItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicking on them
    setTimeout(() => {
      if (!searchQuery) {
        setShowSearchInput(false);
      }
      setIsSearchFocused(false);
    }, 200);
  };

  const handleResultClick = (item) => {
    navigate(`/menu`);
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchInput(false);
    setIsMenuOpen(false);
    // You might want to scroll to the item or highlight it on the menu page
  };

  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Regular navigation links for non-admin routes
  const regularNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Trending', path: '/trending' },
    { name: 'Services', path: '/services' },
    { name: 'AboutUs', path: '/aboutus' },
  ];

  // Admin navigation links for admin routes
  const adminNavLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Menu', path: '/admin/menu' },
    { name: 'Orders', path: '/admin/orders' },
  ];

  // Use appropriate nav links based on route
  const navLinks = isAdminRoute ? adminNavLinks : regularNavLinks;

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white py-3'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to={isAdminRoute ? "/admin" : "/"}
          className="group relative flex items-center"
          data-aos="fade-down"
        >
          <div className="relative">
            <div className="relative bg-white p-2 shadow-sm border border-gray-200">
              <img 
                src={logo} 
                alt="SushiKing Logo" 
                className="h-8 w-8 object-contain" 
              />
            </div>
          </div>
          <div className="ml-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-950 bg-clip-text text-transparent">
              SushiKING
            </h1>
            <div className="h-0.5 w-8 bg-red-600 transform group-hover:scale-x-125 transition-transform duration-300"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-0" data-aos="fade-down">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-5 py-3 font-bold text-sm transition-all duration-300 group overflow-hidden ${
                location.pathname === link.path
                  ? 'text-white bg-black'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10 flex items-center">
                {link.name}
                {!isAdminRoute && link.name === 'Trending' && (
                  <span className="ml-2 px-1.5 py-0.5 bg-red-600 text-white text-xs animate-pulse">
                    Hot
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions - Hide cart and search on admin routes */}
        {!isAdminRoute ? (
          <div className="hidden lg:flex items-center space-x-2" data-aos="fade-down">
            {/* Search */}
            <div className="relative" ref={searchContainerRef}>
              {showSearchInput ? (
                <div className="relative">
                  <form 
                    onSubmit={handleSearch}
                    className="flex items-center bg-white border border-gray-300 overflow-hidden"
                  >
                    <div className="relative">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={handleSearchFocus}
                        onBlur={handleSearchBlur}
                        placeholder="Search sushi, ramen..."
                        className="pl-10 pr-4 py-3 w-56 bg-transparent focus:outline-none text-gray-700 font-semibold placeholder-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-full px-4 bg-black text-white font-bold hover:bg-red-700 transition-all duration-300"
                    >
                      Go
                    </button>
                  </form>

                  {/* Search Results Dropdown */}
                  {searchResults.length > 0 && isSearchFocused && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 shadow-lg mt-0 z-50 max-h-80 overflow-y-auto">
                      {searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleResultClick(item)}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-black text-sm truncate">{item.name}</h4>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 text-xs font-semibold capitalize">{item.category}</span>
                              <span className="text-red-600 font-bold text-sm">${item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={toggleSearchInput}
                  className="group p-3 bg-white border border-gray-200 hover:bg-gray-100 transition-all duration-300"
                  aria-label="Search"
                >
                  <FaSearch size={16} className="text-gray-700 group-hover:text-red-600 transition-colors" />
                </button>
              )}
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="group relative p-3 bg-white border border-gray-200 hover:bg-gray-100 transition-all duration-300"
            >
              <AiOutlineShoppingCart size={18} className="text-gray-700 group-hover:text-red-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-black h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="group p-3 bg-white border border-gray-200 hover:bg-gray-100 transition-all duration-300"
            >
              <FaUser size={16} className="text-gray-700 group-hover:text-red-600 transition-colors" />
            </Link>
          </div>
        ) : (
          // Admin profile link only
          <div className="hidden lg:flex items-center space-x-2" data-aos="fade-down">
            <Link
              to="/admin/admin-profile"
              className="group p-3 bg-white border border-gray-200 hover:bg-gray-100 transition-all duration-300"
            >
              <FaUser size={16} className="text-gray-700 group-hover:text-red-600 transition-colors" />
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden group p-3 bg-white border border-gray-200 hover:bg-gray-100 transition-all duration-300"
          onClick={toggleMenu}
          data-aos="fade-down"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            {isMenuOpen ? (
              <FaTimes size={18} className="text-gray-700 group-hover:text-red-600 transition-colors" />
            ) : (
              <FaBars size={18} className="text-gray-700 group-hover:text-red-600 transition-colors" />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 mt-0 overflow-hidden">
          <div className="p-4 space-y-1">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 font-bold text-base transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-white bg-black'
                    : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {!isAdminRoute && link.name === 'Trending' && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs animate-pulse">
                      Hot
                    </span>
                  )}
                </div>
              </Link>
            ))}

            {/* Mobile Search - Only show for non-admin routes */}
            {!isAdminRoute && (
              <div className="pt-3">
                <div className="relative bg-gray-50 border border-gray-200 p-1">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleSearchFocus}
                    placeholder="Search menu..."
                    className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none text-gray-700 font-semibold placeholder-gray-400"
                  />
                </div>
                
                {/* Mobile Search Results */}
                {searchResults.length > 0 && (
                  <div className="bg-white border border-gray-200 border-t-0 mt-1 max-h-60 overflow-y-auto">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          handleResultClick(item);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-black text-sm truncate">{item.name}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-xs font-semibold capitalize">{item.category}</span>
                            <span className="text-red-600 font-bold text-sm">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile Actions - Conditionally render based on route */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              {!isAdminRoute ? (
                <>
                  <Link
                    to="/cart"
                    className="flex items-center gap-3 px-4 py-3 font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group flex-1 mr-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative">
                      <AiOutlineShoppingCart size={18} />
                      {cartItemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-black h-4 w-4 flex items-center justify-center text-[10px]">
                          {cartItemCount}
                        </span>
                      )}
                    </div>
                    Cart
                  </Link>

                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group flex-1 ml-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUser size={16} />
                    Profile
                  </Link>
                </>
              ) : (
                <Link
                  to="/admin/admin-profile"
                  className="flex items-center gap-3 px-4 py-3 font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-300 group flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser size={16} />
                  Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;