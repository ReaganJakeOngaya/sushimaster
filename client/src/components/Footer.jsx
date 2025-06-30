import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-gray-400">
              Sushi
            </span>
            King
          </h3>
          <p className="text-gray-400">
            Bringing authentic Japanese flavors to your table with the finest
            ingredients and traditional techniques.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/menu"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/#trending"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Trending
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/#about-us"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaTwitter size={18} />
            </a>
          </div>
          <p className="mt-4 text-gray-400">
            Subscribe to our newsletter for updates and special offers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SushiKing. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer