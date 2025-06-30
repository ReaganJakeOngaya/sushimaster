import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFish, FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    })

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Trending', path: '/#trending' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about-us' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center"
            data-aos="fade-down"
          >
            <FaFish className="text-primary mr-2" />
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
          <button className="p-2 rounded-full text-gray-700 hover:text-primary">
            <FaSearch size={18} />
          </button>
          <Link
            to="/cart"
            className="p-2 rounded-full text-gray-700 hover:text-primary relative"
          >
            <AiOutlineShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link
            to="/profile"
            className="p-2 rounded-full text-gray-700 hover:text-primary"
          >
            <FaUser size={18} />
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          data-aos="fade-down"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mx-4 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center px-3 py-2 space-x-4">
              <button className="text-gray-700 hover:text-primary">
                <FaSearch size={18} />
              </button>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-primary relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <AiOutlineShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header